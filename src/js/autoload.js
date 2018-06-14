var tmp = ``;
db.forEach(function(obj) {
	tmp += `
				    
				  <div class="con_pro">
					<div class="con_pro_1">
							<dl>
								<dd><img src="${obj.imgUrl}" />	</dd>
								<dt><h4>${obj.title}</h4><h3>${obj.title_name}</h3> </dt>
							</dl>
					</div>
					<div class="con_pro_2">
						<div>
							<p>￥${obj.price}</p>
						</div>
						<div>
							<p>￥${obj.price1}</p>
							<p>立省${obj.price2}</p>
						</div>
						<button  data="${obj.price}" dat="${obj.title_name}" proid="${obj.id}"> 加入购物车</button>
				</div> 
			
				`;

	if(obj.mask == 1) {
		tmp += `</div>`;
	} else {
		tmp += `<div class="con_pro_mask">
								<div class="con_pro_mask1">
									<p>抢光了</p>
								</div>
							</div>
						</div>
					`;
	}

});

con.innerHTML = tmp;



