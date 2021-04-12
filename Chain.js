class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10          
        }
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   display(){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
                
               
    }
    
}