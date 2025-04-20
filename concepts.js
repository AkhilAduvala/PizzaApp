"use strict";
//Premitive data types: string, number, boolean
let myName = "Bob";
const name1 = "Bob"; // name1 is now type of "Bob", but not the generic string
//let name2: "Bob" = "Bob" //same as the above here name2 is of type "Bob"
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
let userRole = "admin";
let user1 = {
    userName: "Akhil",
    role: "Customer" //if we use other than mentioned it will give error
};
