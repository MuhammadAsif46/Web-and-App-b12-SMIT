//  --------- Optional chaining ----------

// let obj = {
//   username: "abc",
//   age: 12,
//   profile: {
//     name: "hello",
//   },
// };

// // console.log(obj.username);
// console.log(obj.profile.name); // abc
// console.log(obj?.address?.city);


//  --------- Exponentiation Operator ----------

// let power = Math.pow(2,5)
// console.log(power);

// let power2 = 2 ** 5
// console.log(power2);

//  --------- Higher-order function ----------


// let abc = a => a;

// let number = [1, 2, 3, 4, 5];
// let returnValue = number.map((num) => num);
// console.log(returnValue);


//  --------- Modules ----------

// import { abc, sum } from "./main.js";

// console.log(abc);

// console.log(sum(2,3));


//  --------- Closures ----------


// const outerFunction = () =>{
//     let smit = "Saylani"
//     const innerFunction = () =>{
//         console.log(smit);
//     }
//     innerFunction()
// }

// outerFunction()

// function outerFunction (){
//     let smit = "Saylani"
//     function innerFunction(){
//         console.log(smit);
//     }
//     innerFunction()
// }

// outerFunction()


//  --------- Map (advance object)----------


// let obj = {
//     name: "abc",
//     age:12,
//     isAuctive: false
// }

// obj.city = "khi"

// console.log(obj.age);

// console.log(obj.10);

// for(let count in obj){
//     console.log(count);
// }

// types diffrence
// length get
// values get

// let map = new Map([
//     ["name", "hello"],
//     ["10", "15"],
//     ["true", "abc"]
// ])

// map.set("city", "khi")

// console.log(map.get("city"));

// console.log(map);
// console.log(map.size);
// console.log(map.values());
// console.log(map.keys());


//  --------- Generators Function ----------


// function* generatorFunc(){
//     console.log("start");
//     let abc = "hello"
//     yield abc
//     yield 30
//     yield 40

//     console.log("stop");
// }

// let gen = generatorFunc()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


//  --------- CallBack ----------


// function abc(foo) {
//     // console.log(foo);
//     setTimeout(() => {
//         let a = 4;
//         let b = 5;
//         let c = a +b
//         // console.log(c);
//         foo(c)
//   },6000);
// }

// function foo(result){
//     console.log(result);
// }

// abc(foo)


//  --------- Promises ----------


// function abc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let a = 4;
//       let b = 5;
//       let c = a + b;
//     //   resolve(c)
//     reject("erro agaya hai...")
//     }, 3000);
//   });
// }

// abc()
// .then((data)=>{
//     console.log("data--->",data);
// })
// .catch((err)=>{
//     console.log("error--->", err);
// })


// console.log(abc(2))

// Difference between CallBack and Promises



                //  CallBack                          // Promise

// Syntax : function ko argument ky toor            .then() and .catch() method use krta hai
//          py pass krta hai

//Error     har call back ky under manully          .cath() sy centerlaized error handle hota hai
//Handling: handle krna parta hai

//state         khud logic lekhni parti hai         built-in states hain : resolve,reject
//management:   state ko track krne ky liye

//modern        purana tarika async tasks ky        Es6 me aya modern aur preferred tareeqa hai
//approach:     liye
