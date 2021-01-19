let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/main.js', 'public/js')
	.sass('resources/assets/scss/argon.scss', 'public/css');

mix.webpackConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'resources'),
		}
	}
})
