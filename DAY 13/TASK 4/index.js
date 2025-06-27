
function main(){
    beepersRight();
   goUpTurnLeft();
    beepersLeft();
  goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
    beepersLeft();
  goUpTurnRight();
     beepersRight();
 }

function goUpTurnRight() {
 turnRight();
    move();
    turnRight();
 }
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }

 function beepersRight() {
    putBeeper();
    move();
  move();
  putBeeper();
    move();
   move();
    putBeeper();  
 }

 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 move();
 }

 //MY CODE:

 /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/

//game task inside other website it will not work here...   
function three() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
  }
  function two() {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
  }
  function main() {
    three();
    two();
    three();
    two();
    three();
  }
  