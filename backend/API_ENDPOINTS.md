# Backend API Endpoints Documentation

This document outlines all available backend API endpoints and how the frontend connects to them.

## Base URL

- **Development**: `http://localhost:3001`
- **Production**: Set via `NEXT_PUBLIC_BACKEND_URL` environment variable

## Endpoints

### 1. Health Check

**Endpoint**: `GET /health`

**Description**: Server health check with database connectivity test

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "database": "connected",
  "environment": "production"
}
```

---

### 2. Form Submission

**Endpoint**: `POST /api/forms/submit`

**Description**: Submit any form type. The backend handles different form types and routes them to appropriate database tables.

**Request Body**:
```json
{
  "formType": "contact",
  "formData": {
    // Form-specific data fields
  }
}
```

**Supported Form Types**:

| Form Type | Database Table | Description |
|-----------|---------------|-------------|
| `contact` | `contact_inquiries` | General contact form |
| `career` | `career_applications` | Job applications |
| `sales` | `sales_inquiries` | Sales inquiries |
| `solution` | `business_inquiries` | Custom solution inquiries (mapped) |
| `cookie` | `contact_inquiries` | Cookie/privacy inquiries (mapped) |
| `privacy` | `contact_inquiries` | Privacy policy inquiries (mapped) |
| `legal` | `contact_inquiries` | Legal/terms inquiries (mapped) |

**Response**:
```json
{
  "success": true,
  "data": {
    // Database record
  },
  "message": "Form submitted successfully"
}
```

**Error Response**:
```json
{
  "error": "Error message",
  "message": "Detailed error message"
}
```

**Notes**:
- All form submissions automatically include IP address and user agent tracking
- Email notifications are sent to admins (non-blocking)
- Confirmation emails are sent to users (non-blocking)
- Form types marked as "mapped" are transformed to fit existing database tables

---

### 3. Waitlist

**Endpoint**: `POST /api/waitlist`

**Description**: Add email to waitlist

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",  // Optional
  "business": "Company Name",  // Optional
  "interest": "general"  // Optional, defaults to "general"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Successfully added to waitlist!",
  "data": {
    "id": "uuid",
    "email": "john@example.com"
  }
}
```

**Error Response** (409 Conflict - email already exists):
```json
{
  "error": "This email is already on the waitlist"
}
```

**Notes**:
- Email must be unique (enforced at database level)
- Automatic email notifications sent to admins
- Confirmation email sent to user

---

## Frontend Integration

### Environment Variables

The frontend uses the following environment variable to connect to the backend:

```env
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
```

**Important**: The `NEXT_PUBLIC_` prefix is required for the variable to be available in the browser.

### Using the Form Submission Hook

The frontend uses a custom hook `useFormSubmission` that handles form submissions:

```typescript
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

const { submitForm, isSubmitting, isSubmitted, error, success } = useFormSubmission({
  validateForm: formValidations.contact, // Optional validation
  onSuccess: (data) => {
    // Handle success
  },
  onError: (error) => {
    // Handle error
  }
})

// Submit form
await submitForm('contact', formData)
```

### Direct API Calls

For direct API calls (e.g., waitlist), use fetch:

```typescript
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'

const response = await fetch(`${backendUrl}/api/waitlist`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})

const result = await response.json()
```

---

## CORS Configuration

The backend is configured to accept requests from:
- Frontend URL specified in `FRONTEND_URL` environment variable
- Multiple origins can be specified (comma-separated)
- In development, localhost:3000 is allowed by default

---

## Error Handling

All endpoints return consistent error responses:

**400 Bad Request**:
```json
{
  "error": "Validation error message"
}
```

**409 Conflict** (e.g., duplicate email):
```json
{
  "error": "This email is already registered"
}
```

**500 Internal Server Error**:
```json
{
  "error": "Failed to submit form",
  "message": "Detailed error message"
}
```

---

## Email Notifications

All form submissions and waitlist signups trigger email notifications:

1. **Admin Notification**: Sent to `RESEND_TO_EMAIL` (configured in environment)
2. **User Confirmation**: Sent to form submitter's email (if provided)

Email sending is **non-blocking** - if email fails, the form submission still succeeds.

---

## Rate Limiting

API endpoints are rate-limited:
- **Limit**: 100 requests per 15 minutes per IP address
- **Applies to**: All `/api/*` endpoints
- **Error Response**: 
  ```json
  {
    "error": "Too many requests from this IP, please try again later."
  }
  ```

---

## Security Features

1. **Helmet.js**: Security headers
2. **CORS**: Configured origin restrictions
3. **Rate Limiting**: Protection against abuse
4. **Input Sanitization**: Handled by frontend before submission
5. **SQL Injection Protection**: Using parameterized queries
6. **IP Tracking**: Captured for all submissions
7. **User Agent Tracking**: Captured for all submissions

---

## Database Tables

Each form type maps to a specific database table:

- `contact_inquiries` - Contact, cookie, privacy, legal forms
- `career_applications` - Career applications
- `business_inquiries` - Solution inquiries
- `sales_inquiries` - Sales inquiries
- `waitlist` - Waitlist signups

---

## Testing

### Local Testing

1. Start backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Backend runs on `http://localhost:3001`

3. Frontend should have:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
   ```

### Testing Endpoints

Use curl or any HTTP client:

```bash
# Health check
curl http://localhost:3001/health

# Submit form
curl -X POST http://localhost:3001/api/forms/submit \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "formData": {
      "name": "Test User",
      "email": "test@example.com",
      "message": "Test message"
    }
  }'

# Waitlist
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com"
  }'
```

---

## Deployment Checklist

- [ ] `NEXT_PUBLIC_BACKEND_URL` set in frontend environment
- [ ] `FRONTEND_URL` set in backend environment (for CORS)
- [ ] Database migrations run
- [ ] Email service (Resend) configured
- [ ] All environment variables set
- [ ] Health check endpoint working
- [ ] Test form submission from frontend
- [ ] Test waitlist signup
- [ ] Verify email notifications working

---

**Last Updated**: 2024

