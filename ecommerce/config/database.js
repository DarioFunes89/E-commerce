const path = require('path');

// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ecommerce'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '1384'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: JSON.parse(env('DATABASE_SSL_SELF', false)),
    },
    debug: false,
  },
});