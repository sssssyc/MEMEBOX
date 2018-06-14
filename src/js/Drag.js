class Drag{
	constructor( elem ){
		this.elem = elem;
		elem.firstElementChild.onmousedown = this.down.bind(this);
	}
	down(e){
		this.x = e.clientX - this.elem.offsetLeft;
		this.y = e.clientY - this.elem.offsetTop;
		
		document.onmousemove = this.move.bind(this);
		document.onmouseup = this.up;
	}
	move(e){
		this.elem.style.left = e.clientX-this.x+"px";
		this.elem.style.top = e.clientY-this.y+"px";
	}
	up(){
		document.onmousemove = document.onmouseup = null;
	}
}

//export default Drag