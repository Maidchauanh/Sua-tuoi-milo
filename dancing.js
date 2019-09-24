let animate=[frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10,frame11,frame12,frame13,frame14,frame15,frame16,frame17,frame18,frame19,frame20,frame21,frame22,frame23,frame24,frame25,frame26,frame27,frame28,frame29,frame30,frame31,];
class Animation{
  constructor(sprite,speed,x,y,textsize){
    this.x=x;
    this.y=y; 
    this.sprite=sprite;
    this.speed =speed;
    this.index=0;
    this.textsize=textsize;
  }
  show(){
    fill(255);
    let index=floor(this.index)%this.sprite.length;
    for(let i =0;i<this.sprite[index].length;i++){
      for(let j =0;j<this.sprite[index][i].length;j++){
	noStroke();
        if(this.sprite[index][i][j]=="&"){
          

          fill(0);
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]=="@"){
          
          fill(31,16,6 );
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]=="."){
         
          fill(255,234,200);
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]=="/"){
          //noStroke();
          fill(255,125,74);
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]=="("||this.sprite[index][i][j]=="#"){
          //noStroke();
          fill(20,10,6);
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]=="*"){
          //noStroke();
          fill(250,200,108);
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]==" "){
          //noStroke();
          fill(200);
          rect(5*j,10*i,5,10);
        }
        else if(this.sprite[index][i][j]=="%"){
          //noStroke();
          fill(36,28,12);
          rect(5*j,10*i,5,10);
        }

        else if(this.sprite[index][i][j]=="$"){
          //noStroke();
          fill(105,5,1);
          rect(5*j,10*i,5,10);
        }
        // textSize(this.textsize);
        // text(this.sprite[index][i][j],this.textsize*j+this.x,this.textsize*i+this.y);
      }
    }
  }
  animate(){
    this.index+=this.speed;
  }
}
let animation;
function setup(){
	createCanvas(1000,1500);
	frameRate(60);
	animation=new Animation(animate,1.5,0,0,5);
}
function draw(){
	background(255);
	animation.show();
  animation.animate();
	//noLoop();
}
