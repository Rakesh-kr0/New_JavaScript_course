//there are three types od scope//
// 1.var
// 2. let
// 3.const
// * var is a gloable scope
// * let and const are block scope //
// in let we can reassine  the value 
// in const we can not reassine the value

// var c =300
let a = 300
if(true){
    let a =10;
    const b =20;
    console.log("INNER:",a);

}

const array=[]
for(let i=0;i <array.length;i++){
    const element  = [array[i]];
}
console.log(a);
// console.log(b);
// console.log(c);