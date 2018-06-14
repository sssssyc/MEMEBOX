//导航栏
$(".nav li").mouseenter(function() {
	$(this).children("ul").stop().fadeIn();
	$(this).children("div").stop().fadeIn();
}).mouseleave(function() {
	$(this).children("ul").stop().fadeOut();
	$(this).children("div").stop().fadeOut();
});

//变焦
$("#deta_img_big").click(function() {
	$(this).parent().find("img").clone().appendTo("#deta_img_big1");
	$("#deta_img_big1").stop().fadeIn();
});
$("#guan2").click(function() {
	$("#deta_img_big1").stop().fadeOut();
});


//数量增减
$("#deta_num_11").click(function( ){
	var num = $("#deta_num_input1").val();
	if(num<=1){
		return false;
	}else{
		$("#deta_num_input1").val(--num);
	}
});
$("#deta_num_11").mousedown(function(){
	return false;
});
$("#deta_num_22").click(function( ){
	var num = $("#deta_num_input1").val();
	$("#deta_num_input1").val(++num);
});
$("#deta_num_22").mousedown(function(){
	return false;
});


//选项卡
$(".select ul li").click( function( ){
			var ind = $(this).index();
			$("#sel div").fadeOut().eq(ind).fadeIn();
	});