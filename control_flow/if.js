///////////////if///////////////

// syntax of if statement
// if (condition){  // if condition is true then code is run otherwise code not exucated
//     ////code
// }
///////////
if(true){
    // console.log("condition is true");//output=> condition is true
}

////////////////////////////

const isUserLoggedIn = true
if(isUserLoggedIn){
    // console.log("useer loging ")
}
////////////////////
// 
// <,>,<=,>=,==,!=,=== //these are conditional operator
/////////////simple example///////////////////
if(3!=2){
    // console.log("executed");//=> executed
}

/////

const score = 200;
if(score>100){
    const power = "fly";
    // console.log(`user power: ${power}`)
}
// console.log(`user power:${power}`)// =>globle scope

///////////////////////////////
const balance = 1000;
// if(balance > 500) console.log("test");//impliait scope

if(balance >4000){
    console.log("less than 500");
}else if(balance < 700){
    console.log("less than 750");
}
else{console.log("less than 2000")
}
///////////
// AND OPERATOR/////
const isLoggedIn = true
const debitCard = true
if(isLoggedIn && debitCard){
    console.log("Allow to buy course");
}

/////////////////
// OR POERATOR///
const loggedFromGoogle=true
const loggedFromEmail = false
if(loggedFromGoogle||loggedFromGoogle){
    console.log("userLoggedIn")
}