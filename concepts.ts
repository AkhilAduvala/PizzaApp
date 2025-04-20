//Premitive data types: string, number, boolean
let myName: string = "Bob";
const name1 = "Bob"; // name1 is now type of "Bob", but not the generic string
//let name2: "Bob" = "Bob" //same as the above here name2 is of type "Bob"
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

console.log(`Here are the student details: ${person1.name} & ${person2.name}`);

//literals + unions |

//kind of enum
type UserRole = "guest" | "member" | "admin" //the UserRole can either of the type guest | member | admin
let userRole: UserRole = "admin";

type User = {
    userName: string
    role: "seller" | "Customer"
}

let user1: User = {
    userName: "Akhil",
    role: "Customer" //if we use other than mentioned it will give error
}
