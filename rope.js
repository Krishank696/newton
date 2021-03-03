class chain {
    constructor(body1,body2,offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var opions = {
            BodyA:body1,
            BodyB:body2,
            pointB:(x:this.offsetX, this.offsetY);



        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        rope1 =new rope (bobObject1.body, roofObject.body,-bobDiameter*2, 0)
  }





  this.chain = Constraint.create(options);
World.add(world, this.chain);
 }
display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(4);
line(pointA.x, pointA.y, pointB.x, pointB.y);


}



}
