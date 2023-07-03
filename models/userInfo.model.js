const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        bio: {
            type: String
        },
        gender: {
            type: String
        },
        nickname: {
            type: String
        },
        userImage: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('UserInfo', userInfoSchema)