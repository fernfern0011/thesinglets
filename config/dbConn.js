const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://angelitak:angelitak@thesinglets.bxskgvh.mongodb.net/?retryWrites=true&w=majority")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB