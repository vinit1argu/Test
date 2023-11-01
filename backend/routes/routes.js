const express = require('express');
const userApi = require('../features/users/userApi');
const loginApi = require('../features/login/loginApi')
const router = express.Router();

router.use('',userApi);
router.use('/auth',loginApi)

module.exports = router;