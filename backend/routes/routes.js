const express = require('express');
const userApi = require('../features/users/userApi');
const router = express.Router();

router.use('',userApi);

module.exports = router;