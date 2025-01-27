"use strict";

let birthYear = prompt (`Please enter your birth year`);

let birthMonth = prompt (`Please enter your birth month (as a number)`);
let birthDay = prompt (`Please enter your birth day`);

let year = new Date().getFullYear();

let month = new Date().getMonth() + 1;
let day = new Date().getDate();

let age = year - parseInt(birthYear);

console.log(`day: ${day}`);
console.log(`birthDay: ${birthDay}`);

if (month - birthMonth < 0 || (month - birthMonth === 0 && day < birthDay)) {
    age -= 1;
}

console.log(`Your age is ${age}`);