const UserInfo = require('../models/userInfo.model');
const asyncHandler = require('express-async-handler');

// @desc Get all posts
// @route GET /posts
// @access Public

const getUserInfo = asyncHandler(async (req, res) => {
  UserInfo
      .find()
      .then(userInfos => {
          return res.status(200).send(userInfos)
      })
      .catch(error => {
          console.log(error);
      })
})


module.exports = {
    getUserInfo
}