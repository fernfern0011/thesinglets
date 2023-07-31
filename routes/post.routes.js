const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')

router.get('/getAllPosts', postController.getAllPosts)
router.post('/createPost', postController.createPost);

module.exports = router