const passport = require('passport')

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    console.log('-------******----', user);
    if (err || !user) {
      res.status(403).send({
        error: 'you do not have access to this resource'
      })
    } else {
      req.user = user
      console.log('-------------');
      console.log(req.user);
      next()
    }
  })(req, res, next)
}
