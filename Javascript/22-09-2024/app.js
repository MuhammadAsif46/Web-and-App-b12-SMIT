// alert("welcome SMIT")

// var city = "karachi"
// alert(city);

// var city;
// console.log(city);
// city ="lahore"
// console.log(city);

// var city = "karachi"
// city = "islamabad"
// console.log(city);

// var num = 123;
// console.log(num);

// var num;
// console.log(num);
// num = 456
// console.log(num);

// var num1 = 987;
// num1 = 123;
// console.log(num1);

// legal:

// camelCase :- userName

// var saylaniMassItTraining = ""

// // SNAKE CASE :- user_name

// var saylani_mass_it_traning = ""

// var num1 = 123
// console.log(num1);

// var num = 47
// console.log(num + 2);
// console.log(num - 2);
// console.log(num / 2);
// console.log(num * 2);
// console.log(num % 2);

// post increment :- num++
// pre increment :-  ++num
// post decrement :- num--
// pre decrement :-  --num

// var num = 7
// console.log(num++);
// console.log(++num);
// console.log(num--); //7
// console.log(num); //6

// console.log(--num); //
// console.log(num); //

// var num = 4;
// var num1 = num++ + --num - ++num + num-- + --num
// //          4    +   4   -   5   +  5   + 3
// console.log(num1);

// var num = 1 + (2 + 4)
// console.log(num);

// var num1 = 2 * (4 * 4) + 2;
// console.log(num1);

// var num1 = 2 + (3 * (4 + 5)) - 4
// console.log(num1);

// var firstName = "Jhon"
// var lastName = "Elia"
// // console.log(firstName +" "+ lastName);
// var fullName = firstName +" "+ lastName

// // hello my name is jhon Elia
// console.log("hello my name is " + fullName);

// var userName = prompt("enter your name")
// console.log(userName);

// var num = +prompt("enter a number")
// console.log(num + 3); // 8
// console.log(num + 6); // 11
// console.log(num + 1); // 6
// console.log(num + 1); // 6
// console.log(num + 1); // 6

// var num = +prompt("enter mobile number","+92")
// console.log(num);

// var abc = prompt("enter hello");
// if(abc === "hello"){
//     console.log("chal raha hai..");
// }

// ===  :- check type and value both
// ==   :- only check value
// !==  :- not equal
// >    :-
// <
// >=
// <=

// var salary = 100
// var person = "hamza"
// var firstTime = 40
// var secoundTime = 60
// var bonus = 50

// if(salary === firstTime + secoundTime){
//     console.log("salary nhi deni");
// }
// if(salary + bonus === firstTime + secoundTime){
//     console.log("salary nhi deni");
// }
// if(salary + bonus > firstTime + secoundTime){
//     console.log("salary dedo deni");
// }
// if(salary >= firstTime + secoundTime){
//     console.log("salary dedo deni");
// }
// if(salary === firstTime + secoundTime){
//     console.log("salary dedo deni");
// }

// var userName = "hello"
// if (userName === "hello") {
//   console.log("Correct!");
// } else {
//   console.log("Wrong answer");
// }

// var food = prompt("enter your food name?");

// if(food === "biryani"){
//     console.log("1kg leky ajao");
// }else if (food === "palao"){
//     console.log("1 paoo leky ajao");
// }else if (food === "burger"){
//     console.log("1 paoo leky ajao");
// }else if (food === "pizza"){
//     console.log("1 paoo leky ajao");
// }else if (food === ""){
//     console.log("1 paoo leky ajao");
// }else{
//     console.log("wapis ajao");
// }

// if(food === "biryani"){

// }

// var food = prompt("enter your food name?");

// if (food === "biryani") {
//   var extraItem = prompt("enter extraItem");
//   if (extraItem === "raita") {
//     console.log("1kg leky ajao raity ky sath");
//   }
// } else if (food === "palao") {
//   console.log("1 paoo leky ajao");
// } else if (food === "burger") {
//   console.log("2 leky ajao");
// } else {
//   console.log("wapis ajao");
// }

// var weight = 400;
// var gender = "female"

// if(weight > 300 && gender === "male"){
//     console.log("&& is running");
// }else{
//     console.log("&& is not running");
// }

// var student1 = "ali"
// var student2 = "ahmed"
// var student3 = "raza"
// var student4 = "ali"
// var student5 = "ali"

// var students = ["ali","ahmed","raza","khan"]
// console.log(students[2]);

// pop :-
// push
// unshift
// shift
// splice  :- index, length
// slice  :- index, length

// var students = ["ali","ahmed","raza","khan"]
// console.log(students.length);

// students.pop()
// students.push("jhon","hello")
// students.shift()
// students.unshift("jhon","heloo")
// students.splice(2,0,"zaid","hello")
// var copy = students.slice(1,4) //copy
// console.log(copy);

// console.log(students);

for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    console.log("break-->",i);
    break;
  }
}
