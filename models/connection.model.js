const mongoose = require('mongoose')

const connectionSchema = new mongoose.Schema(
    {
        beingFollowedAccID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        theOneFollowAccID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Connection', connectionSchema)