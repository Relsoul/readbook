/**
 * Created by soul on 2015/12/13.
 */
var express=require("express")
var app=express();
var path=require("path")
app.use(express.static(path.join(__dirname,"/build/")))
app.set("port",process.env.PORT||3000)

app.listen(app.get("port"),function(){
    console.log("run:"+app.get("port"))
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})


