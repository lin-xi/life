app.plugin("tip",function(){function e(e){this.msg=e,this.initailize()}return e.prototype.initailize=function(){var e=this,t=$('<div class="koala-plugin-tip">'+e.msg+"</div>");$("body").append(t),setTimeout(function(){t.remove()},3e3)},e})