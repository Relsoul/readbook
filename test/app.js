/**
 * Created by soul on 2015/12/30.
 */
var request=require("request");
request.get("http://music.163.com/api/song/detail/?ids=[32069280]",function(e,r,body){
    console.log(e,r,body)
})