require('dotenv/config');

module.exports = {
  development: {
    username: 'letsMapAdmin',
    password: process.env.DATABASE_PASSWORD,
    database: 'database_development',
    host: process.env.DATABASE_HOST,
    port: process.env.PORT,
    dialect: 'mysql',
    logging: false,
  },
};
