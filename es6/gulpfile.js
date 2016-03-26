
/**
 * Created by soul on 10/03/2016.
 */

var gulp = require("gulp");
var babel = require("gulp-babel");
var path = require("path");

gulp.task("default", ["es6:watch"]);

gulp.task("es6:watch", function () {
    gulp.watch("./dev/**/*.js", ["es6:compile"]);
});

gulp.task("es6:compile", function () {
    gulp.src("./dev/**/*.js").pipe(babel({
        presets: ["es2015"]
    }).on(
        "error",
        function(err){console.log("编译错误,文件为:"+err.fileName+"\r\n错误名字为:"+err.name+"\r\n错误消息:"+err.message)})
    )
        .pipe(gulp.dest("./compile/"));
});