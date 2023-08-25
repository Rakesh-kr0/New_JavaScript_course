//[[],[],[],[],[],[]]
// [{,{},{},{},{},{},{}]

const arr = [1,2,3,4,5];
for (const num  of arr) {
    // console.log(num)
    
}

const  greeting ="hello World!"
for (const greet of greeting) {
    // console.log(greet)
}

///////////////////
// maps
// maps has unique value and those output has same ordered when enter the value
const map =new Map()
map.set('IND','india');
map.set("USA","united states of America")
map.set("FR","france")
// map.set('IND','india');//two Enteres are not allow


// console.log(map)//=> 
// output
//{
//     'IND','india',
//     "USA","united states of America",
//     "FR","france"


// }


// maps in side the loopfor array
// for of loop
for (const [key,value] of map) {
    console.log(key,":-",value);
}

/////////////////////////////////////

// maps in side the loop for object
//for in loop
 
const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
        
    }

///////////////////////////////////

    const programming =["js","rb","py","java","cpp"]
    for (const key in programming) {
    //   console.log(key)
    console.log(programming[key])
    }