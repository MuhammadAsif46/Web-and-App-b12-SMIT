// var str = "HELLO WORLD"
// var lowerCase = str.toLowerCase()
// console.log(lowerCase);

// var str = "hello world"
// var upperCase = str.toUpperCase()
// console.log(upperCase);

// var str = "hello"
// var cap = str.slice(0,1).toUpperCase() + str.slice(1)
// console.log(cap);

// Task one:- hello world

// var small = str.slice(1)
// var res = cap + small
// console.log(small);

// var str1 = "hello"
// var str2 = ["hello","world"]
// str2[1] = "class"
// console.log(str2);

// mutable
// immutable

// var str = "helo world user"
// for(var i = 0; i < str.length; i++){
//     // console.log(str[i]);
//     if(str.slice(i, i + 5) === "world"){
//         console.log("found!")
//         // break;
//     }
// }

// task two:- saylani mass it training program

// for loop
// ini, condition, increment

// var table = prompt("enter your number")
// for(var i = 1; i <= 10 ; i++) {
//     document.write( table + " x " + i + " = " + i * table + "<br/>");
// }

// var arr = ["hello","world","user","ali"]

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(cities.length);

// var userCity = prompt("enter your city");
// var cities = ["karachi", "multan", "lahore", "islamabad"];
// var flag = false;

// for (var i = 0; i < cities.length; i++) {
//   if (userCity === cities[i]) {
//     flag = true;
//     break;
//   }
// }

// if (flag === true) {
//   alert("true");
// } else {
//   alert("false");
// }

// console.log(cities[i]);

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
// }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + lastNames[j]);
  }
}
