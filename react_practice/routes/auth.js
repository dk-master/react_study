var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.signup);

module.exports = router;