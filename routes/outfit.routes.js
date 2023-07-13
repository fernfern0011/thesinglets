const express = require('express')
const router = express.Router()
const outfitController = require('../controllers/outfit.controller')

router.get('/getAllOutfits', outfitController.getAllOutfits)
router.get('/getOutfit/:id', outfitController.getOutfitByID)

module.exports = router