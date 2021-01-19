class Drop {
    constructor(x,y){
        var options={
            restitution : 0.2,
            friction : 0.3
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill("blue");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,10);
        pop();
    }

    updateY(){
        var pos = this.body.position;
        
        if(pos.y > 400){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}