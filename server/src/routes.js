import test from '../src/controllers/test';
import user from '../src/controllers/user';

module.exports = (app) => {
  app.get('/test', test.testModule);
  app.post('/register', user.register);
}