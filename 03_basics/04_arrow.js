////////////////This keywords////////////////

const user={
    username:"rakesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);//this keyword refers to current context
        console.log(this)//=>
    }

}
user.welcomeMessage();
user.username= "ram";
user.welcomeMessage()

console.log(this)//=>empaty object and when we run in browrer the output will be window//


function chai(){
    let username="ram"
    console.log(this.username);// this keyword work only in object//
    chai()
}


///////////////////////////////////arrow function////////////////////////////////////////

        const chai=() =>{        //ex=1
            let username="Rakesh";
            console.log(this.username);
        }
        chai()

        // syntax of arrow function 1.- () => { }
        // syntax of arrow function 2.- const addTwo = () => { }
        // syntax of arrow function 3.- const addOne(num1,num2) => { }//here num1 and num2 are parameters


        // ex-02 basics arrow function

        const addTwo=(num1,num2) => {
            return num1+num2;      
        }

        console.log(addTwo(3,4))// =>7

        // ex-03 implecite return

        const addTwo1 = (num1,num2) => num1+num2;
        // const addTwo1 = (num1,num2) => (num1+num2); // 

        console.log(addTwo(3,4))
        