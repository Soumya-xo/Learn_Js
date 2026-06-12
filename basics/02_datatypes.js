"use strict"; //treat all js code as newer version


let name = "soumya" //string
let age = 23;   //number
let isValid = true    // boolean
let temperature = null // standalone value but contain nothing
let state;   // undefined

// You can use ";" or not in JS



// 2 types of  datatypes in js
// premitive datatypes => String, Number, Boolean,BigInt, symbol, null, undefined 

let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id == anotherId)    // we pass the same value in both symbol but still it is not same 


// (Reference)Non premitive datatypes => Array, Object Functions

const heros = ["shaktiman", "nagraj", "Dogesh"] //Array
let myObj = {
    name : "soumya",
    age : 23
}
const myFunction = function(){
    console.log("hello");
    }
console.log(typeof heros);



//---------------------------------//
//stack memory is used when we use premitive data types(uses copy)
//heap memory is used when we use non-premitive data types(uses references) 
//Explanation in chai aur (javascript lect 10)
