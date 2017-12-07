import express from 'express';
import morgan from 'morgan';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config';

const { sequelize } = require('./models');
// const {sequelize} = require('./models');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('../src/routes')(app);

const server = http.createServer(app);
server.listen(config.port);
console.log(`We are running on port ${config.port}`);
module.exports = app;
