
//The setup(), draw(), and mousePressed() functions are standard p5 functions
function setup() {
  createCanvas(500,500);
  background('lightblue');
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(2);
  frameRate(20);

  for (var i = 0; i < 10; i++){
    var anAlien = new Alien;
    alienList.push(anAlien);
  }
}

function draw() {
  background('lightblue');
  drawSoldier(soldierX, soldierY, soldierDir);
  pointSoldier();
  moveSoldier();

  for (var i = 0; i < alienList.length; i++){
    alienList[i].calcDistanceFromSoldier();
    if (alienList[i].distanceFromSoldier <= 40){
      alienList[i].show = false;
    }
    alienList[i].drawAlien();
  }
}

var soldierX = 200;
var soldierY = 200;
var soldierDir = 0;

var goalX = 0;
var goalY = 0;

var xDistanceToGoal  = 0;
var yDistanceToGoal  = 0;
var triangleAngle = 0;

var alienList = [];

// The drawSoldier() function (below) is the only pre-completed function in this project
function drawSoldier(x, y, dir){
  translate(x, y);
  rotate(dir);
  stroke('black');
  rect(0,-20,10,20);
  ellipse(0,0,30,30);
  resetMatrix();
}

function pointSoldier(){
  stroke('green');
  line(soldierX, soldierY, goalX, goalY);
  stroke('blue');
  line(soldierX, soldierY, goalX, soldierY);
  stroke('red');
  line(goalX, soldierY, goalX, goalY);

  if (goalX > soldierX && goalY < soldierY){
    soldierDir = 90 - triangleAngle;
  }
  if (goalX > soldierX && goalY > soldierY){
    soldierDir = 90 + triangleAngle;
  }
  if (goalX < soldierX && goalY > soldierY){
    soldierDir = 270 - triangleAngle;
  }
  if (goalX < soldierX && goalY < soldierY){
    soldierDir = 270 + triangleAngle;
  }

}

function moveSoldier(){

  var singleXmovement = cos(triangleAngle);
  var singleYmovement = sin(triangleAngle);


  if (goalX > soldierX && goalY < soldierY){
    soldierX = soldierX + singleXmovement;
    soldierY = soldierY - singleYmovement;
  }
  if (goalX > soldierX && goalY > soldierY){
    soldierX = soldierX + singleXmovement;
    soldierY = soldierY + singleYmovement;
  }
  if (goalX < soldierX && goalY > soldierY){
    soldierX = soldierX - singleXmovement;
    soldierY = soldierY + singleYmovement;
  }
  if (goalX < soldierX && goalY < soldierY){
    soldierX = soldierX - singleXmovement;
    soldierY = soldierY - singleYmovement;
  }
}

function mousePressed(){
  goalX = mouseX;
  goalY = mouseY;

  xDistanceToGoal = Math.abs(goalX - soldierX);
  yDistanceToGoal = Math.abs(goalY - soldierY);

  triangleAngle = atan(yDistanceToGoal / xDistanceToGoal);


  // These lines of code are for debugging purposes!
  console.log("~~~~~~~~~~~~~~~~~");
  console.log("goalX: " + goalX);
  console.log("goalY: " + goalY);
  console.log("-");
  console.log("xDistanceToGoal: " + xDistanceToGoal);
  console.log("yDistanceToGoal: " + yDistanceToGoal);
  console.log("triangleAngle: " + triangleAngle);
}


class Alien{
  constructor(){
    this.x = random(500);
    this.y = random(500);
    this.distanceFromSoldier;
    this.show = true;
  }

  drawAlien(){
    if (this.show === true){
      translate(this.x, this.y);
      stroke('black');
      ellipse(0,0,30,10);
      ellipse(0,0,10,30);
      resetMatrix();
    }
  }

  calcDistanceFromSoldier(){
    var result = dist(this.x, this.y, soldierX, soldierY);
    this.distanceFromSoldier = result;
  }
}
