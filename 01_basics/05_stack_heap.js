// stack (primitive datatype), heap(non-primitive datatype)

/////////////////////////Primitive Datatype//////////////////////////
let mycollegeName= "pce purnea";
let anotherName = mycollegeName;     
anotherName ="purnea college of engineering purnea";
console.log(anotherName); //=> purnea college of engineering purnea//
console.log(mycollegeName); //=> pce purnea//


///////////////////////////(non-primitive Data type///////////////////

let userOne = {
    email: "rakeshsingh@gmail.com",
    upi: "upi@rpl"

}
let userTwo= userOne;
userTwo.email= "rakeshkr@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

