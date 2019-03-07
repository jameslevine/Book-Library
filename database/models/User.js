const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide your username']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide your password']
  }
})

userSchema.pre('save', function(next) {
  const user = this
  bcrypt.hash(user.password, 10, function(error, encrypted) {
    user.password = encrypted
    next()
  })
})

module.exports = mongoose.model('User', userSchema)
