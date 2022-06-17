// pass by value and pass by refrence
function inte(){
    let a = 1
    let b = a
    console.log(a, b);
}
inte()
function str(){
    let a = "hello"
    let b = a
    console.log(a, b);
}
str()
function nulll(){
    let a = null
    let b = a
    console.log(a, b);
}
nulll()
let obj1 = {a:1, b:2}
let obj2 = obj1
console.log(obj1, ",", obj2)
obj2.a = "string"
console.log(obj1, ",", obj2)

//ternary operator
if(true)
{
    console.log("is true");
}
else{
    console.log("is false");
}
console.log(true? (false? "yes" : "not this time"):no);
console.log(true? "yes" : "no");


//loop
let i
for(i = 0; i<= 10; i++)
{
    console.log(i);
    if (i==5) break;
}
i=0
while(i<=10){
    console.log(i++);
}
i=0
do{
    console.log(i++)
}while(i<=10)


// let arr = [1, 2, 3]
// let arr2 = arr;
// console.log(arr, ",", arr2)
// arr2[2] = "string"
// console.log(arr, ",", arr2);


// arr = [1, 2, 3]
// check(arr)
// function check(arr)
// {
//     let arr2
//     arr2[3]="changed"
// }
// console.log(arr, ",", arr2)

// arr = [1, 2, 3]
// check(arr)
// function check(arr)
// {
//     let arr2
//     arr2[3]="changed"
// }
// console.log(arr, ",", arr2)




//how does rest work in js
//array.foris

let arr=[1, 2, 3, 4, 5]