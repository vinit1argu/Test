const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../model/loginModel");
const loginRepository = require("./loginRepository");

// JWT secret key
const secretKey = "test-key";

const loginService = {
  // register new user
  async register({ username, password }, res) {
    try {
      // checking the length of password
      if (password.length < 8) {
        res.json({ message: "Invalid username or password. Again try" });
      } else {
        // Hashing the password before storing it in db
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating new user
        const user = new User({ username, password: hashedPassword });
        await loginRepository.saveUser(user);

        res.json({ message: "User registered successfully" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // login registered user
  async login({ username, password }, res) {
    try {
      // finding username (email)
      const user = await loginRepository.findUserByUsername(username);
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
      // checking the password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Wrong password entered." });
      }
      // generate access token
      const access_token_expiration = "30m"; // access token expires in 30 minutes
      const accessToken = jwt.sign(
        { userId: user._id, username: user.username },
        secretKey,
        { expiresIn: access_token_expiration }
      );
      // generate refresh token
      const refresh_token_expiration = "1h"; // refresh token expires in  1 hour
      const refreshToken = jwt.sign(
        { userId: user._id, username: user.username },
        secretKey,
        { expiresIn: refresh_token_expiration }
      );
      // respond with access and refresh token with their expiry time
      res.status(200).json({
        accessToken,
        access_token_expiration,
        refreshToken,
        refresh_token_expiration,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // Refresh access token
  async refreshToken({ refreshToken }, res) {
    // checking refreshToken is empty or not
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token given" });
    }

    try {
      // verifying and decoding the refresh token
      const decoded = jwt.verify(refreshToken, secretKey);

      if (!decoded || !decoded.userId) {
        return res.status(401).json({ message: "Invalid refresh token" });
      }

      // finding user with userId from refresh token
      const user = await loginRepository.findUserById(decoded.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      // generating new access token
      const access_token_expiration = "30m"; // access token expires in 30 minutes
      const accessToken = jwt.sign(
        { userId: user._id, username: user.username },
        secretKey,
        { expiresIn: access_token_expiration }
      );
      // respond with new access token and expiry time
      res.status(200).json({ accessToken, access_token_expiration });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // viewing all the registered users
  async getUsers(res) {
    try {
      const users = await loginRepository.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = loginService;
