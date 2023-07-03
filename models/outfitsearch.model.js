const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const outfitSearchSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Outfit'
        },
    },
    {
        timestamps: true
    }
)

outfitSearchSchema.plugin(AutoIncrement, {
    inc_field: 'count',
    id: 'outfitSearchCount',
    start_seq: 1
})

module.exports = mongoose.model('OutfitSearch', outfitSearchSchema)