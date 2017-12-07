import test from '../src/controllers/test';
import user from '../src/controllers/user';
import auth from '../src/controllers/Authentication';
import song from '../src/controllers/Songs';
import AuthenticationPolicy from './policies/AuthnticationPolicies';

module.exports = (app) => {
  app.get('/test', test.testModule);
  app.get('/songs', song.index);
  app.get('/songs/:songId', song.show);
  app.put('/songs/:songId', song.put);
  app.post('/songs', song.post);
  app.post('/register', AuthenticationPolicy.register, auth.register);
  app.post('/login', auth.login);
};
