const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const hashtagSchema = new mongoose.Schema(
    {
        postID: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Post'
        }],
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

hashtagSchema.plugin(AutoIncrement, {
    inc_field: 'count',
    id: 'hashtagCount',
    start_seq: 1
})

module.exports = mongoose.model('Hashtag', hashtagSchema)