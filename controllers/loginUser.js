const bcrypt = require('bcrypt')
const User = require('../database/models/User')

module.exports = (req, res) => {
  const { email, password } = req.body;
  //find users
User.findOne({ email }, (error, user) => {
  if (user) {
    bcrypt.compare(password, user.password, (error, same) => {
      if (same) {
        req.session.userId = user._id
        res.redirect('/')
      } else {
        res.redirect('/auth/login')
      }
    })
  }
})
}
