class Block{
    constructor(x, y, width, height){
        var options = {
            //width: width,
            //height: height,
            //image: image,
            //randval: randval,
            restitution: 0.001,
            friction: 1,
            density: 1,
            isStatic :true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("blockimg.png");
        this.image2 = loadImage("blockimg2.png");
        this.image3 = loadImage("blockimg3.png");
        
    }
    display(){
        
        //var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
        randval = Math.round(random(1,3));
        if(randval === 1){
            image(this.image,this.body.position.x, this.body.position.y ,this.width, this.height);
        } else if(randval === 2){
            image(this.image2,this.body.position.x, this.body.position.y, this.width, this.height);
        } else if(randval === 3){
            rect( this.body.position.x, this.body.position.y, this.width, this.height);
        }
        pop();
    }
}