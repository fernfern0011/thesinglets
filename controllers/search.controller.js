const Outfit = require('../models/outfitsearch.model')
const People = require('../models/peoplesearch.model')
const asyncHandler = require('express-async-handler')

// @desc post a searched text in database
// @route POST /postOutfitSearch
// @access Private
const postOutfitSearch = asyncHandler(async (req, res) => {
    const { itemName, counter = 1 } = req.body

    // Confirm data
    if (!itemName) {
        return res.status(400).json({ message: 'This is required' })
    }

    // Check for duplicate search
    const duplicate = await Account.findOne({ accUsername }).lean().exec()

    if (duplicate) {
        counter += 1
    }
    console.log(counter)

    const outfitSearchObject = { "Item Name": itemName, counter}

    // Create and store new data 
    const outfitSearch = await Outfit.create(outfitSearchObject)

    if (outfitSearch) { //created 
        return res.status(201).json({ message: `Search added` })
    } else {
        res.status(400).json({ message: 'Invalid data received' })
    }
});

// @desc Get all OutfitSearch
// @route GET /getAllOutfitSearch
// @access Private
const getAllOutfitSearch = asyncHandler(async (req, res) => {
    Outfit
        .find()
        .then(outfits => {
            return res.status(200).send(outfits)
        })
        .catch(error => {
            console.log(error);
        })
})

// @desc Get an outfit search by ID
// @route GET /getOutfitSearch/:id
// @access Private
const getOutfitSearch = asyncHandler(async (req, res) => {
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
    postOutfitSearch,
    getAllOutfitSearch,
    getOutfitSearch
}