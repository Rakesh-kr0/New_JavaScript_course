///////////////object literal///////////////

const JsUser ={
    name:"rakesh",
    age:24,
    [mysym]:"mykey1",
    location: "delhi",
    email: "rakeshkr@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mysym])


JsUser.email= "rakeshkr12@gmail.com";// change email//;
Object.freeze(JsUser)//when we use freeze then we cannot change any this in the code
JsUser.email= "sonukr@gmail.com"// not change becouse of freeze
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");

}
// console.log(JsUser.greeting);
JsUser.greeting= function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)// this is right way to print 

}
console.log(JsUser.greeting);