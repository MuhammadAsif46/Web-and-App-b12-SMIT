// chapter 48 : Events : fields

// chapter 49 : Reading field values:

// function abc() {
//   var userName = document.getElementById("username").value;
//   console.log(userName);
// }

// chapter 50 : Setting field values

// var user = "faraz";
// function abc() {
//     var userName = document.getElementById("username").value = user;
//     console.log(userName);
//   }

// ------ game logics -----

var forward = 0;
function abc() {
  // console.log(event.key);
  console.log(event.keyCode);

  var character = document.getElementById("character");
  if(event.keyCode === 65){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 66){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 67){
    character.style.width = "160px"
    character.style.height = "160px"
    character.src = "images/iron-walk.gif"
    
  }
  if(event.keyCode === 68){
    character.style.width = "250px"
    character.style.height = "250px"
    character.src = "images/iron-gem.gif"
    
  }
}

window.onkeydown = abc;
