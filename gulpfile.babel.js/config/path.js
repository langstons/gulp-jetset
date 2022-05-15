const pathSrc = './src';
const pathDest = './app';

export default {
  root: pathDest,

  html: {
    src: pathSrc + '/views/**/*.html',
    watch: [pathSrc + '/views/**/*.html', pathSrc + '/components/blocks/**/*.html'],
    dest: pathDest
  },

  scss: {
    src: pathSrc + '/styles/main.{scss,sass}',
    watch: [pathSrc + '/styles/**/*.{scss,sass}', pathSrc + '/components/blocks/**/*.{scss,sass}'],
    dest: pathDest + '/css'
  },

  js: {
    src: [pathSrc + '/js/main.js', pathSrc + '/components/blocks/**/*.js'],
    watch: [pathSrc + '/js/**/*.js', pathSrc + '/components/blocks/**/*.js'],
    dest: pathDest + '/js'
  },
  
  img: {
    src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico}',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico}',
    dest: pathDest + '/img'
  },

  fonts: {
    src: pathSrc + '/fonts/**/*.*',
    watch: pathSrc + '/fonts/**/*.*',
    dest: pathDest + '/fonts'
  },
}