/**
 * Created by soul on 2015/12/13.
 */
var gulp=require("gulp");
//�������в��
//Ҫ���ò����ͨ�� plugins.xxx������ʽ �������շ�ʽ����
var plugins=require("gulp-load-plugins")();

//����js�ļ�·��
var jsPath={
    dev:"app/dev/css/*.scss",
    build:"app/build/css"
}
//�����Զ������ļ�·��
var reloadMain="app/app.js"


gulp.task("default",["watchSass","reload"]);

gulp.task("watchSass",function(){
    plugins.livereload.listen();
    gulp.watch(jsPath.dev,["sass:compile"])
})



gulp.task("sass:compile",function(){
    //Sass���� ���ѹ�����style�ļ�
   plugins.rubySass(jsPath.dev,{style:"compressed"})
       .on("error",function(err){console.log(err)})
       .pipe(gulp.dest(jsPath.build))
       //�Զ���������� ��� chrome���ʹ��
       .pipe(plugins.livereload())
})



//��app.js�ļ��䶯�Զ�����
gulp.task("reload",function(){
    plugins.nodemon({
        script: reloadMain //�������ļ�
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }//���Ӳ���
        , watch:[reloadMain]//�����������ļ��䶯

    })
})