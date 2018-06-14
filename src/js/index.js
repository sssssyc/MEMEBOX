//导航栏
$(".nav li").mouseenter(function() {
	$(this).children("ul").stop().fadeIn();
	$(this).children("div").stop().fadeIn();
}).mouseleave(function() {
	$(this).children("ul").stop().fadeOut();
	$(this).children("div").stop().fadeOut();
});

//轮播图
//import Drag from "./lunbotu.js";
new Slide(big_tu, [{
		"img": "../images/tu.jpg",
		"title": "MEMEBOX",
		"url": "login.html"
	},
	{
		"img": "../images/20176231445523.jpg",
		"title": "MEMEBOX",
		"url": "login.html"
	},
	{
		"img": "../images/moredetails.jpg",
		"title": "MEMEBOX",
		"url": "login.html"
	},
	{
		"img": "../images/1920-x-480.jpg",
		"title": "MEMEBOX",
		"url": "login.html"
	}
], 1348, 480, 0, 2000, 30, "left");



// 轮播  商品
function fun() {
	var now = 0;
	move1();
	function move1() {
		if(now == 4) {
			now = 0;
			move(dong2_1, {
				"left": -879
			}, function() {
				dong2_1.style.left = "0px";
			});
		} else {
			move(dong2_1, {
				"left": now * -293
			});
		}
	}
	function next() {
		now++;
		move1();
	}
	var timer = setInterval(next, 6000);
	dong2.onmouseover = function() {
		clearInterval(timer);
	}
	dong2.onmouseout = function() {
		timer = setInterval(next, 6000);
	}
	dong2_left.onclick = function() {
		next();
		return false;
	}
	dong2_right.onclick = function() {
		next();
		return false;
	}
}
fun();


//跳转详情页
$(".con_pro_1").click(function(){
	location.href = "../html/details.html";
	
})
