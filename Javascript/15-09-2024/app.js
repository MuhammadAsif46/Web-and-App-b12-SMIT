// Sort Array Method:

// var arr = [5,6,2,8,9,1]
// arr.sort()
// console.log(arr);

// Join Array Method:

// var arr = ["aisf","ahmed"]

// console.log(arr.join(" "));

// Split String Method:

// var arr = "asif ahmed"
// console.log(arr.split());

// Reverse Array Method:

// var arr = ["asif", "ahmed", "ali","khan","raza"]
// // console.log(arr.reverse());
// console.log(arr.reverse().join(" "))

// var arr = ["aa","bb"]
// console.log(arr);

// var arr1 = new Array("cc","dd")
// console.log(arr1);

// chapter 17 : FOR LOOP:

// var cities = ["karachi","lahore","peshawar","multan"]
// var userCity = prompt("Enter your city")

// if (cities[0] === userCity) {
//     console.log("true");
// } else if (cities[1] === userCity) {
//     console.log("true");
// }else if (cities[2] === userCity) {
//     console.log("true");
// }else if (cities[3] === userCity) {
//     console.log("true");
// } else{
//     console.log("false");
// }

// for(var i = 1; i <= 10; i++){
//     document.write("2  x" + i + " = " + 2 * i + "<br/>")
// }

// var names = ["asif","ahmed","ali","raza"]

// document.write("<h1>" + names[0] + "</h1>" )
// document.write("<h1>" + names[1] + "</h1>" )
// document.write("<h1>" + names[2] + "</h1>" )
// document.write("<h1>" + names[3] + "</h1>" )

//  for(var i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     document.write("<h1>" + names[i] + "</h1>" )
//  }

// chapter 18 : FOR LOOP --> Flags, Booleans, array length,and loopus interruptus

var cities = ["karachi", "lahore", "peshawar", "multan"];
var userCity = prompt("Enter your city");
var flag = false;

for (var i = 0; i < cities.length; i++) {
  if (cities[i] === userCity) {
    flag = true;
    break;
  }
}

if (flag) {
  alert("true");
} else {
  alert("false");
}

// for(var i = 0; i < 10; i++){
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
// }
