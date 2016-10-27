var time1 = 500;
var time2 = 1000;
var time3 = 1500;
var time4 = 2000;
var time5 = 2500;
var time6 = 3000;
var time7 = 3500;
var time8 = 4000;
var time9 = 4500;
var times1 = 5000;
var times2 = 5500;
var times3 = 6000;
var times4 = 6500;
var times5 = 7000;
var times6 = 15000;
var times7 = 20000;
var times8 = 21000;

function draw() {
  stroke(random(255), random(20), random(255));
  strokeWeight(.4);
  var currentTime = millis();
  if (currentTime < this.time1) {
  star.move();
  star.display();
  

  }
  
  var currentTime = millis();
  if (currentTime < this.time2) {
  star.move1();
  star.display();
  

  }
  
  var currentTime = millis();
  if (currentTime < this.time3) {
  star.move2();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.time4) {
  star.move3();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.time5) {
  star.move4();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.time6) {
  star.move5();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.time7) {
  star.move6();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.time8) {
  star.move7();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.time9) {
  star.move8();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times1) {
  star.move9();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times2) {
  star.moves1();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times3) {
  star.moves2();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times4) {
  star.moves3();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times5) {
  star.moves4();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times6) {
  star.moves5();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime < this.times7) {
  star.moves6();
  star.display();
  
  }
  
  var currentTime = millis();
  if (currentTime > this.times8) {
  sun.rise();
  sun.display();
  
  }

}