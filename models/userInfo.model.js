const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        bio: {
            type: String,
            default: ""
        },
        gender: {
            type: String,
            default: ""
        },
        nickname: {
            type: String,
            default: ""
        },
        userImage: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('UserInfo', userInfoSchema, 'userinfo')