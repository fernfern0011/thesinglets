const Outfit = require('../models/outfit.model')
const asyncHandler = require('express-async-handler')

// @desc Get all outfits
// @route GET /getAllOutfits
// @access Private
const getAllOutfits = asyncHandler(async (req, res) => {
    Outfit
        .find()
        .then(outfits => {
            return res.status(200).send(outfits)
        })
        .catch(error => {
            console.log(error);
        })
})

// @desc Get an outfit by ID
// @route GET /getOutfit/:id
// @access Private
const getOutfitByID = asyncHandler(async (req, res) => {
    Outfit
        .findById(req.params.id)
        .then(outfit => {
            return res.status(200).send(outfit)
        })
        .catch(error => {
            console.log(error);
        })
})

module.exports = {
    getAllOutfits,
    getOutfitByID
}