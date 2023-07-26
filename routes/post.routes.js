const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')

router.get('/getAllPosts', postController.getAllPosts)

module.exports = router