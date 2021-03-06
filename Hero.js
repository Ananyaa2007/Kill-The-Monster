class Hero{
    constructor(x,y,width,height){
        var options = {
            density : 1,
            frictionAir : 1
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width,this.height, options);
        World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle;
         var pos = this.body.position;
         translate(pos.x,pos.y)
        rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
    }
}