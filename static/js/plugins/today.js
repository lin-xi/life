app.plugin("today",function(){function e(e){this.dom=e,this.initailize()}return e.prototype.initailize=function(){var e='<div class="koala-plugin-today">\n	<span class="month"></span>\n	<span class="day"></span>\n</div>';this.dom.html(e);var t=new Date,n=t.getMonth()+1,r=t.getDate();this.dom.find(".month").text(n),this.dom.find(".day").text(r)},e})