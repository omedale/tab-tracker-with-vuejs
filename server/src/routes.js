import test from '../src/controllers/test';
import user from '../src/controllers/user';
import auth from '../src/controllers/Authentication';
import song from '../src/controllers/Songs';
import bookmark from '../src/controllers/bookmarks';
import AuthenticationPolicy from './policies/AuthnticationPolicies';
import isAuthenticated from './policies/isAuthenticated';

module.exports = (app) => {
  app.get('/test', test.testModule);
  app.get('/songs', song.index);
  app.get('/songs/:songId', song.show);
  app.put('/songs/:songId', song.put);
  app.post('/songs', song.post);
  app.post('/register', AuthenticationPolicy.register, auth.register);
  app.post('/login', auth.login);
  app.get('/bookmarks', isAuthenticated, bookmark.index);
  app.post('/bookmarks', isAuthenticated, bookmark.post);
  app.delete('/bookmarks/:bookmarkId', isAuthenticated, bookmark.remove);
};
