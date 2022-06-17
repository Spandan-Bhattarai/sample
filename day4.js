// DRY => DONOT REPEAT YOURSELF

// // [[1,2],[3,4],[4,5]]
// let num1 = 1
// let num2 = 2
// let num3 = num1 + num2

// let num4 = 4;
// let num5 = 5;

// // function (<parameter>,<parameter>)
// function calculateSum(value1, value2) {
//     return value1 + value2;
//     console.log("222");
// }

// // call/execute the function sum
// // calculateSum(num4, num5)

// // calculateSum(<attribute>,<attribute>)
// let summed = calculateSum(1, 2);
// console.log({ summed });


// ARROW FUNCTION
// const calculateDiff = (value1, value2) => value1 - value2 // single line arrow function
// const calculateDiff = (value1, value2) => {
//     let value3 =  value1 - value2; 
//     return value3 // single line arrow function
// }

// let diff = calculateDiff(10,5)
// console.log({diff});


// FUNCTIONAL SOCPE

var num1 = 1;
let num2 = 2
const num3 = 3;

if (true) {
    // block scoped, 
    var num1 = 111 // global scoped variable
    let num2 = 211 // blocked scope variable // cannot be accessed outside the scope
    const num3 = 311 // blocked scope variable
}

function testScope() {
    // functional scoped, 
    var num1 = 1333333 // global scoped variable
    let num2 = 2333333 // blocked scope variable // cannot be accessed outside the scope
    const num3 = 3333333 // blocked scope variable
}

let testScope2 = () => {
    // functional scoped, 
    var num1 = 1333333 // global scoped variable
    let num2 = 2333333 // blocked scope variable // cannot be accessed outside the scope
    const num3 = 3333333 // blocked scope variable
    console.log({ num1 });
    console.log({ num2 });
    console.log({ num3 });

}


// testScope();
testScope2();
console.log({ num1 });
console.log({ num2 });
console.log({ num3 });


// passing by value vs pass by reference
// loop
