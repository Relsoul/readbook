var gulp=require("gulp");
var p=require("gulp-load-plugins")();

gulp.task("default",["sass:watch"])

gulp.task("sass:watch",function(){
    p.livereload.listen(47746)
    gulp.watch("./*.scss",["sass:compile"])
})

gulp.task("sass:compile",function(){
    gulp.src("./*.scss")
        .pipe(p.sass().on("error",function(err){console.log(err)}))
        .pipe(gulp.dest("./"))
        .pipe(p.livereload())
})