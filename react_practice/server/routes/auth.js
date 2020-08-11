var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
const authUtil  = require('../middleware/auth');
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

router.get('/', authUtil.auth,userController.checkToken); 
router.get('/signout', authUtil.auth,userController.signout);
module.exports = router;