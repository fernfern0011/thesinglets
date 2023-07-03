const mongoose = require('mongoose')

const itemTagSchema = new mongoose.Schema(
    {
        outfitID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Outfit'
        },
        postID: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Post'
        }],

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('ItemTag', itemTagSchema)