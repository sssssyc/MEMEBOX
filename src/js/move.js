 function move(elem , json , fn){  //json
 	            clearInterval(elem.timer);
				function move1( ){
					var flag = true;//假设每一个属性都到达了目标值
					for( var attr in json ){
						var target = json[attr];
						var v = getComputedStyle(elem)[attr];
						if( attr=="opacity" ){
							v = Math.round(v*100);
						}else{
							v = parseInt(v);
						}
					var dist = target-v;
					var step = dist/6;
					
					if( step>0 ){
						step = Math.ceil(step);
					}else{
						step = Math.floor(step);
					}
					
					if( attr=="opacity" ){
						elem.style[attr] = (v+step)/100 ;
					}else{
						elem.style[attr] = v+step+"px";
					}
					
					if( target!=v ){   // 只要有1个属性没有到达目标值，更新flag为假。
						flag = false;
					}		
				}
					if( flag ){
						clearInterval(elem.timer);
						if( fn ){
							fn( );
						}
					}
				}
				 elem.timer = setInterval(move1,50);
			}