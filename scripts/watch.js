/* eslint-env node */
const nodemon = require('nodemon');
const Bundler = require('parcel-bundler');

process.env.PORT = process.env.PORT || 3000;

const bundler = new Bundler('./client/index.html', {
	watch: true,
	publicURL: '/',
	hmr: false
});

bundler.bundle()
  .then(() => {
	nodemon({
		script: './server/main.js'
	});

	nodemon.on('start', () => {
		console.log('App has started');
	}).on('quit', () => {
		console.log('App has quit');
		process.exit();
	}).on('restart', files => {
		console.log('App restarted due to: ', files);
	});
});
