/**
 * Created by soul on 2015/12/13.
 */
var gulp=require("gulp");
//加载所有插件
//要引用插件得通过 plugins.xxx这种形式 并且以驼峰式命名
var plugins=require("gulp-load-plugins")();

//设置js文件路径
var jsPath={
    dev:"app/dev/css/*.scss",
    build:"app/build/css"
}
//设置自动加载文件路径
var reloadMain="app/app.js"


gulp.task("default",["watchSass","reload"]);

gulp.task("watchSass",function(){
    plugins.livereload.listen();
    gulp.watch(jsPath.dev,["sass:compile"])
})



gulp.task("sass:compile",function(){
    //Sass编译 输出压缩后的style文件
   plugins.rubySass(jsPath.dev,{style:"compressed"})
       .on("error",function(err){console.log(err)})
       .pipe(gulp.dest(jsPath.build))
       //自动重启浏览器 配合 chrome插件使用
       .pipe(plugins.livereload())
})



//当app.js文件变动自动重启
gulp.task("reload",function(){
    plugins.nodemon({
        script: reloadMain //重启主文件
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }//附加参数
        , watch:[reloadMain]//仅仅监听主文件变动

    })
})