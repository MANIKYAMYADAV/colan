const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   name: { type: String },
   phone: { type: String },
   address: { type: String },
   state: { type: String },
   city: { type: String },

   // status: { type: Number, max: 4, default: 1 },                    // 1.Active 0.Inactive
   // created_at: { type: Number, default: new Date().getTime() },
   //updated_at: { type: Number, default: new Date().getTime() },
})

module.exports = mongoose.model("Users", userSchema)

