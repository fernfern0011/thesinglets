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

// const getAllPosts = asyncHandler(async (req, res) => {
//     try {
//       const posts = await Post.find();
//       console.log('Fetched Posts:', posts); // Debugging statement to check the fetched posts
//       return res.status(200).send(posts);
//     } catch (error) {
//       console.log('Error:', error); // Debugging statement to check for any errors
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  

module.exports = {
    getUserInfo
}