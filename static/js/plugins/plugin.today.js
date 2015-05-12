app.plugin('today', function(){
	
	function Today(dom){
		this.dom = dom;
		this.initailize();
	}

	Today.prototype.initailize = function(){
		var d = new Date();
		var mon = d.getMonth()+1;
    	var day = d.getDate();
	};
	
	return Today;
});