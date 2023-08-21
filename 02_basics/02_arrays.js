const marvel_heros= ["thor","ironman","spiderman"];
const dc_heros =["superman","flash","batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);

 const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const allNewHeros = [...marvel_heros,...dc_heros];
console.log(allNewHeros);

const another_array=[1,2,3[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Rakesh"))//=>flase
console.log(Array.from("Rakesh"))//=>convert to array

console.log(Array.from({name:"rakesh"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1,score2,score3,score4));