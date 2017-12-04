import Promise from 'bluebird';
import bcryptNodeJs from 'bcrypt-nodejs';

const bcrypt = Promise.promisifyAll(bcryptNodeJs);

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then((hash) => {
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  });

  User.prototype.comparePassword = (password, savedPassword) => {
    return bcrypt.compareAsync(password, savedPassword);
  };

  return User;
};