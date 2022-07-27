// console.log(process.argv)
console.log(1111);

console.log(__filename);
console.log(__dirname);

function printHello() 
 {
    console.log( "Hello, World!");
 }
 
// Now call above function after 2 seconds
var timeoutObj = setTimeout(printHello, 2000);

// process.exit();   //ends the code here
console.log(22222)

//core modules : file modules,path module
//local module
// third-party module

// use ../ to access the parent directory of 
// the currently open directory
const fs=require("fs")

const path = require("path")

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.join("custom",__filename));
console.log(path.parse(__filename));