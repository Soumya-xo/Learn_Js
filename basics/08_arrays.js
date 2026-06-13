const myArr = [1,2,3,4,5]

// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,"soumya",true, 5)     //Another way 
//In js we can store different types of values in Array



//-----------Array Methods----------//

// myArr.push(6)          //Added new element at end
// myArr.push(10)
// console.log(myArr);

// myArr.pop()               //delete element from end
// console.log(myArr);         

// myArr.unshift(8)              //Added element at front
// console.log(myArr);

// myArr.shift()
// console.log(myArr);         //delete front element

// console.log(myArr.includes(5));
// console.log(myArr2.indexOf(3));


// const myNewArr = myArr.slice(1,3)
// console.log(myNewArr);
// console.log(myArr);          //slice does not change original array

// const myNewArr2 = myArr.splice(1,3)     //splice changes original array
// console.log(myNewArr2);
// console.log(myArr);


const marvelHeroes = ["Ironman", "Thor", "Hulk", "Captain America"]
const dcHeroes = ["Batman", "Superman", "Wonder Woman"]

// const allHeroes = marvelHeroes.concat(dcHeroes)     //concat is used to merge two arrays
// console.log(allHeroes);

const allHeroes2 = [...marvelHeroes, ...dcHeroes]     //Another way to merge two arrays using spread operator
console.log(allHeroes2);

const numbers = [1,2,3,[4,5], 6, [8, [9,10]]]
console.log(numbers);
console.log(numbers.flat(2));
