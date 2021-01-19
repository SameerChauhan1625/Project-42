class Umbrella {
    constructor(x,y,w,h){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
        this.animation = loadAnimation("11,12,13,14,15,16,17,18");
    }

    display(){
        animationMode(CENTER);
        animation(this.animation,this.body.position.x,this.body.position.y,this.w,this.h);
    }
}