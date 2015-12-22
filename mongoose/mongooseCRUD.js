/**
 * Created by soul on 2015/12/17.
 */
/*
*  mongoose增删改查
*
*
* */

var mongoose=require("mongoose");
var TestSchema=new mongoose.Schema({
    name:String,
    age:{type:Number,default:18},
    friends:{type:[{name:String,age:Number}]}
})

var db=mongoose.connect("mongodb://127.0.0.1:27017/test");

var TestModel=db.model("testCRUD",TestSchema);

// Create

var create_entity={
    name:"小明",
    age:22,
    friends:[{
        name:"小红",
        age:25,
    },{
        name:"小刚",
        age:19,
    }]
}

// 实体层存储

var TsetEntity=new TestModel(create_entity)
TsetEntity.save(function(err,docs){
    console.log("实体层存储 done")
})

//模板层存储

TestModel.create({
    name:"大明",
    age:5,
    friends:[{
        name:"大红",
        age:4,
    },{
        name:"大刚",
        age:9
    }]
},function(err,doc){
    if(!err){console.log("模板层存储 done")}
})


// Read

TestModel.find({name:"小明"},function(err,doc){
    if(!err){console.log("读取 '小明' done")}
})


// Update

//模板层更新
TestModel.update({name:"大明"},{$set:{age:40}},function(err){
    if(!err){console.log("update done")}
})

//实体层更新
TestModel.findOne({name:"小明"},function(err,doc){
    doc.name="小明二号"
    doc.save(function(err,doc){
        if(!err){console.log("实体层更新 done")}
    })
})

// Delete

TestModel.remove({name:"大明"},function(err,doc){
    if(!err){console.log("删除 '大明' done")}
})








