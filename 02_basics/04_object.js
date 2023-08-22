// const facebookUser = new Object(); //single term object

const facebookUser ={};//non single term object (basics object)

facebookUser.id = "123poi";
facebookUser.name="Rom";
facebookUser.isLoggedIn =false;

console.log(facebookUser);

//object inside object// nasted object//

const regularUser={
    fullName:{
        userFullName:{
            firstName:"rakesh",
            lastName:"kumar"
        }
    }
}

// access the object through . notations
// console.log(regularUser.fullName.userFullName.firstName);


//  onject value marge 

const obj1= {1:"a",2:"b"};
const obj2={3:"c",4:"d"};

// const obj3={obj1,obj2} //this is not work
// const obj3=Object.assign({},obj1,obj2)  //({}<- target)   (obj1,obj2 <- source)
// console.log(obj3);

const obj3={...obj1,...obj2}//spread oject//
console.log(obj3);

// when data come from data base

const users=[
    {},{
        id:1,
        email:"rk1@gmail.com"
    },
    {
        id:2,
        email:"rk2@gmail.com"
    },
    {
        id:3,
        email:"rk3@gmail.com"
    },
    {
        id:4,
        email:"rk4@gmail.com"
    }
]
users[1].email
console.log(facebookUser);
console.log(Object.keys(facebookUser));
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser));

console.log(facebookUser.hasOwnProperty('isLoggedIn'));
