let myDate = new Date()/// object 

console.log(myDate.toDateString());//=> todat=> Mon Aug 21 2023//
console.log(myDate.toString());//=> Mon Aug 21 2023 03:02:37 GMT+0000 (Coordinated Universal Time);
console.log(myDate.toLocaleString());//8/21/2023, 3:04:17 AM;//
console.log(typeof myDate);// object type//

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toLocaleString());// => 1/23/2023, 12:00:00 AM

let myCreatedDate1 = new Date(2023,0,23,5,5);
console.log(myCreatedDate1.toLocaleString());// =>1/23/2023, 5:05:00 AM//

let myCreatedDate3 = new Date("01-14-2023");
console.log(myCreatedDate3);//

let mytimeSstamp = Date.now();
console.log(mytimeSstamp);//
console.log(myCreatedDate.getTime());//
console.log(Math.floor(Date.now()/1000));//

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()}and the time`
newDate.toDateString("default",{
    weekday:"long"
})
