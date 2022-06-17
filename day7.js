// [a, b, ...rest] = [1, 2, 3, 4, 5];

// console.log(a, b);
// console.log(rest);
// let obj = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : 4
// }
// let {a, b, ...rest} = obj
// console.log(a, b, rest);

// let arr = [1, 2, 3, 4]
// console.log(arr.indexOf(3));
// console.log(arr.findIndex(el => el > 2));

// console.log(arr.includes(5));




// CALLBACK
//  => a function passed as variable, which is meant to be executed after it's preceeding task is compleed

function callback() {
    console.log("I am a callback");
}
setTimeout(callback, 1000) //1000miliseconds or 1 second which is time for loading
setTimeout(callback, 0);
console.log("2");

setTimeout(() => {
    console.log("I am a callback part 2")
}, 2000);


// Promise
 // - pending
 // - resolve
 // - reject
let prm1 = new Promise((resolve, reject) => {
    if (true) {
        resolve(true)
    }
})

console.log(prm1)