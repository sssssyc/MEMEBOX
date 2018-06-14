//鼠标放上的背景色
$("#aside_2 li").mouseenter(function() {
	$(this).css("background", "#ff5073");
	$(this).find("p:hidden").stop().fadeIn();
}).mouseleave(function() {
	$(this).css("background", "");
	$(this).find("p").stop().fadeOut();
});

//鼠标点击购物车弹出
$("#li1").click(function() {
	$("#aside_1").stop().fadeIn();
	$(this).css("background", "#ff5073");
});
$("#guan").click(function() {
	$("#aside_1").stop().fadeOut();
});

//鼠标点击客服弹出
$("#li5").click(function() {
	$("#aside_3").stop().fadeIn();
});
$("#guan1").click(function() {
	$("#aside_3").stop().fadeOut();
});
//拖动
//import Drag from "./Drag.js";
new Drag(aside_3);

//返回顶部
$("#li6").click(function() {
	$("html").animate({
		"scrollTop": 0
	}, 1000);
});





//抛图片到购物车里
$("button").click(function(e) {
	$("#aside_1_li2").fadeOut();
	$("#aside_1_js").fadeIn();

	var btn = e.target;
	if(btn.nodeName = "button") {
		var img = $(this).parent().parent().first().find("img").clone().appendTo("body");
		img.css({
			"width":40,
			"height":40,
			"position":"fixed",
			"left":e.clientX - 50 ,
			"top":e.clientY - 80
		});
		var endX = cart.offsetLeft + li1.offsetLeft;
		var endY = li1.offsetTop;
		move11(img[0], endX, endY, 0.0005, ()=> {
			
			var sub = "#sub"+$(this).attr('proid');
			var inp = "#inp"+$(this).attr('proid');
			var add = "#add"+$(this).attr('proid');
			var del = "#del"+$(this).attr('proid');
			
			
			
			var f = $("#aside_1").find("#product"+$(this).attr('proid'));
			if (f.length >=1) {
				    var num = $(inp).val();
					$(inp).val(num/1+1);
				} else{
					var li = document.createElement("li");
					aside_1.appendChild(li);
					li.id = "product"+$(this).attr('proid');
					var div = document.createElement("div");
					div.id = "aside_1_img";
					li.appendChild(div);
					div.appendChild(img[0]);
					img[0].style = "";
					var div = document.createElement("div");
					div.id = "aside_1_zi";
					li.appendChild(div);

					var tmp1 = ``;
					tmp1 += `
							<h3>${$(this).attr('dat')}</h3>
							<a id="sub${$(this).attr('proid')}">-</a>
							<input type="text" value="1" id="inp${$(this).attr('proid')}"/>
							<a id="add${$(this).attr('proid')}">+</a>
							<p>${$(this).attr('data')}<i class="iconfont icon-shanchu" id="del${$(this).attr('proid')}"></i></p>
						`;
					div.innerHTML = tmp1;
				}

			
			
			$(sub).click(function(){
			var num = $(inp).val()/1;
				if(num<=1){
					return false;
				}else{
					$(inp).val(num-1);
				}
			});
			$(sub).mousedown(function(){
				return false;
			});
			$(add).click(function( ){
				var num = $(inp).val()/1;
				$(inp).val(num+1);
			});
			$(add).mousedown(function(){
				return false;
			});
			$(del).click(function() {
				if(confirm("您确定删除购物车中的这件商品吗？")==true){
					$(this).parent().parent().parent().remove();
				}
			});		
			
		});
	}
});
