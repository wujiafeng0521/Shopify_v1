const mix = require('laravel-mix');

mix.js('src/js/app.js', '')
   .sass('src/scss/app.scss', '')
   .setPublicPath(' assets ');