// printing in js 
console.log("You gonna nail it");

// variables in js 
let num = 10; // number
console.log(num);
let char = 'abc'; // character
console.log(char);
let str = 'you gonna master js';
console.log(str); // string
let bool = true;  //boolen
console.log(bool);

// loops
for(let i=1;i<=5;i++){
    console.log(i);
}

let j = 1;
while(j<=5){
    console.log(j);
    j++;
}

//is prime 
let n = 34935;
let isPrime = true;

for(let i=2;i*i<=n;i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}