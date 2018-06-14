class Slide{
	constructor(box, data, width, height, now, ms, btnsize, direction){
		this.box = box;
		this.data = data;
		this.dataLen = data.length;
		this.width = width;
		this.height = height;
		this.now = now;
		this.ms = ms;
		this.btnsize = btnsize;
		this.direction = direction;
		this.createHTML();
		this.tab();
		this.auto();
	}
	createHTML(){
		var that = this;
		var data = this.data;
		var len = this.dataLen;
		var w = this.width;
		var h = this.height;
		this.box.style.width = w+"px";
		this.box.style.height = h+"px";
		var tmp = document.createDocumentFragment();
		// 图片
		var ul = document.createElement("ul");
		this.ul = ul;
		ul.style.width = (len+1)*w+"px";
		ul.style.height = h+"px";
		tmp.appendChild(ul);		
		for( var i=0; i<len; i++ ){
			var obj = data[i];
			var li = document.createElement("li");
			ul.appendChild(li);
			li.style.width = w+"px";
			li.style.height = h+"px";
			var a = document.createElement("a");
			li.appendChild(a);
			a.href = obj.url;
			a.target = "_blank";
			a.title = obj.title;
			var img = document.createElement("img");
			a.appendChild(img);	
			img.style.width = w+"px";
			img.style.height = h+"px";
			img.src = obj.img;
		}
		// 把第一张图片，拷贝到最后一个位置上
		ul.appendChild( ul.firstElementChild.cloneNode(true) );
		// 按钮
		this.spans = [];
		var ol = document.createElement("ol");
		tmp.appendChild(ol);
		for( var i=0; i<len; i++ ){
			var li = document.createElement("li");
			ol.appendChild(li);
			var span = document.createElement("span");
			li.appendChild(span);
			span.style.width = span.style.height = this.btnsize+"px";
			span.ind = i;
			this.spans.push(span);
		}		
		this.box.appendChild(tmp);
		
		// 事件委托
		ol.onclick = e=>{
			var span = e.target;
			if( span.nodeName == "SPAN" ){
				this.now = span.ind;
				this.tab();
			}
		}
		
		// 方向按钮
		var btnLeft = document.createElement("p");
		this.btnLeft = btnLeft;
		this.box.appendChild(btnLeft);
		btnLeft.innerHTML = "&lt;";
		btnLeft.onclick = function(){		
			that.toLeft();
		}	
		
		var btnRight = document.createElement("p");
		this.btnRight = btnRight;
		this.box.appendChild(btnRight);
		btnRight.innerHTML = "&gt;";
		btnRight.onclick = function(){
			that.toRight();
		}	
		
		var pSize = this.btnsize*1.5;
		btnLeft.style.cssText=btnRight.style.cssText="width:"+pSize+"px;height:"+pSize+"px;line-height:"+pSize+"px;top:"+(h-pSize)/2+"px;";
		
	}	
	toLeft(){	
		this.direction = "left";
		this.now++;
		this.tab();
	}
	toRight(){
		this.direction = "right";
		this.now--;
		this.tab();
	}
	tab(){
		var that = this;
		if( this.now==this.dataLen ){
			this.now=0;
			move(this.ul, {"left":-this.dataLen*this.width}, function(){
				that.ul.style.left = "0px";
			});
		}else if( this.now == -1 ){
			that.ul.style.left = -this.dataLen*this.width+"px";
			this.now = this.dataLen-1;
			move(this.ul, {"left":-this.now*this.width});
		}else{
		
			move(this.ul, {"left":-this.now*this.width});
		}
		//按钮的样式
		this.spans.forEach((span)=>{
			span.style.background = "";
		});
		// 把当前图片对应的按钮样式高亮显示
		this.spans[this.now].style.background = "#ff5073";
	}
	next(){
		if( this.direction == "left" ){
			this.now++;
		}else if( this.direction == "right" ){
			this.now--;
		}
		this.tab();
	}
	auto(){
		this.out();
		this.box.onmouseover = this.over.bind(this);
		this.box.onmouseout = this.out.bind(this);
	}
	over(){
		clearInterval( this.timer );
		move(this.btnLeft, {"opacity":100});
		move(this.btnRight, {"opacity":100});
	}
	out(){
		this.timer = setInterval(this.next.bind(this), this.ms);
		move(this.btnLeft, {"opacity":0});
		move(this.btnRight, {"opacity":0});
	}
}


//export default Slide