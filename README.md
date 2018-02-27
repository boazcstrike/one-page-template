# Template for One Pagers
###### For my personal use.

Uses node for efficient edit-save-autorefresh functionality. Just run on cmd:
```
C:\ProjectDirectory>npm install

^ for dependencies

C:/ProjectDirectory>npm run dev

^ my setup

C:\ProjectDirectory>gulp

^ run the node
```

Voila. Live/autorefresh on save should work now.

**Just edit the sass file and you're good to go.
See gulpfile for details on the tasks.**
To save you some trouble: 
(*gulpfile.js*)
```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
})

gulp.task('sass', function(){
   	return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
    	stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['sass', 'watch'])
```
- Initially watches /js and /scss
- Auto translate from SASS to CSS
- js compression

Dependencies
- animate.css
- bootstrap
- browser-sync
- font-awesome
- gulp
- gulp-sass
- gulp-uglify
- gulp-useref
- jquery
- jquery-smooth-scroll
- popper.js
- sticky-js
- wow.js