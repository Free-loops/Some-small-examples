// 这是封装的获取id和标签名的兼容性函数
function $(selector,fuji) {
	// 如果想从某一个元素里面去获取标签名 那么你需要传入特定的父级 
	// 大部分情况下 一般是从整个文档下获取  所有我们最好在内部处理一下
	//如果没有传入父级　那么则直接从文档下获取标签　　如果传入了父级　那么从传入的父级下获取标签名
	fuji = fuji || document;
	
	if(selector.charAt(0)=="#") { 
		return document.getElementById(selector.substring(1));
	}else {
		return fuji.getElementsByTagName(selector);
	}
	
	
}

// 这是一个获取兼容性样式的函数
function getStyle(obj,attr) { // 形参相当于局部变量
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else {
				return getComputedStyle(obj)[attr];
			}
		}
// 下面四个小函数  是操作节点的兼容性函数
function first(obj){
		var ele = obj.firstElementChild || obj.firstChild;
		if(ele&&ele.nodeType==1) {
			return ele
		}else {
			return null;
		}
	}

function last(obj){
		var ele = obj.lastElementChild || obj.lastChild;
		if(ele&&ele.nodeType==1) {
			return ele
		}else {
			return null;
		}
	}
function prev(obj){
		var ele = obj.previousElementSibling || obj.previousSibling;
		if(ele&&ele.nodeType==1) {
			return ele
		}else {
			return null;
		}
	}
function next(obj){
		var ele = obj.nextElementSibling || obj.nextSibling;
		if(ele&&ele.nodeType==1) {
			return ele
		}else {
			return null;
		}
	}
// 这是封装了一个解绑的函数
function unbind(obj,evType,evFn) {
	if(obj.removeEventListener) {
		obj.removeEventListener(evType,obj.handle,false);
	}else if(obj.detachEvent) {
		obj.detachEvent("on"+evType,obj.handle);
	}else {
		obj["on"+evType] = null;
	}
	
}

// 这是一个绑定方式的兼容性函数
function bind(obj,evType,evFn) {
	// 根据浏览器能力进行检测  如果识别支持addEventListener 就直接使用这个绑定方式
	// 如果不支持这个方法 则按照后面的方式进行绑定
	
	obj.handle = function(){
		evFn.call(obj);
	}
	
	if(obj.addEventListener){
		// 标准浏览器走这个绑定
		obj.addEventListener(evType,evFn,false);
		obj.handle = evFn;
	}else if(obj.attachEvent) {
		//IE6 7 8 走这个绑定方式
		obj.attachEvent("on"+evType,obj.handle);
	} else {
		// 以上方法都不支持的很老的浏览器 走这个方法
		obj["on"+evType] = evFn;
		
}
}

// 匀速运动           让谁运动    改变什么运动属性    速度      目标点
function move(obj,attr,speed,target,callback) {
			//var timer = null;
			// 后续将定时器往当前运动物体的自定义属性timer身上挂载
			//obj.timer = null;
			// 再开新的定时器之前 先将旧的定时器清除 保证页面上只有一个定时器
			clearInterval(obj.timer);
			//var dis = oBox.offsetLeft;//
			//   获取的是起始位置  
			var dis =  parseFloat(getStyle(obj,attr)); ///100     px
			
			// 通过判断起始点和目标点谁大  
			// 如果起始点大于目标点 则 速度为负   如果起始点小于目标点  则速度正
			   speed =  dis > target ? -speed : speed;
			
			obj.timer = setInterval(function() {
				dis  += speed; // 7  -7  
				if(dis >= target&&speed > 0|| dis <= target&&speed < 0) {//100>=800
					dis  = target;
				}
				obj.style[attr]= dis + "px";
				if(dis == target) {
					// 如果到达目标点了 则清除定时器
					clearInterval(obj.timer);
					obj.timer = null;
					// 说明这次当前的运动已经运动完毕了
					callback&&callback();
				}
			},30);
			
		}

function startMove(obj,json) {
			
			clearInterval(obj.timer);
			var cur = 0;
			var speed = 0;
			obj.timer = setInterval(function(){
				
				var onOff = true;
				
				// 传入多个属性名和属性值 然后在定时器里面 循环遍历这个对象 每一次定时器执行的时候 都会遍历一次所有的属性
				//让所有的属性都往前挪一步
				for(var attr in json) {
					
					var target = json[attr];
					
					//通过判断attr属性是什么 如果传入的属性是透明度 说明你一定是要让透明度运动
					if(attr == "opacity") {
						cur = Math.round(getStyle(obj,attr)*100);
					}else {
						cur = parseInt(getStyle(obj,attr));
					}
					
					
					/*289:4.4       289 + 4.4 == 293.4  293
					293:2.8000000000000003  293+2.8000  = 295.8
					295:2          295+ 2   297
					297:1.2000000000000002  297 + 1.2000 = 298.20000
					298:0.8 // 298 + 0.8  298+0.8 298 */
					
					/*
					 *  289 + 5  294 + 3 ==  297  + 2  299 +1 300
					 * 
					 * */
					
					
					speed = (target-cur)/6;   
					// style="width: 299.981px;" width: 298.8px;
					// 处理一下运动过程中的取整问题 将物体运动分别判断  将结果达到目标点
					speed = speed>0? Math.ceil(speed): Math.floor(speed);
					
					//console.log(cur + ":" + speed);
					
					
					if(cur != target) {
						onOff = false;
						if(attr == "opacity") {
							obj.style.opacity = (cur + speed)/100 ;
							obj.style.filter = 'alpha(opacity='+ (cur + speed) +')';
						}else{
							obj.style[attr] = cur + speed + "px";
						}
					}
					
					
				}
				
				if(onOff) {
					clearInterval(obj.timer);
					obj.timer = null;

				}
				
				
			},30);
			
		}
		
		
		
	