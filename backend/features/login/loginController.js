const loginService = require('./loginService');

const loginController = {
  // Protected route
  protectedRoute: (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  },
  // Route to register a new user
  async register(req, res) {
    try {
      await loginService.register(req.body, res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // Route to login and generate access and refresh token
  async login(req, res) {
    try {
      await loginService.login(req.body, res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  
  // logout
  async logout(req, res) {
    try {
      await loginService.logout(req.body, res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // Refresh access token
  async refreshToken(req, res) {
    try {
      await loginService.refreshToken(req.body, res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // view the registered users
  async getUsers(req, res) {
    try {
      await loginService.getUsers(res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = loginController;
