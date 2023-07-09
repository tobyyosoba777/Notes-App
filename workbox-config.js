module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{PNG,png,html,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};