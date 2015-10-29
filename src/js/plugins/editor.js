app.plugin('editor', function(){
	
	function Editor(dom){
		this.dom = dom;
		this.initailize();
	}

	Editor.prototype.initailize = function(){
		var tpl = __inline('./editor.tpl');
		this.dom.html(tpl);

		this.editor = this.dom.find('.editor');
	};

	Editor.prototype.getHTML = function(){
		return this.editor.html();
	};
	
	return Editor;
});