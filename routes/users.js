var express = require('express')
var router = express.Router()
var User = require('../models/user')
var jwt = require('jsonwebtoken')
var config = require('../config/config')
var passport = require('passport')

router.get('/', function(req, res, next) {
  res.send('json({ status: true })')
})

router.post('/register', function(req, res, next) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  User.saveUser(newUser, (err, user) => {
    if (err) {
      res.json({ status: false, msg: 'Something wrong!' })
    }

    if (user) {
      res.json({ status: true, msg: 'User registered!' })
    }
  })
})

router.post('/login', function(req, res, next) {
  var email = req.body.email
  var pw = req.body.password

  User.findByEmail(email, (err, user) => {
    if (err) throw err
    if (!user) {
      res.json({ status: false, msg: 'No user found!' })
      return false
    }

    User.checkPw(pw, user.password, (authErr, authUser) => {
      if (authErr) throw authErr
      if (!authUser) {
        res.json({ status: false, msg: 'Wrong password!' })
      } else {
        const token = jwt.sign(user.toObject(), config.secret, { expiresIn: 86400 })
        user.password = null
        res.json({
          status: true,
          msg: 'Login success',
          token: 'JWT ' + token,
          data: user
        })
      }
    })
  })
})

router.post('/dashboard', passport.authenticate('jwt', { session: false }), function(
  req,
  res,
  next
) {
  console.log(req.user)
  res.json({ status: 'req' })
})

module.exports = router
