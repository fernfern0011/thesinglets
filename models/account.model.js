const mongoose = require('mongoose')

// const accountSchema = new mongoose.Schema(
//     {
//         accType: {
//             type: String,
//             default: "user"
//         },
//         accUsername: {
//             type: String,
//             required: true
//         },
//         accEmail: {
//             type: String,
//             required: true
//         },
//         accPassword: {
//             type: String,
//             required: true
//         }
//     },
//     {
//         timestamps: true
//     }
// )

// const accountSchema = new mongoose.Schema({
//     accType: String,
//     accUsername: String,
//     accEmail: String,
//     accPassword: String,
//   });


module.exports = mongoose.model('Account', accountSchema);
