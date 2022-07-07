var express = require('express');
var router = express.Router();
var Atable =  require('../db').Atable

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('input',{title:'选择日期'});
});

router.post('/',function(req,res,next){
    var create_date = req.body.name;
    console.log(create_date);
    if(!create_date){
        // 获取当前日期
        var date = new Date();

        // 获取当前月份
        var nowMonth = date.getMonth() + 1;

        // 获取当前是几号
        var strDate = date.getDate();

        // 添加分隔符“-”
        var seperator = "-";

        // 对月份进行处理，1-9月在前面添加一个“0”
        if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
        }

        // 对月份进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
        }

        // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
        create_date = date.getFullYear() + seperator + nowMonth + seperator + strDate 
        }
    Atable.create(create_date,(err)=>{
        if(err) return next(err);
        res.send(create_date);
    });

});

router.get('/all',function(req,res,next){
    Atable.all((err,data)=>{
        if(err) return next(err);
        res.send(data);
    });
});

module.exports = router;
