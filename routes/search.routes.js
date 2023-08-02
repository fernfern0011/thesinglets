const express = require('express')
const router = express.Router()
const searchController = require('../controllers/search.controller')

router.get('/postOutfitSearch', searchController.postOutfitSearch)
router.get('/getAllOutfitSearch', searchController.getAllOutfitSearch)
router.get('/getOutfitSearch/:id', searchController.getOutfitSearch)

module.exports = router