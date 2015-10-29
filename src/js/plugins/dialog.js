app.plugin('dialog', function(){
	
	function Dialog(dom){
		this.dom = dom;
		this.initailize();
	}

	Dialog.prototype.initailize = function(){
		var tpl = __inline('./today.tpl');
		this.dom.html(tpl);

		var d = new Date();
		var mon = d.getMonth()+1;
    	var day = d.getDate();

    	this.dom.find('.month').text(mon);
    	this.dom.find('.day').text(day);
	};
	
	return Dialog;
});