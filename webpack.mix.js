const mix = require('laravel-mix');
const {js} = require("laravel-mix");

mix
    .sass('resources/css/app.scss', 'public/css')
    .js('resources/js/bootstrap.js', 'public/js');
