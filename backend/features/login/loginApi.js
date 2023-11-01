const express = require('express');
const router = express.Router();
const loginController = require('./loginController');

router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.post('/refresh-token', loginController.refreshToken);
router.get('/users', loginController.getUsers);

module.exports = router;