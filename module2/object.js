 let obj = {}; //empty object
 console.log(obj);

 let batman ={
     Name : "Bruce",
     age : 32,
     phoneno : 7865341209,
     Lastname : 'Wayne'
 };
 console.log(batman);

 let Vigilante ={
    Name : "Bruce",
    age : 32,
    phoneno : 7865341209,
    Lastname : 'Wayne',
    friends : ['robin','Selena','jim gorden','alfred'],
    address : {
        City : "Gotham",
        Address : "Wayne tower"
    },
    Say : function(){
        console.log("I am vengence");
    }
}; 
console.log(Vigilante);

// Print name 
console.log(Vigilante.Name);
//print array
console.log(Vigilante.friends);
//print a selected array number
console.log(Vigilante.friends[3]);
//print city form address
console.log(Vigilante.address.City);
//print function if there is no return
Vigilante.Say();
//print function if there is something to return
console.log(Vigilante.Say());

// Add a new key 
batman.movies = ['dark knight','dark knight returns'];
console.log(batman);