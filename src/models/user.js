const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true

  },
  profesion: {
    type: String,
    required: true

  },
  numero: {
    type: Number,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);