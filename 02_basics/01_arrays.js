//array

const myArry = [0,1,2,3,4,5];
const myHeroes=["ram","krishna","hanuman"];

const myArr2=new Array(1,2,3,4,5);
console.log(myArry[0])


//////////////Array method///////////////////////


myArry.push(6);
myArry.push(7);
myArry.pop();
console.log(myArry);

myArry.unshift(9);
myArry.shift();

console.log(myArry.includes(9));
console.log(myArry.indexOf(3));

const newArry =myArry.join()

console.log(myArry);
console.log(newArry);


//slice ,splice///////

console.log("A", myArry);
const myn1 = myArry.slice(1,3);

console.log(myn1);
console.log("A",myArry);


