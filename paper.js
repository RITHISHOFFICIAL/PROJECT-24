class Paper{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(100,490,20,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("yellow");
        ellipse(pos.x,pos.y,this.width,this.height);
        translate(pos.x,pos.y);
        pop();
    }
}