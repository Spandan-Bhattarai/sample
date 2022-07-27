//common js module
//writing "module":commonjs
// const { Console } = require("console");
const fs=require("fs")

//ES6 module system
// writing  "type":module in package.json
// import fs from "fs"

//asynchornous function, it requires callback
fs.writeFile("custom.txt", "random string", 
    (err, data) => {
        if (err) console.log({ err });
        console.log({ data });
    }
);

console.log(222);//test to see which function executes prior to which one
//synchronous functon:this one doesn't require callbacks
let status = fs.writeFileSync("custom2.txt", "adsfasdf");

console.log({ status });

console.log(333);//test to see which function executes prior to which one
