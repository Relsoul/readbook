var http=require("http");
var url="http://emufan.com";

function filterChapters(html){
	
}


http.get(url,function(res){
	var html="";
	
	res.on("data",function(data){
		html+=data
	})
	res.on("end",function(){
		filterChapters(html)
	})
	res.on("error",function(err){
		console.log(err)
	})
	
})
