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

// Assuming you have a route to get the currently logged-in user's information
// /api/userinfo/getCurrentUser
// Make sure you handle user authentication in this route to ensure only logged-in users can access it.

const getCurrentUser = asyncHandler(async (req, res) => {
    // Assuming you have stored the user's information in the session under the key 'user'
    // If you have a different key for the user's information in the session, use that key instead.
    const user = req.session.user;
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ message: 'User not logged in' });
    }
  });
  

module.exports = {
    getUserInfo,
    getCurrentUser,
}