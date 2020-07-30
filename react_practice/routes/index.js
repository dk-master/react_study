var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("../config/database");
mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false})
.then(()=> console.log("몽고DB 연결 성공"))
.catch(err => console.log(err));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message:"hello react"});
});

router.use('/auth', require('./auth'));
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = router;
