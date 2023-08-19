let value = 3;
let negvalue=-value
console.log(negvalue) //=> -3

///////oprations example////////////

console.log(2+2) //add
console.log(2-2) //sub
console.log(2*2) // mult
console.log(2**3) // power
console.log(2/2) //div
console.log(2%2) //remender

//////////////////////

let str1= "hello";
let str2=" Rakesh";
str3=str1+str2;
console.log(str3)

console.log(1+"2")//=>12
console.log("1"+2)//=>12
console.log("1"+2 +2)//=>122
console.log(1+2+"2")//=>32

console.log(2+3*6/8-7)// this type of codes are not prefer 
console.log(+true); // =>1 //this type of codes are not prefer 
console.log(+""); // =>0// this type of codes are not prefer 

let gameCounter=100;
gameCounter++;
console.log(gameCounter);//=>101//
++gameCounter;
console.log(gameCounter);//=>101//



///////////////// Prefix increment/////////////////////

// let x = 3;
// const y = ++x;

// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n


/////////////////////Postfix increment////////////////////////////////

// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n



//////////////////////////////////////////////////////////////

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
