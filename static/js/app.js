(function(window){

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
		'/nearby': {
			controller: 'NearbyController',
			template: 'views/nearby.html'
		},
		'/iwant': {
			controller: 'IwantController',
			template: 'views/iwant.html'
		},
		'/send-order': {
			controller: 'SendOrderController',
			template: 'views/send-order.html'
		},
		'/order-choose': {
			controller: 'OrderChooseController',
			template: 'views/order-choose.html'
		},
		'/mine': {
			controller: 'MineController',
			template: 'views/mine.html'
		},
		'/wait-order': {
			controller: 'WaitOrderController',
			template: 'views/wait-order.html'
		},
		'/unpay-order': {
			controller: 'UnpayOrderController',
			template: 'views/unpay-order.html'
		},
		'/running-order': {
			controller: 'RunningOrderController',
			template: 'views/running-order.html'
		},
		'/remark-order': {
			controller: 'RemarkOrderController',
			template: 'views/remark-order.html'
		},
		'/all-order': {
			controller: 'AllOrderController',
			template: 'views/all-order.html'
		},
		'/chat': {
			controller: 'ChatController',
			template: 'views/chat.html'
		},
		'/cat-food': {
			controller: 'CatFoodController',
			template: 'views/cat-food.html'
		},
		'/shop-detail': {
			controller: 'ShopDetailController',
			template: 'shop-detail.html'
		},
		'/shop-detail-ghlp': {
			controller: 'ShopDetailController',
			template: 'views/shop-detail-ghlp.html'
		},
		'/shop-detail-qjn': {
			controller: 'ShopDetailController',
			template: 'views/shop-detail-qjn.html'
		},
		'/shop-detail-dn': {
			controller: 'ShopDetailController',
			template: 'views/shop-detail-dn.html'
		}

	};

	app.on('pathChange', function(path){
		
	});

	app.config({
		base: '/life/static/js/',
		router: ROUTER,
		view: 'view'
	});

})(window);
