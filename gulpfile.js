import gulp from 'gulp';
import browsersync  from  'browser-sync';
import gulpautoprefixer  from  'gulp-autoprefixer';
import gulpclean  from  'gulp-clean';
import gulpcleancss  from  'gulp-clean-css';
import gulpconcat  from  'gulp-concat';
import gulpimagemin  from  'gulp-imagemin';
import gulpminify  from  'gulp-minify';
import gulpSass  from  'gulp-sass';
import gulpuglify  from  'gulp-uglify';
import dartSass  from  'sass';
import rename from 'gulp-rename';

const BS = browsersync.create();
const sass = gulpSass(dartSass);



       export const buildStyles = () => gulp.src('./src/scss/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulpautoprefixer({
            cascade: false,
            overrideBrowserslist: ['> 0.1%']
        }))
        .pipe(gulpcleancss({ compatibility: 'ie8' }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist/css'));

    // export const buildStyles = () => gulp.src('./src/scss/*.scss')
    //         .pipe(sass())
    //         .pipe( gulpautoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
    //             cascade: false
    //          }))
    //         .pipe(gulp.dest('./dist/'));
            
    

        export const imageMin = () => gulp.src('./src/img/**/*')
       .pipe(gulpimagemin())
       .pipe(gulp.dest("./dist/images"));

       export const buildJs = () => gulp.src('./src/js/**/*.js')
        .pipe(gulpconcat('scripts.min.js'))
        .pipe(gulpuglify())
        .pipe(gulp.dest('./dist/js/'));

        export const build = gulp.series (buildStyles, buildJs, (done) => {
            done();
        });
        
        export const dev = gulp.series (build, () => {
            BS.init({
                server: {
                   baseDir: "./"
                }
            });
        
            gulp.watch(['./src/**', './*.html'], gulp.series(build, (done) => {
                BS.reload();
                done();
            }))
        });