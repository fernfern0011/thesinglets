const express = require('express');
const router = express.Router();
const userInfoController = require('../controllers/userInfo.controller')

router.get('/getUserInfo', userInfoController.getUserInfo)
router.get('/getCurrentUser', userInfoController.getCurrentUser)

module.exports = router