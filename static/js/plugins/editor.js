app.plugin("editor",function(){function e(e){this.dom=e,this.initailize()}return e.prototype.initailize=function(){var e='<div class="koala-plugin-editor">\n	<div class="tool">\n		<a class="upfile icon-image3">\n			<input id="upImg" type="file"/>\n		</a>\n		<a class="icon-film"></a>\n		<a class="icon-music2"></a>\n		<a class="icon-mic2"></a>\n		<a class="icon-location"></a>\n		<a class="icon-link3"></a>\n		<a class="icon-happy"></a>\n	</div>\n	<div class="editor" contenteditable="true"></div>\n</div>';this.dom.html(e),this.editor=this.dom.find(".editor")},e.prototype.getHTML=function(){return this.editor.html()},e})