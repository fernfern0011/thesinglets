const mongoose = require('mongoose')

const upvoteSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        postID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Post'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Upvote', upvoteSchema)