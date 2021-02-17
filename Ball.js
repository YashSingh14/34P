class Ball {
    constructor(x, y, width, height, angle) {
      var options = {
          isStatic:false,
        'density':1,
        'frictionAir': 0.005
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images/Superhero-01.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
			image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };
  