// for

for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(element);
    
}
// console.log(element);// this code is not excuted becouse it is outside the local scope
///
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best number")
    }
    // console.log(element);

}



////loop inside loop///////


for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value : ${i}`)
for(let j =0;j<=10;j++){
    // console.log(`inner loop value : ${j} and inner value ${i}`);
    //  console.log(i + '*' +j + '=' +i*j);

}    
}

///////////array inside loop/////////

let myArray=["flash","batman","superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// loop keywords///

// break and continue 

for (let index = 1; index <=20; index++) {
if (index ==5) {
    console.log("detected 5")
    break;
}    
console.log(`value of i is ${index}`);
}

///////////////////

for (let index = 1; index <=20; index++) {
    if (index ==5) {
        console.log("detected 5")
        continue;
    }    
    console.log(`value of i is ${index}`);
    }