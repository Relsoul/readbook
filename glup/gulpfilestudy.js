/**
 * Created by soul on 2015/12/13.
 */
var gulp=require("gulp");
//�Զ�����package.json��devDependencies���
var plugins=require("gulp-load-plugins")();

/*gulp.task("default",["one","two","three"]);

gulp.task("one",function(cb){
    setTimeout(function(){
        console.log("one is done next two!!");
        cb()
    },2000);

    //����gulp��
/!*    var stream = gulp.src('client/!**!/!*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'));
    return stream;*!/


});
//two��������one ����oneִ�к��ټ���ִ��
//����ִ��two������ִone
gulp.task("two",["one"],function(){
    console.log("two is done")
});
gulp.task("three",function(){
    console.log("three is done")
});*/


//gulp watch��rename
//��Ҫ���Ͼ���·��/
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



