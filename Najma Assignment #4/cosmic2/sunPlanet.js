var sun = {
  angle: 100,
  variable: .01,
  speed: .2,
  
   display: function() {
     
   },
   
   rise: function() {
    //sun appears
    strokeWeight(20);
    stroke(246, 159, 31, 10);
    fill(253, 184, 19);
    ellipse(300, 300, 120, 120);
    fill(246, 139, 31,60);
    ellipse(300, 300, 110, 110);
    
  }

}