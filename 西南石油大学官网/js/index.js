$(function() {
	// 搜索框 开始
	$(".head_right input").focus(
		function(e) {
		var event = window.event || e;
		if(this.value == "搜索..."){
			this.value = " ";
		}
	});
	$(".head_right input").blur(
		function(e) {
		var event = window.event || e;
		if(this.value == " "){
			this.value = "搜索...";
		}
	});
	// 搜索框 结束

	// 轮播图 开始
	var i = 0;
	var timer = setInterval(carousel1,3000);
	function carousel1() {
		i ++;
		if(i == 5) {
			i = 0;
		}
		$(".carousel img").eq(i).fadeIn(300).siblings(".carousel img").fadeOut(300);
		$(".carousel li").eq(i).css({"background-color":"#258bc9"})
					.siblings(".carousel li").css({"background-color":"#7bbbe6"});
	}
	$(".carousel").mouseenter(function() {
		clearInterval(timer);
		$(".carousel li").mouseenter(function() {
			i = $(this).index();
					$(".carousel img").eq(i).fadeIn(500).siblings(".carousel img").fadeOut(500);
					$(".carousel li").eq(i).css({"background-color":"#258bc9"})
					.siblings(".carousel li").css({"background-color":"#7bbbe6"});
		})
	})
	$(".carousel").mouseleave(function() {
		timer = setInterval(carousel1,3000);
	})
	// 轮播图 结束

	// 广告 开始
	$(".onclick").click(function() {
		$(".ad_left,.ad_right").hide();
	})
	// 广告 结束

	// 二级标题栏 开始
	var j = 0;
	$(".nav_show li").mouseenter(function() {
		j = $(this).index();
		$(".nav_hide").eq(j).show();
		$(".nav_hide").eq(j).mouseenter(function() {
			$(".nav_hide").eq(j).show();
		})
	})
	$(".nav_show li,.nav_hide").mouseleave(function() {
		$(".nav_hide").hide();
	})
	// 二级标题栏 结束
})