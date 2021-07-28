const mongoose = require('mongoose');

var userLoginSchema = new mongoose.Schema({
   emailId: { type: String },
   password: { type: String },

})

module.exports = mongoose.model("register", userLoginSchema)

