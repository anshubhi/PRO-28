class Dustbin {
constructor(x,y){

    var opt = {
isStatic:true


    }

this.x= x;
this.y = y;
this.dustbinWidth = 200;
this.dustbinHeight = 213;
this.wallThickness = 20;

this.dustI = loadImage("dustbingreen.png")
this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,opt)
this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,opt)
this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,opt)




World.add(world,this.bottomBody);
World.add(world,this.leftWallBody);
World.add(world,this.rightWallBody);


}




display (){


    var pos = this.bottomBody.position
    var pos1 = this.leftWallBody.position
    var pos2 = this.rightWallBody.position




push ()
translate (pos1.x,pos1.y)
rectMode(CENTER)
angleMode(RADIANS)
fill (255)
rotate (this.angle)
pop ()

push ()
translate (pos2.x,pos2.y)
rectMode(CENTER)
angleMode(RADIANS)
fill (255)
rotate (-1*this.angle)
pop ()




push ()
translate (pos.x,pos.y)

rectMode(CENTER)

angleMode(RADIANS)

fill(255)
imageMode (CENTER)
image(this.dustI,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinWidth)
pop ()
}

}