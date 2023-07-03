const mongoose = require('mongoose')

const outfitSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        weblink: {
            type: String,
            required: true
        },
        outfitImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Outfit', outfitSchema)