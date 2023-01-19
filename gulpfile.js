import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import browser from "browser-sync";
import csso from "postcss-csso";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";
import terser from "gulp-terser";
import squoosh from "gulp-libsquoosh";
import svgo from "gulp-svgmin";
import svgstore from "gulp-svgstore";
import del from "del";
import pug from 'gulp-pug';
import cached from 'gulp-cached';

// Styles

export const styles = () => {
  return gulp.src("source/sass/style.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso(),
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css", { sourcemaps: "." }))
    .pipe(browser.stream());
}

//HTML

const html = () => {
  return gulp.src("source/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("build"));
}

// PUG to HTML

const pugToHtml = () => {
  return gulp.src('source/pug/pages/*.pug')
      .pipe(plumber())
      .pipe(pug({ pretty: true }))
      .pipe(cached('pug'))
    //   .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'));
};

// Scripts

const scripts = () => {
  return gulp.src("source/js/*.js")
  .pipe(terser())
  .pipe(gulp.dest("build/js"));
}

// Images

const optimizeImages = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
  .pipe(squoosh())
  .pipe(gulp.dest("build/img"));
}

const copyImages = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
  .pipe(gulp.dest("build/img"));
}

// SVG

const svg = () => {
  return gulp.src(["source/img/**/*.svg", "!source/img/icons/*.svg"])
  .pipe(svgo())
  .pipe(gulp.dest("build/img"));
}

const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
  .pipe(svgo())
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
}

// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/**/*.{woff2,woff}",
    "source/*.ico",
    "source/img/**"
  ], {
    base: "source"
    })
    .pipe(gulp.dest("build"))
  done();
}

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

//Reload

const reload = (done)=> {
  browser.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/*.js", gulp.series(scripts, reload));
  gulp.watch("source/*.html", gulp.series(html, reload));
  gulp.watch("source/pug/pages/*.pug", gulp.series(pugToHtml, reload));
}

// Build

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    pugToHtml,
    html,
    scripts,
    svg,
    sprite,
  ),
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    pugToHtml,
    html,
    scripts,
    svg,
    sprite,
  ),
  gulp.series(
    server,
    watcher
  )
);
