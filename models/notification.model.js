const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
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
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Notification', notificationSchema)