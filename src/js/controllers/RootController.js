app.controller('RootController', function () {
	var scope = this;
	var ele = $(scope._dom);

	var path = app.getCurrentRoute();
	if (path == '/') {
		$('.app-body').height($(window).height());
	} else {
		$('.app-body').height($(window).height() - 40);
	}


});