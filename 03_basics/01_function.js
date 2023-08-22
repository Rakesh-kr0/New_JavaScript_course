///////////////function//////////////////



///////////////simple type////////////////////
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()
// sayMyName()
// sayMyName()
// sayMyName()

////////////////////function declerations///////////////////////

function addTwoNumbers(num1,num2){// [num1&num2 are parameters of functions]
    console.log(num1+num2);
}
 const result= addTwoNumbers(3,4);  /// [3,4 are argunment]
console.log("Result:",result); //=>//


function addTwoNumbers(number1,number2){
    let result1=number1+number2
    return result1
}
const result1 =addTwoNumbers(3,7)
// const result=addTwoNumbers(3,5)

////////////////////////////////////////////////

function loginUserMessage(username = "sam"){// default value "sam"//
    // if(username===undefined){// simpe code
        if(!username){//profactional code
        console.log("please enter user name")
        return
    }
    return `${username} just logged in`
}
loginUserMessage("rakesh")//rightnow function are exatuate but not run becoucs no any print codes are in function//
console.log(loginUserMessage())// output is undefined