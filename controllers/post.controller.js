const Post = require('../models/post.model');
const asyncHandler = require('express-async-handler');

// @desc Get all posts
// @route GET /posts
// @access Public

const getAllPosts = asyncHandler(async (req, res) => {
  Post
      .find()
      .then(posts => {
          return res.status(200).send(posts)
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
    getAllPosts
}