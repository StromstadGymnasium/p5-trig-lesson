//These are global variables that we'll use throughout the program
var soldierX = 0;
var soldierY = 0;
var soldierDir = 0;

var goalX = 0;
var goalY = 0;

var xDistanceToGoal  = 0;
var yDistanceToGoal  = 0;
var triangleAngle = 0;

//The setup() and draw() functions are used almost all p5 projects.  They are unique to p5.
function setup() {

}

function draw() {

}

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

  // if (goalX > soldierX && goalY < soldierY){
  //   soldierDir = 90 - triangleAngle;
  // }
  // if (){
  //
  // }
  // if (){
  //
  // }
  // if (goalX < soldierX && goalY < soldierY){
  //   soldierDir = 270 + triangleAngle;
  // }
}

function moveSoldier(){


  // if (goalX > soldierX && goalY < soldierY){
  //   soldierX = soldierX + singleXMovement;
  //   soldierY = soldierY - singleYMovement;
  // }
  // if ("YOUR CONDITIONS"){
  //   // TRY TO COMPLETE THIS IF STATEMENT
  // }
  // if ("YOUR CONDITIONS"){
  //   // TRY TO COMPLETE THIS IF STATEMENT
  // }
  // if (goalX < soldierX && goalY < soldierY){
  //   soldierX = soldierX - singleXMovement;
  //   soldierY = soldierY - singleYMovement;
  // }

}

function mousePressed(){



  //These lines of code are for debugging
  console.log("~~~~~~~~~~~~~~~~~");
  console.log("goalX: " + goalX);
  console.log("goalY: " + goalY);
  console.log("-");
  console.log("xDistanceToGoal: " + xDistanceToGoal);
  console.log("yDistanceToGoal: " + yDistanceToGoal);
  console.log("triangleAngle: " + triangleAngle);
}
