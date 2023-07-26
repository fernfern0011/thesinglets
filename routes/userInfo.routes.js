const express = require('express');
const router = express.Router();
const userInfoController = require('../controllers/userInfo.controller')

router.get('/getUserInfo', userInfoController.getUserInfo)

module.exports = router