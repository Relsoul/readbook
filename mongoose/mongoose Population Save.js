/**
 * Created by soul on 2016/1/4.
 */
var mongoose=require("mongoose");
var ObjectId=mongoose.Schema.Types.ObjectId
var RoomSchema=new mongoose.Schema({
    name:String,
    musics:[{type:ObjectId,ref:"Music"}]
})

var MusicSchema=new mongoose.Schema({
       name:String,
        url:String
    }
)
var db=mongoose.connect("mongodb://127.0.0.1:27017/test");
var RoomModel=db.model("Room",RoomSchema);
var MusicModel=db.model("Music",MusicSchema);

/*var _room,_music;

_room=new RoomModel({
    name:"测试房间1"
})
_room.save()

_music=new MusicModel({
    name:"测试音乐1",
    url:"http://baidu.com/1"
})
_music.save()

_music=new MusicModel({
    name:"测试音乐2",
    url:"http://baidu.com/2"
})
_music.save()

_music=new MusicModel({
    name:"测试音乐3",
    url:"http://baidu.com/3"
})
_music.save()*/


/*RoomModel.findOne({name:"测试房间1"},function(err,doc){
    doc.musics.push("568a88f83b093ae84b7ce213")
    doc.musics.push("568a88f83b093ae84b7ce212")
    doc.musics.push("568a88f83b093ae84b7ce211")
    doc.save(function(){
        if(!err){console.log("添加done")}
    })
})*/

RoomModel.findOne({musics:{$in:["568a88f83b093ae84b7ce213"]}}).populate("musics").exec(function(err,docs){
    console.log("docs",docs)
    //无法在populate直接更名
  /*  docs.musics[0].name="测试音乐3更名啦！！！"
    docs.save(function(err,docs){
        if(!err){
            console.log("保存done")
        }
    })*/

    MusicModel.findOne({_id:"568a88f83b093ae84b7ce213"},function(err,music){
        music.name="更名更名！！"
        music.save(function(err,music){
            if(!err){console.log("更名完毕")}

        })
    })




})












