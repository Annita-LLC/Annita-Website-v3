const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'annita_db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

async function runMigration() {
  const client = await pool.connect();
  
  try {
    console.log('📦 Reading migration file...');
    const migrationFile = path.join(__dirname, 'migrations', '001_create_form_tables.sql');
    const sql = fs.readFileSync(migrationFile, 'utf8');
    
    console.log('🚀 Running migration...');
    await client.query(sql);
    
    console.log('✅ Migration completed successfully!');
    console.log('📊 All form submission tables have been created.');
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

// Check if database credentials are set
if (!process.env.DB_PASSWORD) {
  console.error('❌ Error: DB_PASSWORD is not set in .env file');
  console.log('📝 Please create a .env file in the backend directory with:');
  console.log('   DB_HOST=localhost');
  console.log('   DB_PORT=5432');
  console.log('   DB_NAME=annita_db');
  console.log('   DB_USER=postgres');
  console.log('   DB_PASSWORD=your_password');
  process.exit(1);
}

runMigration();

