/**
 * Created by soul on 2015/12/22.
 */
var mongoose=require("mongoose");
var ObjectId=mongoose.Schema.Types.ObjectId
var NameSchema=new mongoose.Schema({
    name:String,
    age:{type:Number,default:18},
    classId:[{type:ObjectId,ref:"ClassName"}]
})

var ClassSchema=new mongoose.Schema({
        className:{
            type:String,
            unique:true
        },
        credit:Number
    }
)


var db=mongoose.connect("mongodb://127.0.0.1:27017/test");
var NameModel=db.model("Name",NameSchema);
var ClassModel=db.model("ClassName",ClassSchema);

var _Class,_Name;

_Class=new ClassModel({
    className:"数学",
    credit:5
})
_Class.save(function(err,doc){console.log(doc)})

 _Class=new ClassModel({
    className:"语文",
    credit:10
})
_Class.save(function(err,doc){console.log(doc)})

_Name=new NameModel({
    name:"小明",
    age:20
})

_Name.save(function(err,doc){console.log(doc)})

_Name=new NameModel({
    name:"小红",
    age:25
})

_Name.save(function(err,doc){console.log(doc)})

//添加课程

NameModel.findOne({name:"小明"},function(err,doc){
        console.log(57,doc)
        //语文
        doc.classId.push("5678bd800c79fdf00e15b184")
        doc.save()
        // 连表查询小明选择的课程
        NameModel
            .findOne({name:"小明"})
            .populate("classId")
            .exec(function(err,doc){
                console.log(69,doc)
                /*
                * { age: 20,
                * classId:
                * [ { __v: 0,
                *   credit: 10,
                *   className: '语文',
                *   _id: 5678bd800c79fdf00e15b184 } ],
                * __v: 1,
                * name: '小明',
                * _id: 5678c36088fd47482e1df3de }
                *
                *
                * */
            })
});










