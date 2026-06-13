const name = "soumya"
let repoCount = 50

// console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("CallOfDutyMobile")

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName[2]);            //return character at index 2  
// console.log(gameName.charAt(1));     //do same
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,2)
const anotherString = gameName.slice(-14,8) // use this when you want to use negative number

// console.log(newString);
// console.log(anotherString);

const newString2 = new String("  codm")
console.log(newString2.trim());

console.log(gameName.replace('C','B'));
console.log(gameName.includes("Duty"));


