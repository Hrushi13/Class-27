class Chain  {
constructor (body1,body2) {
    var options = {
        bodyA:body1,
        bodyB:body2,
        
        length: 40,
        stiffness:0.4
        
    }
this.Chain = Constraint.create(options); 
World.add (world,this.Chain);



}
display(){
var posA = this.Chain.bodyA.position
var posB = this.Chain.bodyB.position
strokeWeight(4);
line (posA.x,posA.y,posB.x,posB.y);
}

}