// ===============================
// TypeScript with DOM Manipulation
// ===============================

let input1 = document.getElementById("num1")! as HTMLInputElement;
// ! ensures the element exists
// as HTMLInputElement tells TypeScript it's an input field

let input2 = document.getElementById("num2")! as HTMLInputElement;
let button = document.getElementById("btn")!;

// Function to add two numbers
let add = function (val1: number, val2: number) {
    return val1 + val2;
};

// Event listener for button click
button.addEventListener('click', function () {
    let firstVal = input1.value;
    let secondVal = input2.value;
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
let fruits: string[] = ["Apple", "Orange"];
console.log(fruits);

// ===============================
// Type Annotations & Inference
// ===============================

let age: number = 34;
let userName: string = "Rashid";
let isActive: boolean = false;

// Type Inference (TypeScript assigns default types)
let inferredAge = 34; // Automatically assigned number
// inferredAge = "thirty four"; ❌ Error: Type mismatch

let inferredUserName = "Rashid";
let inferredIsActive = false;

// ===============================
// Interfaces (Previously Type Aliases)
// ===============================

// Example: Defining a student object
let student = {
    stdName: "Smith",
    age: 16,
    rollNo: 123,
    hobbies: ["sports", "coding"]
};

// student.email = "smith@gmail.com"; // ❌ Error: email is not defined

// Using Explicit Object Definition
let studentObj: {
    stdName: string;
    age: number;
    rollNo: number;
    hobbies: string[];
    email: string;
} = {
    stdName: "Smith",
    age: 16,
    rollNo: 123,
    hobbies: ["sports", "coding"],
    email: ""
};

studentObj.email = "smith@gmail.com";

// ===============================
// Using Interface Instead of Type Alias
// ===============================

interface StudentData {
    stdName: string;
    age: number;
    rollNo: number;
    hobbies: string[];
    email: string;
}

let studentRecord: StudentData = {
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

let user: [number, string, number, string, boolean] = [
    0, "Admin", 1, "User", true
];

console.log(user);

// ===============================
// Union & Intersection Types
// ===============================

// ✅ Union Type: Allowing multiple types
let userIdentity: string | number | boolean;
userIdentity = "Ali";   // ✅ Valid
userIdentity = 123;     // ✅ Valid
userIdentity = false;   // ✅ Valid

// ===============================
// Intersection Type (Combining Two Interfaces)
// ===============================

interface Person {
    name: string;
    age: number;
}

interface Info {
    city: string;
    country: string;
}

// Merging Person & Info interfaces
let completeUserInfo: Person & Info = {
    name: "Rana Rashid",
    age: 30,
    city: "Lahore",
    country: "Pakistan"
};

console.log(completeUserInfo);