app.controller('AppController', function () {
	var scope = this;
	var ele = $(scope._dom);

	$(window).on('resize', function (e) {
		var path = app.getCurrentRoute();
		if (path == '/') {
			$('.app-body').height($(window).height());
		} else {
			$('.app-body').height($(window).height() - 40);
		}
	});

	$(document).on('touchmove', function (e) {
		e.preventDefault();
		e.stopPropagation();
	});

	var scrolling = false;

	$('.scrollable').on('touchstart', function (e) {
		// Only execute the below code once at a time
		if (!scrolling) {
			scrolling = true;
			if (e.currentTarget.scrollTop === 0) {
				e.currentTarget.scrollTop = 1;
			} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
				e.currentTarget.scrollTop -= 1;
			}
			scrolling = false;
		}
	});

	$('.scrollable').on('touchmove', function (e) {
		e.stopPropagation();
	});

});