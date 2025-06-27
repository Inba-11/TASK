function bmiCal(weight, height) {
  return Math.round(weight / height ** 2);
}
function check(){
    if (a < 18.5) {
      console.log("You are UnderWeight");
    } else if (a > 24.9) {
      console.log("You are OverWeight");
    } else {
      console.log("You have a normal Weight");
    }
}
var a = bmiCal(95, 1.63);
check();