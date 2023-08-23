//////////////Switch statement//////////////////////


const month =3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

////////////////Truthy and falsy value/////////////

const userEmail = "hr@gmai.ai"
if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}


// flasy Value//
// flase ,0,-0,BigInt 0n,"", null, undefined,NaN


// truthy Value//
//"0","false"," ",{},[],function(){}

// check falsy and truthy value in arry

const arr=[]
if (arr.length===0) {
    console.log("Array is empty")
    
}
// check falsy and truthy value in object

const emptyObj={}
if(Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
    
}
//false==0 //=>true,
// false==""//=>true,
// 0 == ""//=>true


///////////////////////////////////////////////////////////////
//Nullish Coalescing Operator  (??): null ,undefined

let val1;
val1=5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//////////////////////////////////////////////
// Terniary Operator//
// condition ? true :false
const iceTeaPrice = 100
iceTeaPrice <=80?console.log("less than 80"):console.log("more than 80")

