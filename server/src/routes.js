import test from '../src/controllers/test';
import user from '../src/controllers/user';
import auth from '../src/controllers/Authentication';
import AuthenticationPolicy from './policies/AuthnticationPolicies';

module.exports = (app) => {
  app.get('/test', test.testModule);
  app.post('/register', AuthenticationPolicy.register, auth.register);
  app.post('/login', auth.login);
};
