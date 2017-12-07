import dotenv from 'dotenv';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');


const config = require('../config/config');

dotenv.config();
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.development.database, config.development.username, config.development.password, {
      dialect: 'postgres',
      operatorsAliases: false,
    },
  );
}


// const sequelize = new Sequelize(
//   config.db.database,
//   config.db.user,
//   config.db.password,
//   {
//     dialect: process.env.DIALECT || 'sqlite',
//     host: process.env.HOST || 'localhost',
//     storage: './tabtracker.sqlite',
//     operatorsAliases: false,
//   },
// );

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
