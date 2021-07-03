class Paper {
    constructor(x,y,radius){
var optic = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
       this.x = x;
       this.y = y;
       this.radius = radius;
    this.body = Bodies.circle(this.x,this.y,this.radius/2,optic)
    this.papImage = loadImage("paper.png")
   
    
    World.add(world,this.body);
    }

display (){
    var p = this.body.position
push ()
translate (p.x,p.y)

fill ("blue");

imageMode(CENTER)
image(this.papImage,0,0,this.radius,this.radius)



pop ()
    
}

}