# Annita Backend API

Backend API server for Annita Website using Node.js and PostgreSQL.

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Database Setup

1. Make sure PostgreSQL is installed and running
2. Create a database:

```sql
CREATE DATABASE annita_db;
```

3. Run the migration using Node.js (recommended):
   ```bash
   npm run migrate
   ```
   
   Or manually run the SQL file using psql:
   ```bash
   psql -h localhost -U postgres -d annita_db -f migrations/001_create_form_tables.sql
   ```

### 3. Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=annita_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_SSL=false

# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Email Configuration (Resend)
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=admin@yourdomain.com
APP_NAME=Annita
```

**Email Setup (Resend):**
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use Resend's test domain
3. Create an API key in the dashboard
4. Add the API key to your `.env` file

### 4. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Forms
- `POST /api/forms/submit` - Submit any form type

### Waitlist
- `POST /api/waitlist` - Add email to waitlist

### Downloads
- `POST /api/downloads/track` - Track investor document downloads

### Health Check
- `GET /health` - Server health status

## Form Types

Supported form types:
- `contact` - Contact inquiries
- `career` - Career applications
- `support` - Support issues
- `business` - Business inquiries
- `sales` - Sales inquiries
- `pricing` - Pricing inquiries
- `the100_youth` - The 100 Youth applications
- `the100_partner` - The 100 Partner applications
- `the100_mentor` - The 100 Mentor applications
- `the100_contact` - The 100 Contact inquiries
- `newsletter` - Newsletter subscriptions
- `investor_download` - Investor document downloads

## Database Connection

The backend uses connection pooling for efficient database access. Make sure your PostgreSQL server is running and accessible with the credentials in your `.env` file.

For DigitalOcean deployments, SSL connections are automatically enabled. See [`DIGITALOCEAN_DEPLOYMENT.md`](./DIGITALOCEAN_DEPLOYMENT.md) for detailed deployment instructions.

## Email Notifications

The backend uses [Resend](https://resend.com) for sending email notifications:

- **Form Submissions**: Admin notifications are sent when forms are submitted
- **Confirmation Emails**: Users receive confirmation emails after submitting forms
- **Waitlist**: Both admin notifications and user confirmations for waitlist signups

Email sending is non-blocking - if email fails, form submissions still succeed and are saved to the database.

## Deployment

This backend is configured for deployment on **DigitalOcean App Platform**. See [`DIGITALOCEAN_DEPLOYMENT.md`](./DIGITALOCEAN_DEPLOYMENT.md) for complete deployment instructions.

