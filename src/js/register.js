span1.onmousedown = function( ){
					var a = UserName.nextElementSibling;
					if ( /^([A-z]|_)\w{3,7}$/.test(UserName.value)) {
						a.innerHTML = "合法";
						a.className="success";
					}else{
						a.innerHTML = "非法";
						a.className="error";
					}
			


$("#zhuce").click(function(){
)
