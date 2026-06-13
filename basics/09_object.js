 
 const mySym = Symbol("mySymbol");     //Symbol is a unique and immutable data type that can be used as a key for object properties
 
 const JSUser = {
    name: "Soumya",
    age: 25,
    "lastName": "Nayak",   //we can use string as key in object
    email: "soumya@example.com",
    [mySym]: "mySymbolValue"            //in this way we can use symbol as key in object
 }

//  console.log(JSUser.name); // Accessing object property using dot notation
//  console.log(JSUser["age"]); // Accessing object property using bracket notation(Best Practice)
//  console.log(JSUser[mySym]); // Accessing object property using symbol as key
//  console.log(JSUser.lastName); // Accessing object property using dot notation  

//  JSUser.age = 26; // Modifying object property
//  console.log(JSUser.age);

//  Object.freeze(JSUser); // Freezing the object to prevent further modifications
//  JSUser.age = 27; // Attempting to modify a frozen object property (will not work)
//  console.log(JSUser.age); // Output: 26


JSUser.greetings = function(){
    console.log("Hello")
}
console.log(JSUser.greetings());

JSUser.greetings2 = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)   //this keyword refers to the current object
}
console.log(JSUser.greetings2());