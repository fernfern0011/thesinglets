const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const peopleSearchSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
    },
    {
        timestamps: true
    }
)

peopleSearchSchema.plugin(AutoIncrement, {
    inc_field: 'count',
    id: 'peopleSearchCount',
    start_seq: 1
})

module.exports = mongoose.model('PeopleSearch', peopleSearchSchema)