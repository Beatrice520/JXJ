// 倒计时
function countDown() {
			var date1 = '2019/1/1 00:00:00',
			date2 = new Date();
		var	date3 = new Date(date1).getTime() - date2.getTime();
		var minutes = 1000 * 60,
			hours = minutes * 60,
			day = hours * 24,
			year = day * 365;
		var nDay = parseInt(date3 % year / day),
		 	nHours = parseInt(date3 % year % day / hours),
		 	nMinutes = parseInt(date3 % year % day % hours / minutes),
		  	nSeconds = parseInt(date3 % year % day % hours % minutes / 1000);
		  	document.getElementsByClassName('ds')[0].innerHTML = nDay + ":";
		  	document.getElementsByClassName('hs')[0].innerHTML = nHours + ":";
		  	document.getElementsByClassName('ms')[0].innerHTML = nMinutes + ":";
		  	document.getElementsByClassName('ss')[0].innerHTML = nSeconds;
		}
		countDown();
		setInterval(countDown,1000);
// 轮播图
$(function() {
	var i = 0;
	// 自动轮播
	var timer = setInterval(carousel,6000);
	function carousel() {
		i ++;
		if(i > 5) {
			i = 1;
            $(".carousel_top .images").css({"left":"0"}); 
		}else{
			$(".carousel_top li").eq(0).css({"background-color":"#f40"}).siblings(".carousel_top li").css({"background-color":"#fff"});
		}
		var left = -520 * i;
		$(".carousel_top li").eq(i).css({"background-color":"#f40"}).siblings(".carousel_top li").css({"background-color":"#fff"});
		$(".carousel_top .images").stop().animate({"left":left + "px"},300);
	}
	// 手动点击轮播
	$(".carousel_top li").click(function() {
		i = $(this).index();
		var left = -520 * i;
		$(".carousel_top li").eq(i).css({"background-color":"#f40"}).siblings(".carousel_top li").css({"background-color":"#fff"});
		$(".carousel_top .images").stop().animate({"left":left + "px"},300);
	})
	// 鼠标移入清除定时器，让左右箭头出现
	$(".carousel_top").mouseenter(function() {
		clearInterval(timer);
		$(".carousel_topl,.carousel_topr").show();
		$(".carousel_topl").mouseenter(function() {
			$(".carousel_topl").css({"opacity":0.6});
		})
		$(".carousel_topr").mouseenter(function() {
			$(".carousel_topr").css({"opacity":0.6});
		})
		$(".carousel_topl").mouseleave(function() {
			$(".carousel_topl").css({"opacity":0.3});
		})
		$(".carousel_topr").mouseleave(function() {
			$(".carousel_topr").css({"opacity":0.3});
		})
		var n = 0;
		$(".carousel_topl").click(function() {
			n ++;
			i = $(".carousel_top .images").index();
			var left = -520 * i;
			$(".carousel_top li").eq(i).css({"background-color":"#f40"}).siblings(".carousel_top li").css({"background-color":"#fff"});
			$(".carousel_top .images").stop().animate({"left":left + "px"},300);
		})
	})
	// 鼠标离开恢复定时器
	$(".carousel_top").mouseleave(function() {
		timer = setInterval(carousel,6000);
		$(".carousel_topl,.carousel_topr").hide();
	})

})