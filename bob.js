class Bob {  
    constructor(bobObject1,bobObject2,bobObject3,bobObject4, bobObject5){
        var options = {
            bobObject1:bobObject1,
            bobObject2:bobObject2,
            bobObject3:bobObject3,
            bobObject4:bobObject4,
            bobObject5:bobObject5,
        }
         this.radius = 70;
        this.body = Bodies.circle(180, 240, 700, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    var pointA = this.rope.bobObject1.position;
    var pointB = this.rope.bobObject2.position;
    var pointC = this.rope.bobObject2.position;
    var pointD = this.rope.bobObject2.position;
    var pointE = this.rope.bobObject2.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y,pointC.x,pointC.y,pointD.x,pointD.y,pointE.x,pointE.y);
    fill("grey");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
