(function (window) {

	var app = window.app = koala.module('zdh');

	var ROUTER = {
		'/': {
			controller: 'IndexController',
			template: 'views/index.html'
		},
		'/add': {
			controller: 'AddController',
			template: 'views/add.html'
		},
		'/list': {
			controller: 'ListController',
			template: 'views/list.html'
		},
		'/im': {
			controller: 'ImController',
			template: 'views/im.html'
		}
	};

	app.on('pathChange', function (path) {

	});

	app.config({
		base: '/life/static/js/',
		router: ROUTER,
		view: 'view'
	});

})(window);