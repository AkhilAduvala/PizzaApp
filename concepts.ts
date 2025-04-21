//avoid using any, because it is saying ts to not check for type

//Primitive data types: string, number, boolean
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
let nextUserId = 1;

type User = {
    id: number
    userName: string
    role: "seller" | "customer"
}

let user1: User = {
    id: 1,
    userName: "Akhil",
    role: "customer" //if we use other than mentioned it will give error
}

const users: User[] = [
    { id: nextUserId++, userName: "Akhil", role: "customer" },
    { id: nextUserId++, userName: "Akhi", role: "customer" },
    { id: nextUserId++, userName: "Panda", role: "seller" }
]

function updateUser(id: number, updates: Partial<User>): void {
    let user = users.find(u => u.id === id);
    if(!user){
        throw new Error("User not found");
    }
    Object.assign(user, updates);
}

updateUser(2, {userName: "AkHi"});
addNewUser({userName: "Abhimanyu", role: "customer"});
console.log(users);

function addNewUser(newUser: any): User | undefined{
    users.push({id: nextUserId++, ...newUser});

    return users.find(u => u.id === nextUserId);
}


//generics

const gameScores = [14,22,5,15];
const family = ["AkHi", "Ashwidhi", "Abhimanyu", "Athidhi"];
const project = [{id: 1, name: "Adidas"}, {id: 2, name: "Infosys"}];

//this is a function where we are using generic so the type will based on what is passed
function getLastItem<Type>(array: Type[]): Type | undefined{ //<can be any name>
    return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(family));
console.log(getLastItem(project));