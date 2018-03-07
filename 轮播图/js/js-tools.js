		// 1、typeof封装
		// null
		// (typeof返回了类型)number string boolean undefined function object
		// (包装类)new Number、new String、new Boolean
	    // ---> [object Number]、[object String]、[object Boolean]
	    // 
	    // 使用typeof
		// 1.判断null
		// 2.typeof的返回值是否为object
		// 
		// 使用Object.prototype.toString.call(target);
		// 3.object ---->  array  object 包装类   
		// 4.包装类具体类型
		function type(target) {
			var temp = Object.prototype.toString.call(target),
				str = typeof(target);
			var template = {
				"[object Number]" : "number-object",
				"[object String]" : "string-object",
				"[object Boolean]" : "boolean-object",
				"[object Array]" : "array",
				"[object Object]" : "object"
			}
			if(target === null){
				return "null";
			} else if(!(str == "object")){
				return str;
			} else{
				return template[temp];
			}
		}

		// 2、求滚动条的距离
		function getScrollOffset() {
			if(window.pageXOffset){
				return {
					x : window.pageXOffset,
					y : window.pageYOffset
				}
			} else {
				return {
					x : document.body.scrollLeft + document.documentElement.sCollLeft,
					y : document.body.scrollTop + document.documentElement.sCollTop
				}
			}
		}

		// 3、求浏览器的可视区窗口大小
		function getViewportOffset() {
			if(window.innerWidth){
				return {
					w : window.innerWidth,
					h : window.innerHeight
				}
			}else if(document.compatMode === "BackCompat"){
					// 怪异模式
					return {
						w : document.body.clientWidth,
						h : document.body.clientHeight
					}
				}else {
						// 标准模式
						return {
							w : document.documentElement.clientWidth,
							h : document.documentElement.clientHeight
						}
					}
		}

		// 4、查询样式属性
		function getStyle(elem,prop) {
			// prop为属性，elem为标签
			if(window.getComputedStyle){
				return window.getComputedStyle(elem,null)[prop];
			} else {
				return elem.currentStyle[prop];
			}
		}

		// 5、事件处理函数
		function addEvent(elem,type,handle) {
			if(elem.addEventListener){
				elem.addEventListener(type,handle,false);
			}else if(elem.attachEvent){
				elem.attachEvent('on' + type,function () {
					handle.call(elem);
				});
			}else{
				elem['on' + type] = handle;
			}
		}

		// 6、取消冒泡
		function stopBubble(event) {
			if(event.stopPropagation) {
				event.stopPropagation();
			}else{
				event.cancleBubble = true;
			}
		}

		// 阻止默认事件
		function cancleHandler(event) {
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		}
