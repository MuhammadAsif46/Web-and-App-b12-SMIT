"use strict";
const sub = (a, b) => {
    return a - b;
};
console.log(sub(5, 3));
const concat = (x, y) => {
    return x + y;
};
console.log(concat("hello! ", "welcome"));
class Student {
    constructor(n, r, a) {
        this.name = n;
        this.rollNo = r;
        this.age = r;
    }
}
const student1 = new Student("ahmed", 123, 2);
const student2 = new Student("ahmed", 123, 2);
const student3 = new Student("ahmed", 123, 2);
const student4 = new Student("ahmed", 123, 2);
const student5 = new Student("ahmed", 123, 2);
const student6 = new Student("ahmed", 123, 2);
const abc = (value) => {
    if (typeof value === "string") {
        console.log("checking type-->", value);
    }
    else {
        console.log("error-->", value);
    }
};
abc(123);
enums;
gender;
{
    male = "Male",
    // ;
    female = "Female",
    // ;
}
if (male === gender.male) {
}
const getGender = (value) => {
    if (value === "male") {
        console.log("ye ek banda hai");
    }
    else if (value === "female") {
        console.log("ye ek bandi hai");
    }
    else {
        console.log("ye koi or hai...");
    }
};
getGender("Male");
enums;
Roles;
{
    admin = "admin";
    user = "user";
    guest = "guest";
}
const getRoles = (value) => {
    if (value === Roles.admin || value === uppeercase(Roles.admin)) {
        console.log("ye ek banda hai");
    }
    else if (value === Roles.user) {
        console.log("ye ek banda hai");
    }
    else {
        console.log("ye koi or hai...");
    }
};
getRoles("Male");
//# sourceMappingURL=app.js.map





// ============================== // Functions in TypeScript // ============================== // Function to subtract two numbers const sub = (a: number, b: number): number => { return a - b; }; console.log(sub(9, 5)); // Output: 4 // Function to concatenate two strings const concat = function (x: string, y: string): string { return x + y; }; console.log(concat("Hello!", " World")); // Output: "Hello! World" // ============================== // TypeScript Compiler (tsc) Configurations // ============================== // To initialize TypeScript config file, use: // tsc --init // Important configuration options: // 1. "target": Sets the ECMAScript version (e.g., "ES6", "ESNext"). // 2. "rootDir": Defines the root folder containing TypeScript files. // 3. "outDir": Specifies the output directory for compiled JavaScript files. // 4. "sourceMap": Enables source map generation for debugging. // 5. Auto Compilation: Use `npx tsc --watch` to auto-compile on file changes. // ============================== // Classes in TypeScript // ============================== class Student { name: string; rollNo: number; age: number; constructor(n: string, r: number, a: number) { this.name = n; this.rollNo = r; this.age = a; } } // Creating Student Objects const Student1 = new Student("Rashid", 123, 25); const Student2 = new Student("Rana", 456, 75); console.log(Student2); // Output: Student { name: 'Rana', rollNo: 456, age: 75 } // ============================== // Type Guards in TypeScript // ============================== // Function to check if a value is a string const abc = (value: any) => { if (typeof value === "string") { console.log("Checking type -->", value); } else { console.log("Error -->", value); } }; abc("123"); // Output: Checking type --> 123 // ============================== // Enums in TypeScript // ============================== enum Gender { Male = "male", Female = "female", Other = "other", } // Function to check and log gender const gender = (value: string) => { const lowerValue = value.toLowerCase(); // Convert input to lowercase if (lowerValue === Gender.Male) { console.log("Male"); } else if (lowerValue === Gender.Female) { console.log("Female"); } else { console.log("Other"); } }; // Example Calls gender("MALE"); // Output: "Male" gender("female"); // Output: "Female" gender("OtHeR"); // Output: "Other" gender("random"); // Output: "Other" // ============================== // Role-Based Access Control using Enums // ============================== enum Role { Admin = "admin", User = "user", Guest = "guest", } // Function to check user role and log access level const checkRole = (value: string) => { const lowerValue = value.toLowerCase(); // Convert input to lowercase if (lowerValue === Role.Admin) { console.log("Welcome, Admin! You have full access."); } else if (lowerValue === Role.User) { console.log("Welcome, User! You have limited access."); } else if (lowerValue === Role.Guest) { console.log("Welcome, Guest! Please sign in for more features."); } else { console.log("Invalid role! Please select Admin, User, or Guest."); } }; // Example Calls checkRole("ADMIN"); // Output: "Welcome, Admin! You have full access." checkRole("user"); // Output: "Welcome, User! You have limited access." checkRole("Guest"); // Output: "Welcome, Guest! Please sign in for more features." checkRole("random"); // Output: "Invalid role! Please select Admin, User, or Guest."