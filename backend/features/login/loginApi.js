const express = require('express');
const router = express.Router();
const loginController = require('./loginController');
const loginMiddleware = require('../../Middleware/loginMiddleware');

router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.post('/refresh-token', loginController.refreshToken);

router.post('/logout', loginMiddleware.protectRoute, loginController.logout);

router.get('/users', loginController.getUsers);

module.exports = router;