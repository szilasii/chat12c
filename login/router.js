var login = require('./login_model')
var router = require('express').Router()

router.post('/login',login.signin);

module.exports = router