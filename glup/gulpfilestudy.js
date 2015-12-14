/**
 * Created by soul on 2015/12/13.
 */
var gulp=require("gulp");
//自动加载package.json中devDependencies插件
var plugins=require("gulp-load-plugins")();

/*gulp.task("default",["one","two","three"]);

gulp.task("one",function(cb){
    setTimeout(function(){
        console.log("one is done next two!!");
        cb()
    },2000);

    //返回gulp流
/!*    var stream = gulp.src('client/!**!/!*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'));
    return stream;*!/


});
//two任务依赖one 会在one执行后再继续执行
//单独执行two会优先执one
gulp.task("two",["one"],function(){
    console.log("two is done")
});
gulp.task("three",function(){
    console.log("three is done")
});*/


//gulp watch与rename
//不要加上绝对路径/
gulp.task("watch",function(){
    var watcher=gulp.watch("js/**/*.js",["rename"])
})



gulp.task("rename",function(){
       gulp.src("js/**/*.js")
            .pipe(gulp.dest("build/"))
            .pipe(plugins.uglify())
            .pipe(plugins.rename({extname:".min.js"}))
            .pipe(gulp.dest("build/"))
})



