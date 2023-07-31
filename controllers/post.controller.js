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

const createPost = asyncHandler(async (req, res) => {
    const { description, gender, postImage, hashtag, itemTag } = req.body;
    const postObject = { description, gender, postImage, hashtag, itemTag };
    postObject.accID = req.session.accountId;

    // Create and store new post
    const post = await Post.create(postObject);

    if (post) {
        return res.status(201).json({ message: `New post created`, post }); // Include the 'post' object in the response
    } else {
        res.status(400).json({ message: 'Invalid post data received' });
    }
});

// For Postman testing
// const createPost = asyncHandler(async (req, res) => {
//     const { accID, description, gender, postImage, hashtag, itemTag } = req.body;
//     const postObject = { accID, description, gender, postImage, hashtag, itemTag };
//     // postObject.accID = req.session.accountId;

//     // Create and store new post
//     const post = await Post.create(postObject);

//     if (post) {
//         return res.status(201).json({ message: `New post created`, post }); // Include the 'post' object in the response
//     } else {
//         res.status(400).json({ message: 'Invalid post data received' });
//     }
// });


module.exports = {
    getAllPosts,
    createPost,
}