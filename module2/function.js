// function without parameter and return type 
function hello(){
    console.log("you gonna nail js");
}
hello();

// function with parameters

function sum(a,b){
    let add = a + b ;
    console.log("add of two num is " + add);
}

sum(5,6);
//  function with return type 

function multiply(num1, num2){
    return num1 * num2;
}

let ans = multiply(5,10);
console.log(ans);

// functions are the first class citizen in javascript because it can be store in variables

let d = function minus(num1, num2){
            return num1 - num2;
        }

        console.log(d(3,2));

// IIFE - Immediately invoked Function expression

(function iife(){
    console.log("IIFE");
})();

// IIFE with parameters 

(function adiv(num1,num2){
    console.log(num1/num2);
})(12,4);