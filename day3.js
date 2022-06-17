let num1 = 1
let num2 = 2
let num3 = 3
let str = "1"
console.log(num1 == num2);
console.log(num1 == str);   //only the values needs to be the same, regardles of datatype
console.log(num1 === str);
console.log(num1 === num2); //both datatype and value needs to be same
console.log(num1<num2);
console.log(parseInt(num1)+parseInt(str));
console.log(num1+str);
console.log(typeof(str));

if({}){
    console.log('TRue');
}else{
    console.log('false');
}


if(""){
    console.log('TRue');
}else{
    console.log('false');
}

if("abc"){
    console.log('TRue');
}else{
    console.log('false');
}

// falsy values
// - false
// - undefined
// - null 
// - 0
// - empty string ("")
// - NaN

num1 = 5;
 if(num1==0)
 {

 }
 else if(num1==1)
 {

 }
 else{
    console.log("hello")
 }


//                 switch case
 console.log("SWitch Case statement")
 num1=2
 switch(num1)
 {
    case 0:
        console.log("first case");
        break;
    case 2:
        console.log("second case");
        break;
    default:
        console.log("The options are only this much")
 }

 //why var isn't used and var/let
 var n1 = 1
 let n2 = 2
 if(true){
    var n1 = 1111
    let n2 = 2222
 }
 console.log(n1, n2);


 //function

var i=3
 function sum()
 {
    console.log(i);
    if (i!=0) {
        --i
        sum()
    }
    return i    
 }
 i = sum() //function call
 console.log(i);