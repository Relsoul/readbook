/**
 * Created by soul on 2015/12/30.
 */
var mongoose=require("mongoose");
var TestSchema=new mongoose.Schema({
    name:String,
    age:{type:Number,default:18},
    friends:{type:[{name:String,age:Number}]}
})

var db=mongoose.connect("mongodb://127.0.0.1:27017/test");
var TestSchema={
    name:String,
    music:[{
        src:String,
        name:String,
        //more以分钟为单位
        expire:{type:Date,default:Date.now(),index:{expires:1}},
    }]
}

var TestModel=db.model("testTTL",TestSchema);



var _test={
    name:"小明5",
}

var _s=new TestModel(_test)
_s.save()

TestModel.findOne({name:"小明5"},function(err,doc){
        doc.music.push({
            src:"http://baidu.com",
            name:"百度5测试5",
            expire:new Date(new Date().getTime()+60000)
        })
    doc.save(function(err,doc){
        if(!err){
            console.log("添加成功")
        }
    })
})

