let myNumbers =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) => num +10)  //add 10 in every element
 newNums = myNumbers.map( (num) => {
    return num +10                // when we open scope then we used return keword
})

// console.log(newNums);
//////////////////////////////////////////////////////////////
    // when we used 2 -3 method in a same object then it is called chaining method
 newNums = myNumbers
                .map( (num)=> num *10)
                .map( (num)=> num +1)
                .filter( (num)=> num >=40)
            console.log(newNums);