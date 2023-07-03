const mongoose = require('mongoose')

const verifiedAccountSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Verified', verifiedAccountSchema)