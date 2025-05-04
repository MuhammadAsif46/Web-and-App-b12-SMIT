

// var mobiles = [
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "mongo",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
// ];

// console.log(mobile.price);
// console.log(mobile.color[0]);

// console.log(mobile.getDetail());

// var str = "hello";
// console.log(str.toUpperCase());

// for(var i =0; i< mobiles.length; i++){
//     console.log(mobiles[i]);
// }

// function Student(userName,rollno,className,type){
//     this.name = userName,
//     this.rollNo = rollno,
//     this.class = className
//     this.isOpen = type
//     this.userInfo = function (){
//         return `${this.name} ${this.rollNo}`
//     }
// }

// var std = new Student("jhon","123","sunday",true)
// var std1 = new Student("hello","432","monday",false)
// var std2 = new Student("ali","675","friday",true)

// console.log(std);
// // console.log(std1);
// // console.log(std2.userInfo());

// function Student(firstName,lastName){
//     this.firstName = firstName,
//     this.lastName = lastName
//     // this.fullName = function (){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }

// Student.prototype.fullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

// var stdName = new Student("ali","raza")
// var stdName1 = new Student("raza","khan")

// console.log("price" in stdName);

// var mobiles = [
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "mongo",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
//   {
//     name: "apple",
//     color: ["red", "green", "white"],
//     model: "16pro",
//     price: 120,
//     isAvailable: true,
//     getDetail: function () {
//       return `${mobile.name} ${mobile.price}`;
//     },
//     isObj: {
//       type: "xyz",
//     },
//   },
// ];

// example 01:

var cars = {
  civic: {
    model_2022: {
      img: "",
      model: 2029,
      color: "red",
      price: 300,
    },
    model_2010: {
      img: "",
      model: 2029,
      color: "red",
      price: 300,
    },
  },
  alto: {
    model_2011: {
      img: "",
      model: 2029,
      color: "red",
      price: 300,
    },
  },
  mehran: {
    model_2012: {
      img: "",
      model: 2029,
      color: "red",
      price: 300,
    },
  },
  truck: {
    model_2013: {
      img: "",
      model: 2029,
      color: "red",
      price: 300,
    },
  },
};

// example: 02
// var cars = {
//   civic: {
//     img: "",
//     model: 2029,
//     color: "red",
//     price: 300,
//   },
//   alto: {
//     img: "",
//     model: 2029,
//     color: "red",
//     price: 300,
//   },
//   mehran: {
//     img: "",
//     model: 2029,
//     color: "red",
//     price: 300,
//   },
//   truck: {
//     img: "",
//     model: 2029,
//     color: "red",
//     price: 300,
//   },
// };

for (var abc in cars) {
  // console.log(cars[abc]);
  for (var xyz in cars[abc]) {
    console.log(cars[abc][xyz]);
  }
}



//  CREATE OBJECT FORMAT
var mobiles = {
    apple: {
      iphone_12: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
      iphone_13: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
      iphone_14: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
    },
    samsung: {
      samsung_12: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
      samsung_13: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
      samsung_14: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
    },
    infinex: {
      infinex_12: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
      infinex_13: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
      infinex_14: {
        img: "",
        screen: 560,
        ram: "64GB",
        color: ["red", "green", "blue"],
      },
    },
  };
