const name = "Rakesh";
const repoCount=50;

console.log(name+repoCount+" ")///this is not a good code

console.log(`hello my name is ${name} and my total repoCount is ${repoCount}`);//This is good code
const gameName = new String("Rakesh-kr")//new way to define strings//
console.log(gameName[0])//find index number
console.log(gameName.__proto__);//defined object

console.log(gameName.length)// length of the object
console.log(gameName.toUpperCase());// this method is to change uppercase//
console.log(gameName.charAt(2));//To find which character is on the second number//
console.log(gameName.indexOf("t"))// to get index numberof character//

const newString = gameName.substring(0,4);//provide a new string 
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);//=>ake

const newStringOne = "  Rakesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());//this method is trim all the space

const url = "https://rakeshkr.com/rakesh%20singh"
console.log("%20","-");//

console.log(url.includes("sunder"));//this method is to check present in above url (if it is present then the result is "yes" else the result is "false"//
