// ===============================
// TypeScript with DOM Manipulation
// ===============================
var input1 = document.getElementById("num1");
// ! ensures the element exists
// as HTMLInputElement tells TypeScript it's an input field
var input2 = document.getElementById("num2");
var button = document.getElementById("btn");
// Function to add two numbers
var add = function (val1, val2) {
    return val1 + val2;
};
// Event listener for button click
button.addEventListener('click', function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal, +secondVal)); // Converts string input to numbers
});
// ===============================
// Basic Types of TypeScript
// ===============================
// number: number  -> 5, 2.3, -8, -9 
// string: string  -> "Apple", "5"
// boolean: boolean -> true, false
// ===============================
// Arrays in TypeScript
// ===============================
// Pattern: let variableName: typeof[] = array
var fruits = ["Apple", "Orange"];
console.log(fruits);
// ===============================
// Type Annotations & Inference
// ===============================
var age = 34;
var userName = "Rashid";
var isActive = false;
// Type Inference (TypeScript assigns default types)
var inferredAge = 34; // Automatically assigned number
// inferredAge = "thirty four"; ❌ Error: Type mismatch
var inferredUserName = "Rashid";
var inferredIsActive = false;
// ===============================
// Interfaces (Previously Type Aliases)
// ===============================
// Example: Defining a student object
var student = {
    stdName: "Smith",
    age: 16,
    rollNo: 123,
    hobbies: ["sports", "coding"]
};
// student.email = "smith@gmail.com"; // ❌ Error: email is not defined
// Using Explicit Object Definition
var studentObj = {
    stdName: "Smith",
    age: 16,
    rollNo: 123,
    hobbies: ["sports", "coding"],
    email: ""
};
studentObj.email = "smith@gmail.com";
var studentRecord = {
    stdName: "Smith",
    age: 16,
    rollNo: 123,
    hobbies: ["sports", "coding"],
    email: "smith@gmail.com"
};
console.log(studentRecord);
// ===============================
// Tuples in TypeScript (Fixed-Length Array)
// ===============================
var user = [
    0, "Admin", 1, "User", true
];
console.log(user);
// ===============================
// Union & Intersection Types
// ===============================
// ✅ Union Type: Allowing multiple types
var userIdentity;
userIdentity = "Ali"; // ✅ Valid
userIdentity = 123; // ✅ Valid
userIdentity = false; // ✅ Valid
// Merging Person & Info interfaces
var completeUserInfo = {
    name: "Rana Rashid",
    age: 30,
    city: "Lahore",
    country: "Pakistan"
};
console.log(completeUserInfo);


