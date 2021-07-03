class Slingshot {
    constructor(bodyA,pointB){
        
        var option = {

            bodyA : bodyA,
            pointB : pointB,
            stifness : 0.04,
            length : 20
        }

        this.pointB = pointB
        this.sling = Constraint.create(option)
        World.add(world,this.sling)

    }

    fly(){
        this.sling.bodyA = null
    }

   display(){

    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        
       fill ("red");
       line (pointA.x,pointA.y,pointB.x,pointB.y)
       
    }
    }
}