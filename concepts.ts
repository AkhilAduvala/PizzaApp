//Premitive data types: string, number, boolean
let myName: string = "Bob";
let numberOfWheels: number = 4;
let isStudent: boolean = true;
let ages: number[] = [12, 25, 36, 54];

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    //nested object
    // ? makes the property as optional
    address?: Address
}

let address1: Address = {
    street: "Pathak Street",
    city: "Warangal",
    country: "India"
}

let address2: Address = {
    street: "4th Block",
    city: "Irving",
    country: "USA"
}

let person1: Person = {
    name : "Akhil",
    age: 25,
    isStudent: true,
    //address: address1
}

let person2: Person = {
    name : "AkHi",
    age: 26,
    isStudent: true,
    address: address2
}

let persons: Person[] = [person1, person2];
// same as above one
// let persons: Array<Person> = [person1, person2];

console.log(`Here are the student details: ${person1.name} & ${person2.name}`)