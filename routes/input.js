var express = require('express');
var router = express.Router();
var Atable =  require('../db').Atable

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('input',{title:'选择日期'});
});

router.post('/',function(req,res,next){
    Atable.create(req.body.name,(err)=>{
        if(err) return next(err);
        res.send(req.body.name);
    });
});

router.get('/all',function(req,res,next){
    Atable.all((err,data)=>{
        if(err) return next(err);
        res.send(data);
    });
});

module.exports = router;
