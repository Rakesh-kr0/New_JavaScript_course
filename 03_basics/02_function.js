function calculateCartPrice (...num1){//Rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));//[200,400,500,2000]//


const user = {
    username :"Rakesh",
    price :199
}
function handelObject(anyobject){
    console.log(`username:${anyobject.username} and price is ${anyobject.price}`);

}
handelObject(user)

/////////passing object in function///////

handelObject({
    username:"sam",
    price:399,
})

////////passing array in function////////////////

const myNewArray=[200,300,400,500,800,900 ];
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));//type one
console.log(returnSecondValue([200,300,400,500,800,900 ]));