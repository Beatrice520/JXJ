// 搜索引擎  开始
		var input = document.getElementsByTagName('input')[0];
		addEvent(input,"mouseover",function (e) {
			var event = e || window.event;
			input.focus();
		});
	// 搜索引擎  结束

	// 放大镜  开始
		var box = document.getElementsByClassName('box')[0],
			mag_M = document.getElementsByClassName('mag_M')[0],
			MR_img = document.getElementsByClassName('MR_img')[0],
			mag_MR = document.getElementsByClassName('mag_MR')[0],
			magnifier = document.getElementsByClassName('magnifier')[0],
			mag_R = document.getElementsByClassName('mag_R')[0];
		addEvent(box,"mousemove",mag);
		addEvent(mag_M,"mouseout",function (e) {
			var event = e || window.event;
			mag_MR.style.display = "none";
			mag_MR.style.zIndex = 0;
			mag_R.style.zIndex = 3;
		});
		addEvent(mag_M,"mouseover",function (e) {
				var event = e || window.event;
				mag_MR.style.display = "block";
				mag_MR.style.zIndex = 3;
				mag_R.style.zIndex = 0;
			});
		function mag(e) {
			var event = e || window.event;

			disX = event.clientX - mag_M.offsetLeft;
			if(scrollY < magnifier.offsetTop){
				disY = event.clientY - mag_M.offsetTop - magnifier.offsetTop + scrollY;
			} else if(scrollY == magnifier.offsetTop){
				disY = event.clientY - mag_M.offsetTop;
			}else{
				disY = event.clientY + scrollY - magnifier.offsetTop- mag_M.offsetTop;
			}
			
			box.style.left = disX - 110 + "px";
			box.style.top = disY - 100 + "px";
			if(parseInt(box.style.left) < 0){
				box.style.left = 0;
			}
			if(parseInt(box.style.left) > 180){
				box.style.left = 180 + "px";
			}
			if(parseInt(box.style.top) < 0){
				box.style.top = 0;
			}
			if(parseInt(box.style.top) > 200){
				box.style.top = 200 + "px";
			
			}
			MR_img.style.left = -2 * parseInt(box.style.left) + "px";
			MR_img.style.top = -2 * parseInt(box.style.top) + "px";
			
		}
	// 放大镜  结束
	
	// 固定页面  开始
	$(function() {
		$(window).scroll(function() {
			var dis = $(document).scrollTop();
			if(dis > 754){
				$(".botNav").addClass("jqbot");
			} else {
				$(".botNav").removeClass("jqbot");
			}
		})
	})