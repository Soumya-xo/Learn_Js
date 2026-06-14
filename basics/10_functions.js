function sayMyname(){
    console.log("My name is Soumya");
}

sayMyname(); // Function call or Function invocation

function addTwoNumbers(num1, num2){       //these are the parameters of the function
    console.log(num1 + num2);
}
addTwoNumbers(5, 10); // Function call or Function invocation with arguments

function addTwoNumbers2(num1, num2){
    result = num1 + num2;  
    return result
}     
const sum = addTwoNumbers2(5, 10); 
console.log(sum); // Function call or Function invocation with arguments and return value


// function userName(username){
//     return  `My name is ${username}`
// }
// console.log(userName("Soumya"))

// function userName(username = "Sam"){
//     return  `My name is ${username}`
// }
// console.log(userName())

function userName(username){
    if(username === undefined){
        console.log("Please provide a username");
        return
    }    
    return  `My name is ${username}`
}
console.log(userName())


function cartPrices(...prices){  //Rest operator is used to pass an indefinite number of arguments as an array
    return prices
}
console.log(cartPrices(100, 200, 300, 400, 500))




const user = {
    firstName: "Soumya",
    lastName: "Nayak",
}

function fullname(userName){
    return `My full name is ${userName.firstName} ${userName.lastName}`
}
console.log(fullname(user))  //passing object as an argument to a function


const myArray = [1, 2, 3, 4, 5]
 function getArray(arr){
    return arr[2]
 }
 //console.log(getArray(myArray))  //passing array as an argument to a function
 console.log(getArray([10, 20, 30, 40, 50]))  //passing array as an argument to a function