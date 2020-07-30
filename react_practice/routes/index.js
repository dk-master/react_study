var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dk-master:ehdrhks2@reactstudy.cirp5.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false})
.then(()=> console.log("몽고DB 연결 성공"))
.catch(err => console.log(err));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message:"hello react"});
});




module.exports = router;
