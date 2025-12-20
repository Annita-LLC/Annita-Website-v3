const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

async function start() {
  // Note: In DigitalOcean App Platform, run migrations manually or via build/run commands
  // Auto-migration on startup is disabled to prevent issues in production
  
  // Check if we should run migration (only in development or if explicitly enabled)
  if (process.env.RUN_MIGRATIONS === 'true') {
    console.log('🔄 Running database migrations...');
    try {
      await execAsync('node run-migration.js');
      console.log('✅ Migrations completed successfully');
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

