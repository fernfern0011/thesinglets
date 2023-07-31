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
    // Assuming you have a session middleware that handles session authentication and adds the authenticated account ID to the session object (e.g., req.session.accountId)
    const accountId = req.session.accountId;
  
    // Extract post data from the request body
    const { description, gender, postImage, hashtag, itemTag } = req.body;
  
    try {
      // Create a new post object with the account ID and other details
      const newPost = new Post({
        accID: accountId,
        description,
        gender,
        postImage,
        hashtag,
        itemTag,
      });
  
      // Save the new post to the database
      const savedPost = await newPost.save();
  
      // Return the newly created post in the response
      res.status(201).json(savedPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = {
    getAllPosts,
    createPost,
}