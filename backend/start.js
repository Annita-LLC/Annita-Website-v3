const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

async function start() {
  // Check if we should run migration (only in production, first time)
  if (process.env.NODE_ENV === 'production' && !process.env.MIGRATIONS_RUN) {
    console.log('🔄 Running database migrations...');
    try {
      await execAsync('node run-migration.js');
      console.log('✅ Migrations completed successfully');
      // Set flag to prevent running migrations on every restart
      process.env.MIGRATIONS_RUN = 'true';
    } catch (error) {
      console.error('❌ Migration failed:', error.message);
      // Don't exit - let server start anyway (migrations might already be run)
      console.log('⚠️  Continuing server startup...');
    }
  }

  // Start the server
  console.log('🚀 Starting server...');
  require('./server.js');
}

start();

