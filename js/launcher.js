class Launcher{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.05
        }
        this.bodyA = body1;
        this.pointB = point2;
        this.launch = Constraint.create(options)
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){
        var pointA = this.bodyA.position
        var pointB = this.pointB

        push()
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop()

    }
}