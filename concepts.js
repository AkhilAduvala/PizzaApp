"use strict";
//Premitive data types: string, number, boolean
let myName = "Bob";
let numberOfWheels = 4;
let isStudent = true;
let ages = [12, 25, 36, 54];
let address1 = {
    street: "Pathak Street",
    city: "Warangal",
    country: "India"
};
let address2 = {
    street: "4th Block",
    city: "Irving",
    country: "USA"
};
let person1 = {
    name: "Akhil",
    age: 25,
    isStudent: true,
    //address: address1
};
let person2 = {
    name: "AkHi",
    age: 26,
    isStudent: true,
    address: address2
};
let persons = [person1, person2];
// same as above one
// let persons: Array<Person> = [person1, person2];
console.log(`Here are the student details: ${person1.name} & ${person2.name}`);
