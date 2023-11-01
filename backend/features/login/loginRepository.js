const User = require('../../model/loginModel');

const loginRepository = {
  async saveUser(user) {
    return user.save();
  },

  async findUserByUsername(username) {
    return User.findOne({ username });
  },

  async findUserById(userId) {
    return User.findById(userId);
  },

  async getAllUsers() {
    return User.find();
  },
};

module.exports = loginRepository;
