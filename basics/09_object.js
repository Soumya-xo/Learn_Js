 
//  const mySym = Symbol("mySymbol");     //Symbol is a unique and immutable data type that can be used as a key for object properties
 
//  const JSUser = {
//     name: "Soumya",
//     age: 25,
//     "lastName": "Nayak",   //we can use string as key in object
//     email: "soumya@example.com",
//     [mySym]: "mySymbolValue"            //in this way we can use symbol as key in object
//  }

//  console.log(JSUser.name); // Accessing object property using dot notation
//  console.log(JSUser["age"]); // Accessing object property using bracket notation(Best Practice)
//  console.log(JSUser[mySym]); // Accessing object property using symbol as key
//  console.log(JSUser.lastName); // Accessing object property using dot notation  

//  JSUser.age = 26; // Modifying object property
//  console.log(JSUser.age);

//  Object.freeze(JSUser); // Freezing the object to prevent further modifications
//  JSUser.age = 27; // Attempting to modify a frozen object property (will not work)
//  console.log(JSUser.age); // Output: 26


// JSUser.greetings = function(){
//     console.log("Hello")
// }
// console.log(JSUser.greetings());

// JSUser.greetings2 = function(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)   //this keyword refers to the current object
// }
// console.log(JSUser.greetings2());




// cont tinderUser = new Object();  //singleton object
//const tinderUser = {}        //non-singleton object
 
const regularUser = {
    email : "regular@example.com",
    fullName: {
        userFullName : {
            firstName : "Soumya",
            lastName : "Nayak"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b", 3: "c"}; 
const obj2 = {1: "a", 2: "b", 3: "c"};

// const obj3 = Object.assign({}, obj1, obj2);  //Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// console.log(obj3);

// const obj4 = {...obj1, ...obj2};  //Spread operator is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// console.log(obj4);
//BOth work Same

// console.log(Object.keys(regularUser)); //Object.keys() method is used to get the keys of an object. It returns an array of keys.
// console.log(Object.values(regularUser)); //Object.values() method is used to get the values of an object. It returns an array of values.
// console.log(Object.entries(regularUser)); //Object.entries() method is used to get the key-value pairs of an object. It returns an array of arrays. 




//-------------------Object Destructuring------------------??
const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Soumya"
}

const {courseInstructor: instructor} = course;  
console.log(instructor);   // next time we don't have to write course.courseInstructor, we can directly use instructor variable to access the value of courseInstructor property of course object. This is called object destructuring.


//------------------Json------------------??
// {
//     "name": "Soumya",
//     "age": 25,
//     "email": "soumya@example.com"           //This is the format of JSON  API
// }

//It is also in ARRAY format
[
    {},
    {},
    {}
]        //like this 