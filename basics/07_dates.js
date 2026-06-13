let myDate = new Date()

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let customDate = new Date(2003,11,1,2,10)      //in JS months start from 0-11(0->jan--11->dec)
console.log(customDate.toLocaleString());
console.log(customDate.toDateString());

let customDate2 = new Date("12-01-2003")   
console.log(customDate2.toDateString());

