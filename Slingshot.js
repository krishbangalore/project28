class SlingShot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: .001,
            length: 20
        }
        this.B= point;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
   

this.sling.bodyA = null;
}
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.B;

        strokeWeight(4);
        line(pointA.x-25, pointA.y, pointB.x, pointB.y);
        line()
        }
    }
    
}