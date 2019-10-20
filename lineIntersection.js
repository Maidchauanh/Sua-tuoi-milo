class Line{
	constructor(x1,y1,x2,y2){
		this.x1=x1
		this.y1=y1
		this.x2=x2
		this.y2=y2
		this.a = 0
		this.b = 0
		this.c = 0
		this.m = 0
		this.i = 0 
	}
	show(){
		stroke(255)
		line(this.x1,this.y1,this.x2,this.y2)
	}
	findm(){
		this.m = (this.y2 - this.y1 )  / (this.x2 - this.x1)
		return this.m
	}
	findi(){
		//self.y1 - self.m * self.x1 
		this.i = this.y1 - this.m * this.x1
		return this.i

	}
	finda(){
		this.a = this.y2 - this.y1 
		return this.a
	}

	findb(){
		this.b = this.x2 - this.x1
		return -this.b
	}
	findc(){
		this.c = (this.y2-((this.y2 - this.y1 )  / (this.x2 - this.x1))*this.x2) * (this.x2 - this.x1)
		return this.c 
	}

}

function drawIntersect(l1, l2){
	let a = l2.finda()
	let b = l2.findb()
	let c = l2.findc()
	// acx- acxt + apxt + bcy - bcyt + bpyt + c=0
	// -acxt + apxt - bcyt + bpyt = -acx - bcy -c 
	// t = (-acx - bcy -c ) / (-acx + apx - bcy + bpy)

	let t = (-a*l1.x1 - b*l1.y1 - c) / (-a*l1.x1 + a*l1.x2 - b*l1.y1 + b*l1.y2 )

	let ix = l1.x1 - l1.x1*t + t*l1.x2
	let iy = l1.y1 - l1.y1*t + t*l1.y2

	circle(ix,iy,10)

}

function setup(){
	createCanvas(800,800)
	frameRate(30)
}
let x= 0
let y= 0
function draw(){
	background(0)
	x=mouseX
	y=mouseY
	
	l1 = new Line(100,100, x,y)
	l2 = new Line(100,400, 300,100)
	l1.show()
	l2.show()
	drawIntersect(l1,l2)


}