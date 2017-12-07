module.exports = {
  development: {
    username: 'postgres',
    password: 'my_postgres_password',
    database: 'tab-tracker',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'my_postgres_password',
    database: 'tab-tracker',
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
  },
  port: process.env.PORT || 8081,
  db: {
    name: process.env.DB_NAME || 'tab-tracker',
    user: process.env.DB_USER || 'tab-tracker',
    password: process.env.DB_PASS || 'tab-tracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite',
      operatorsAliases: false,
    },
  },
  authentication: {
    jwt_secret: process.env.JWT_SECRET || 'secret',
  },
};
