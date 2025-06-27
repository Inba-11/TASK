const audio = document.querySelectorAll(`.drum`);
audio[0].addEventListener("click",function() {
const audio1 = new Audio("sounds/tom-1.mp3");
audio1.play();          

});
audio[1].addEventListener("click",function() {
const audio2 = new Audio("sounds/tom-2.mp3");
audio2.play();  

});
audio[2].addEventListener("click",function() {
const audio3 = new Audio("sounds/tom-3.mp3");       
audio3.play();  

});
audio[3].addEventListener("click",function() {
const audio4 = new Audio("sounds/tom-4.mp3");
audio4.play();  

});
audio[4].addEventListener("click",function() {
const audio5 = new Audio("sounds/snare.mp3");
audio5.play();

});
audio[5].addEventListener("click",function() {
const audio6 = new Audio("sounds/crash.mp3");
audio6.play();  

});
audio[6].addEventListener("click",function() {
const audio7 = new Audio("sounds/kick-bass.mp3");
audio7.play();  

});
 var click = document.querySelectorAll(`.drum`);
for (let i = 0; i < click.length; i++) {
  click[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}       
function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}   
