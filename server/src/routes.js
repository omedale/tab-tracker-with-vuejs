import test from '../src/controllers/test';
module.exports = (app) => {
  app.get('/test', test.testModule);
}