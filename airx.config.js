// PM2 App Config
const path = require('path');

module.exports = {
  apps: [
    {
      name: 'airx',
      script: 'index.js',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cwd: path.join(__dirname, './dist'),
      error_file: path.join(__dirname, '../log/airx.err.log'),
      out_file: path.join(__dirname, '../log/airx.out.log'),
      instances: 0,
      exec_mode: 'cluster',
      max_memory_restart: '800M',
      merge_logs: true
    },
    {
      name: 'airx-doc',
      script: 'index.js',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cwd: path.join(__dirname, './dist/doc'),
      error_file: path.join(__dirname, '../log/airx-doc.err.log'),
      out_file: path.join(__dirname, '../log/airx-doc.out.log'),
      max_memory_restart: '800M',
      merge_logs: true
    }
  ]
};
