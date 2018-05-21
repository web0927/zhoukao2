var gulp = require('gulp');

var server = require('gulp-webserver');

var myData = require('./src/data/data.json')


gulp.task('server', function () {
    gulp.src('src')
        .pipe(server({
            port:8080,
            open:true,
            livereload:true,
            middleware:function (req, res, next) {
                if (req.url === '/login') {
                    res.setHeader('content-type','text/json;charset=UTF-8');
                    res.end(JSON.stringify(myData))
                }
                next()
            }
        }))
}) 
   
gulp.task('default', ['server'])
