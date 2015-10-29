app.plugin('dayList', 'plugins/listBase',  function(ListBase){
	
	function DayList(dom, data){
		this.dom = dom;
		this.initailize(data);
	}

	DayList.prototype.initailize = function(data){
		var me = this;

		var tpl = __inline('./dayList.tpl');
		var list = new ListBase(me.dom, tpl, data);


	};
	
	return DayList;
});