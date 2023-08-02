const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        description: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        postImage: {
            type: String,
            required: true
        },
        hashtag: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }],
        itemTag: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ItemTag'
        }]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema, 'post')