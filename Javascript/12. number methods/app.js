// var num = 2.45
// var num1 = 2.73
// console.log(num);
// console.log(Math.round(num));
// console.log(Math.round(num1));

// var num = 2.16
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));


// var num = Math.random() * 10
// console.log(num);


// var str = "100"
// var str2 = "2.9999"
// // console.log(+str);
// // console.log(parseInt(str));
// console.log(parseInt(str2));
// console.log(parseFloat(str2));



// var num = 123;
// console.log(typeof num);
// console.log(typeof String(num));
// console.log(typeof String(num) + " " + num.toString());
// console.log(typeof num.toString());

// var num = Math.random()
// console.log(typeof num);
// console.log(typeof Number(num.toFixed(2)));

// var num = Math.random() * 1


// var bigDecimal = Math.random();
// // console.log(bigDecimal);
// var improvedNum = (bigDecimal * 2) + 1;
// // console.log(improvedNum);
// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars);


var p1 = prompt("enter player1 name?")
var p2 = prompt("enter player2 name?")
var num = prompt("enter your fav number?")

var randomNumber = Math.floor(Math.random() * 2) 
console.log(randomNumber);

if (randomNumber === 0) {
    console.log(p1 + "Hat");
}else{
    console.log(p2 + " Tail");
}
