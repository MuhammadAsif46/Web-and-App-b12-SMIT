// ------- hoisted variable -------
// var abc;

// ------- DEFAULT PARAMETERS & REST PARAMETERS -------
// function abc(a="please enter your email", ...abc){
//     console.log(a,abc);
// }
// abc("abc@gmail.com","ahmed",324,true,"abc")


// ------- REST PARAMETERS -------
// function abc(...abc){
//     console.log(abc[0]);
// }
// abc("abc@gmail.com","ahmed",324,true,"abc")


// ------- SPREAD OPERATOR with (array) -------  
// let arr = [1,2,3,4,5]
// let arr1 = [6,7,8,9,10, ...arr]

// let merge = [...arr,...arr1]
// console.log(arr1);


// ------- SPREAD OPERATOR with (object) -------
// let obj = {
//     firstName:"ali",
//     lasstName:"raza"
// }
// let student = {
//     ...obj,
//     email:"abc@gmail.com"
// }

// console.log(student);
// console.log(obj,student);

// console.log({...obj,...student});


// console.log(arr.concat(arr1,arr2));
// console.log(obj.concat(obj1));



// ------- DESTRUCTURING with (object) ------- 
// let obj = {
//   firstName: "ali",
//   lastName: "raza",
//   email: "abc@gmail.com",
// };

// let { lastName, firstName } = obj;

// console.log(firstName, lastName);


// ------- DESTRUCTURING with (array) -------
// let arr = ["smit",3254,"ahmed",true]

// let [a,c,b,d] = arr;

// console.log(a,b);

// Array Methods(forEach, map, filter, reduce, some, every):
// let arr = ["smit",3254,"ahmed",true]

// ------- Map() -------

// let result = arr.map(function(val){  
//     console.log(val);
//     return `saylani ${val}`
// })

// console.log(result);

// let arr = ["smit",3254,"ahmed",true]

// ------- ForEach() -------

// let result = arr.forEach(function(val){
//     console.log(val);
// })

// console.log(result);

// ------- Simple Loop -------

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// let arr = ["smit",3254,"ahmed",true]

// ------- Filter() -------

// let result = arr.filter(function(val){
//     return typeof val === "string"
//     return val === "smit"
// })

// console.log(result);


// let arr = ["smit"]

// ------- Some() -------

// let result = arr.some(function(val){
//     return val === "smit"
// })  

// ------- Every() -------

// let result = arr.every(function(a){
//     // console.log(a);
//     return a === "Smit";
// })  

// console.log(result);

// ------- Reduce() -------

// let arr = [10,20,5,34,50]
// // min
//  let result = arr.reduce(function(a,b){
//     // console.log(a,b);
//     return b < a ? b : a  
//     // return b > a ? b : a  
// })

// console.log(result);


// ------- VAR vs LET vs CONST ---------

// function foo(){
//     let abc = "hello"
// }

// console.log(abc);

// if(true){
//     let abc = "hello"
// }
// console.log(abc);

// const abc = "hello"
// console.log(abc);
// abc = "world"
// console.log(abc);

// var abc = "hello"

// let firstName = `ahmed
// khan`;
// let lastName = "khan"

// ------- Template literals -------

// // let fullName = firstName + " " + lastName
// let fullName = `${firstName} ${lastName}`

// console.log(fullName);


// ---- Ternary Operator -------

// let fullName = prompt("enter your name?")

// let abc = fullName === "ali" ? console.log("YES") : console.log("NO");

















const numbers = [10, 5, 20, 8, 15];

// Find Minimum
const minValue = numbers.reduce((a, b) => {
  return b < a ? b : a;
});

// Find Maximum
const maxValue = numbers.reduce((a, b) => {
  return b > a ? b : a;
});

// console.log("Minimum Value:", minValue); // Output: 5
// console.log("Maximum Value:", maxValue); // Output: 20
