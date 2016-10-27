var star = {
  angle: 100,
  variable: .01,
  speed: .2,


  
  display: function() {
    
    
  },
  move: function() {
    // Left1 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(1, 100) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
    
  },
  
  move1: function() {
    //Right1 stars to appear
    this.x = random(500, 600) + cos(this.angle) * this.variable;
    this.y = random(500, 600) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move2: function() {
    //Left2 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(100, 200) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move3: function() {
    //Right2 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(100, 200) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move4: function() {
    //Left3 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(100, 200) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move5: function() {
    //Right3 stars to appear
    this.x = random(500, 600) + cos(this.angle) * this.variable;
    this.y = random(400, 500) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move6: function() {
    //Left4 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(200, 300) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move7: function() {
    //Right4 stars to appear
    this.x = random(500, 600) + cos(this.angle) * this.variable;
    this.y = random(300, 400) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move8: function() {
    //Left5 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(300, 400) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  move9: function() {
    //Right5 stars to appear
    this.x = random(500, 600) + cos(this.angle) * this.variable;
    this.y = random(200, 300) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  moves1: function() {
    //left6 stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(400, 500) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  moves2: function() {
    //right6 stars to appear
    this.x = random(500, 600) + cos(this.angle) * this.variable;
    this.y = random(100, 200) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  moves3: function() {
    //11th stars to appear
    this.x = random(1, 100) + cos(this.angle) * this.variable;
    this.y = random(500, 600) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  moves4: function() {
    //12th stars to appear
    this.x = random(100, 500) + cos(this.angle) * this.variable;
    this.y = random(1, 100) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  moves5: function() {
    //13th stars to appear
    this.x = random(100, 500) + cos(this.angle) * this.variable;
    this.y = random(500, 600) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
  },
  
  moves6: function() {
    //center stars to appear
    this.x = random(100, 500) + cos(this.angle) * this.variable;
    this.y = random(100, 500) + sin(this.angle) * this.variable;
    ellipse(this.x,this.y,5,1);
    this.angle += this.speed;
    this.variable += this.speed;
    
},

  rise: function() {
    //sun appears
    strokeWeight(10);
    stroke(255,69,0,90);
    fill(250, 180, 50, 50);
    ellipse(300, 300, 150, 150);
    
  }

}