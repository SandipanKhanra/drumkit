// Higher Order funtions which can take other functions as inputs

//React to click events
var btnArray = document.querySelectorAll(".drum");
for (var i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function() {

    var btnTxt = this.textContent;
    makeSound(btnTxt);
    buttonAnimation(btnTxt);
  });
}

//Detect key presses
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

//Depending on which key is pressed plays a particular sound
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(key);
  }
}


function buttonAnimation(currentKey) {
  //Adding a class to currently pressed button to show some visual effects
  var validKeys = ["w", "a", "s", "d", "j", "k", "l"];

  //Checks if current the key is a valid key displayed on the screen
  //then only add the class
  if (validKeys.includes(currentKey)) {
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.toggle("pressed");

    //Remove the class "pressed" after a certain time period
    setTimeout(function() {
      activeBtn.classList.remove("pressed")
    }, 100);
  }
}
