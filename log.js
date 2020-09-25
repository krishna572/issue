class Log{
    constructor(x,y,height,angle){
        var Options = {
            'restitution': 1,
            'friction': 0.3,
            'density': 1
        }
        this.body = Bodies.rectangle(x,y,20,height,Options);
        this.width = 20;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown");
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}