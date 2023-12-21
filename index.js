// console.log("arsalan")

let isLogin = false;
let x3 = 16;  //assign

// '=' assign
// "=="  double equal to --> only check values 
// "==="  double equal to -->  check both value and its data types  

// condition       true                         false
// (x3 === '15')? console.log("HOME PAGE"): console.log("PLEASE LOGIN FIRST"); //both checked

// (x3 == '15')? console.log("HOME PAGE"): console.log("PLEASE LOGIN FIRST");  //value

let marks = 20;


// (marks<30)? console.log("Fail"): console.log("Pass");


//ways to create an objects



let user = new Object();  //{empty space}
   user.name = "suresh";
   user.class = 'B.tech'

//    console.log(student,user)

// console.log(student.age)

let student1 = {            //key : value
    name :"Arshu",
    age:25,
    mobile : 52879545
}

let student2 = {            //key : value
    name :"pawan",
    age:28,
    mobile : 2589658952
}

const students = [student1,student2,15,2896,70]; //array
console.log(students[1].name)