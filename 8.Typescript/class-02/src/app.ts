const sub = (a: number, b: number): number => {
  return a - b;
};

console.log(sub(5,3))

const concat = (x: string, y: string): string => {
  return x + y
}

console.log(concat("hello! ","welcome"))



class Student {
  name: string;
  rollNo: number;
  age: number;
    constructor(n: string, r: number, a: number){
      this.name = n;
      this.rollNo = r;
      this.age = r;
  }
}

const student1 = new Student("ahmed", 123,2)
const student2 = new Student("ahmed", 123,2)
const student3 = new Student("ahmed", 123,2)
const student4 = new Student("ahmed", 123,2)
const student5 = new Student("ahmed", 123,2)
const student6 = new Student("ahmed", 123,2)




const abc = (value: string | number)=>{
  if(typeof value === "string"){
    console.log("checking type-->",value)
  }else{
    console.log("error-->", value)
  }
}

abc(123)


@REM enums gender {
@REM   male = "Male",
@REM   female = "Female",
@REM }

@REM if(male === gender.male){

@REM }


@REM const getGender = (value)=> {
@REM   if(value === "male"){
@REM     console.log("ye ek banda hai")
@REM   }else if(value === "female"){
@REM     console.log("ye ek bandi hai")
@REM   }else{
@REM     console.log("ye koi or hai...")
    
@REM   }
@REM }

@REM getGender("Male")


enums Roles {
  admin = "admin"
  user = "user"
  guest = "guest"
}

const getRoles = (value)=> {
  if(value === Roles.admin || value === uppeercase(Roles.admin)){
    console.log("ye ek banda hai")
  }else if(value === Roles.user){
    console.log("ye ek banda hai")
  }else{
    console.log("ye koi or hai...") 
  }
}

getRoles("Male")


