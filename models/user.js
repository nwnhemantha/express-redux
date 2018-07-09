var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
const schema = mongoose.Schema

const userSchema = new schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  reset: { type: String }
})

const User = (module.exports = mongoose.model('User', userSchema))

module.exports.saveUser = (newUser, cb) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      if (err) throw err
      newUser.password = hash
      newUser.save(cb)
    })
  })
}

module.exports.findByEmail = (email, cb) => {
  User.findOne({ email: email }, cb)
}

module.exports.checkPw = (pw, hash, cb) => {
  bcrypt.compare(pw, hash, function(err, res) {
    cb(null, res)
  })
}

module.exports.findUserById = (id, cb) => {
  User.findOne(id, cb)
}
