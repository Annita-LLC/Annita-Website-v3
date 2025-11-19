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

Copy `.env.example` to `.env` and fill in your database credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=annita_db
DB_USER=postgres
DB_PASSWORD=your_password

PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

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

