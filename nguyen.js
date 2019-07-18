class Bird {
	constructor(){
		this.birdPosX=100;
		this.birdPosY=800/2;
		this.birdVel=0;
		this.birdAcc=0;
		this.size=50;
		this.gravity=1;
	}
	show(){
		fill(255);
		ellipse(this.birdPosX,this.birdPosY,this.size);
	}
	update(){
		this.birdVel+=this.birdAcc;
		this.birdPosY+= this.birdVel;
		if(this.birdAcc>=this.gravity)
			this.birdAcc=this.gravity;
		if(this.birdPosY>=800){
			this.birdPosY=800;
		}
		if(this.birdPosY<=0){
			this.birdPosY=0;
		}
		console.log(this.birdAcc);
	}
	down(){
		this.birdAcc+=this.gravity;
	}
	up(){
		if(this.birdVel>=0.1){
			this.birdAcc=0 ;
			this.birdVel=-20;
		}
	}
	hits(){

	}
}
class Pipe{
	constructor(){
		this.hole=200;
		this.top=random(50,height-200);
		this.bottom=height-this.top-this.hole;
		this.speed=5;
		this.x=width;
		this.width=100;
	}
	show(){
		fill(0,200,0);
		rect(this.x,0,this.width,this.top);
		rect(this.x,height-this.bottom,this.width,this.bottom);
	}
	update(){
		this.x-=this.speed;
	}
}
let bird;
let pipe;
let pipes=[];
function setup(){
	createCanvas(800,800);
	frameRate(30);
	bird= new Bird();
	pipe=new Pipe();
}
let textsize=20;
let distance=100;
let score=0;
function keyPressed(){
	if(keyCode ==UP_ARROW){
		bird.up();
	}
}
function draw(){
	background(0);
	bird.show();
	bird.update();
	bird.down();
	if(frameCount%distance==0)
		pipes.unshift(new Pipe());
	for(let i =0 ;i<pipes.length;i++){
		pipes[i].show();
		pipes[i].update ();
	}	
	if(pipes.length>5){
		pipes.pop();
	}
	// if (score%10==0&&distance>40){
	// 	distance-=10;
	// }	
}