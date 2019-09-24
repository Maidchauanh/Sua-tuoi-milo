function setup(){
	createCanvas(400,400)
	frameRate(10)
	background(0);
}
let x=0;
let dots=[]
function draw(){
	translate(0,200)
	let y=sin(x/40)*100;
	dots.shift(y)
	for(let i =0;i<dots.length;i++){
		circle(x,dots[i],5,5) 
	}
	x+=10
	console.log(y)
	//noLoop();
}
