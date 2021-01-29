class Polygon {
    constructor(x, y,r) {
      var options = {
          isStatic : false,
          restitution : 0,
          friction : 1
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("sprites/polygon.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      
      World.add(world,this.body);
    }
      display() { 
        var pos=this.body.position; 
        push() 
        translate(pos.x,pos.y); 
        imageMode(CENTER); 
        image(this.image,0,0,70,70); 
        pop() 
      }
    }