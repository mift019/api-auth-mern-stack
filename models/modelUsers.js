const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const modelUserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = modelUsers = mongoose.model("users", modelUserSchema);