 // 轮播图 开始
 var swiper = new Swiper('.carousel1.swiper-container', {
      	pagination: {
        	el: '.carousel1 .swiper-pagination',
        	dynamicBullets: true,
      	},
      	autoplay:3000,//每秒中轮播一次
		loop:true,//可以让图片循环轮播
		pagination:".carousel1 .swiper-pagination",//让小圆点显示
    });
 //轮播图 结束

 // 每日好店 轮播 开始
 var swiper = new Swiper('.carousel2.swiper-container', {
      	pagination: {
        	el: '.carousel2 .swiper-pagination',
        	dynamicBullets: true,
      	},
		loop:true,//可以让图片循环轮播
		pagination:".carousel2 .swiper-pagination",//让小圆点显示
    });
 // 每日好店 轮播 结束
 var i = 0;
 $(function() {
 //淘宝头条 开始
 	setInterval(function() {
	 	i ++;
	 	if(i >= 5){
	 		i = 0;
	 	}
	 	$('.tao-news .news').eq(i).fadeIn(500).siblings('.tao-news .news').fadeOut(500);	
 	},2000);
 //淘宝头条 结束
 }) 
 
 //倒计时 开始
 	function countDown() {
 		var date1 = '2019/1/1 00:00:00',
 		    date2 = new Date(),
 		    date3 = new Date(date1).getTime() - date2.getTime();
 		var minutes = 1000 * 60,
 			hours = minutes * 60,
 			day = hours * 24,
 			year = day * 365;
 		var hs = parseInt(date3 % year % day / hours),
 			ms = parseInt(date3 % year % day % hours / minutes),
 			ss = parseInt(date3 % year % day % hours % minutes / 1000);
 		document.getElementsByClassName('hs')[0].innerHTML = hs;
		document.getElementsByClassName('ms')[0].innerHTML = ms;
		document.getElementsByClassName('ss')[0].innerHTML = ss;
 	}
 	countDown();
 	setInterval(countDown,1000);
 //倒计时 结束 