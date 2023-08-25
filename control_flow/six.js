const coding =["js","ruby","java","python","cpp"]

const values = coding.forEach((item) =>{
    // console.log(item)
    return item
})
// console.log(values)
// forEach not return any values

///////////////////////////////////////////////

const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNum = myNumbers.filter( (num) => num > 4)
const newNum = myNumbers.filter( (num) =>{  /// when we used {} then we used return keyword//
                                            /// when we open scope then we used return keyword//
    return num > 4
})   
// console.log(newNum);

///////////////////////////////
const newNum1 = []
myNumbers.forEach( (num)=>{
    if (num > 4) {
        newNum1.push(num)
    }
})
// console.log(newNum1)

///////////////////////////////////////////////
const books = [
    {title:'Book One',grnre:'fiction',publish:1981,edition:201},
    {title:'Book Two',grnre:'Non-fiction',publish:1992,edition:2008},
    {title:'Book Three',grnre:'History',publish:1999,edition:2007},
    {title:'Book Four',grnre:'Non-fiction',publish:1989,edition:2010},
    {title:'Book Five',grnre:'Science',publish:2009,edition:2014},
    {title:'Book Six',grnre:'fiction',publish:1987,edition:2010},
    {title:'Book Seven',grnre:'History',publish:1986,edition:1996},
    {title:'Book Eight',grnre:'Science',publish:2011,edition:2016},
    {title:'Book nine',grnre:'Non-fiction',publish:1981,edition:1989}
];

let userBooks = books.filter( (bk) => bk.grnre === 'History' )  //one method
 userBooks = books.filter( (bk) => {
    return bk.publish >= 2000  /// method =second ///this code has scope thatwhise we used return keyword
});

userBooks = books.filter ( (bk) =>{
    return bk.grnre === 'History' && bk.publish >=1995
})
console.log(userBooks);
