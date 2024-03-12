var user_model = require('./user-model');
var router = require('express').Router();
const auth = require("../auth/auth");
router.get('/user/:id',auth,user_model.getUserDataFromId);
router.post('/user',user_model.regUser);


module.exports = router