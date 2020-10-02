class Stone{
    constructor(x,y,width,height) {
        var options ={
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        this.body = Bodies.rectangle(x,y,10,10,options);
        this.width=10;
        this.height=10;
        this.image = loadImage("stone.png");

        this.depth=2;

        World.add(world,this.body);
    }

      display(){
        var pos = this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;

        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green")
        imageMode(CENTER);
        image(this.image,0,0,this.width*5,this.height*5)

        pop();
    }
}