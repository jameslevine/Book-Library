const User = require('../database/models/User')

module.exports = (req, res, next) => {
  //fetch users
  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      console.log('this does not work')
      return res.redirect('/')
    }
    next()
  })
  //verify users
}
