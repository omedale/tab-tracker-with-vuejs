import jwt from 'jsonwebtoken';
import config from '../config/config';

const { User } = require('../models');

function jwbSignUser(user) {
  const jwtExpiry = 60 * 60 * 24;
  return jwt.sign(user, config.authentication.jwt_secret,
    {
      expiresIn: jwtExpiry,
    });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userData = user.toJSON();
      res.send({
        message: 'Registration Successful',
        user: userData,
        token: jwbSignUser(userData),
      });
    } catch (err) {
      res.status(400).send({
        error: 'The email already exist',
        // errMsg: err,
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        res.status(403).send({
          error: 'Invalid Credentials',
        });
      }
      const isPasswordValid = user.comparePassword(password, user.password);
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Invalid Password',
        });
      }
      const userData = user.toJSON();
      res.send({
        message: 'Login Successful',
        user: userData,
        token: jwbSignUser(userData),
      });
    } catch (err) {
      res.status(500).send({
        error: 'Opps! An error has occured .....',
      });
    }
  },
};
