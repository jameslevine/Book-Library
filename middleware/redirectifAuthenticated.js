const User = require('../database/models/User')

module.exports = (req, res, next) => {
  //fetch users
  if (req.session.userId) {
    return res.redirect('/')
  }
  next()
}
