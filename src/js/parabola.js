function move11(elem, endX, endY, a, callback) {
	var startX = elem.offsetLeft;
	var startY = elem.offsetTop;
	var x1 = endX - startX;
	var y = endY - startY;
	var c = 0;
	var b = (y - a * x1 * x1 - c) / x1;
	var x = 0;
	function move1() {
		var step = (endX - elem.offsetLeft) / 6;
		if(step > 0) {
			step = Math.ceil(step);
		} else {
			step = Math.floor(step);
		}
		x += step;
		var y = a * x * x + b * x + c;

		elem.style.left = startX + x + "px";
		elem.style.top = startY + y + "px";
		if(startX + x == endX) {
			clearInterval(timer);
			if(callback) {
				callback();
			}
		}
	}
	var timer = setInterval(move1, 100);
}