// chap 8 : Concatenating text strings:

// var firstName = "Jhon"
// var lastName = "Elia"
// var fullName = firstName + " " + lastName
// console.log(fullName);

// document.write("<h1> " + fullName +" </h1>" )

// chap 9 : Prompts:

//  var userName = prompt("Enter your name?","jhon")
//  console.log(userName);

// var phone = prompt("Enter your number?","+923")
// console.log(phone);

// var num1 = +prompt("enter your num1")
// console.log(num1 + 5);//9
// console.log(num1 + 2); //6
// console.log(num1 + 1); //5
// console.log(num1 + 1); //5
// console.log(num1 + 1); //5
// console.log(num1 + 1); //5
// console.log(num1 + 1); //5

// chap 10 : If Statements:

// var num1 = +prompt("enter your first no")
// var opt = prompt("enter operator")
// var num2 = +prompt("enter your second no")
// var result;
// // console.log(num1 + opt + num2);

// if(opt == "+"){
//     result = num1 + num2;
// }
// if (opt == "-") {
//     result = num1 - num2;
// }
// if(opt == "*"){
//     result = num1 * num2;
// }

// console.log(result);

// chap 11 : Comparison Operators:

// ===
// ==
// >
// <
// >=
// <=
// !==

// chap 12 : If else and else if statements:


// var lang = prompt("Enter your Language")

// if(lang === "HTML"){
//     console.log("your are hired");
// } else{
//     console.log("you are not hired");
// }

// var firstName = "Jhon"
// var lastName = "Elia"
// var fullName = firstName + " " + lastName
// // console.log(fullName);

// if(fullName === firstName + " " + lastName){
//     console.log("hello");
// }

// if(num === 12 + 13 ){
//     console.log("hello");
// }

// var person = "jhon"

// var salary = 100;
// var bonus = 50;

// var firstTime = 40;
// var secondTime = 60;

// if (salary + bonus === firstTime + secondTime) {
//     console.log("nahi malegi");
// }else{
//     console.log("mil jayegi");
// }

// var lang = prompt("Enter your Language");

// if (lang === "HTML") {
//   console.log("your are hired");
// } else if (lang === "CSS") {
//   console.log("your are hired");
// } else {
//   console.log("you are not hired");
// }

var food = prompt("enter your food");

if(food === "biryani"){
    console.log("1kg leky ajao");
} else if ( food === "burger"){
    console.log("2 leky ajana");
} else if ( food === "palauo"){
    console.log("1/2 leky ajana");
} else{
    console.log("wapis mat aao");
}
