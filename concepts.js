"use strict";
//avoid using any, because it is saying ts to not check for type
//Primitive data types: string, number, boolean
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
let nextUserId = 1;
let user1 = {
    id: 1,
    userName: "Akhil",
    role: "customer" //if we use other than mentioned it will give error
};
const users = [
    { id: nextUserId++, userName: "Akhil", role: "customer" },
    { id: nextUserId++, userName: "Akhi", role: "customer" },
    { id: nextUserId++, userName: "Panda", role: "seller" }
];
function updateUser(id, updates) {
    let user = users.find(u => u.id === id);
    if (!user) {
        throw new Error("User not found");
    }
    Object.assign(user, updates);
}
updateUser(2, { userName: "AkHi" });
addNewUser({ userName: "Abhimanyu", role: "customer" });
console.log(users);
function addNewUser(newUser) {
    users.push({ id: nextUserId++, ...newUser });
    return users.find(u => u.id === nextUserId);
}
//generics
const gameScores = [14, 22, 5, 15];
const family = ["AkHi", "Ashwidhi", "Abhimanyu", "Athidhi"];
const project = [{ id: 1, name: "Adidas" }, { id: 2, name: "Infosys" }];
//this is a function where we are using generic so the type will based on what is passed
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(family));
console.log(getLastItem(project));
