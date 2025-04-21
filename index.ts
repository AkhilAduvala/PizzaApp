let cashInRegister: number = 1000;
let nextOrderId: number = 1;
let itemId: number = 1;

//custom type of Pizza
type Pizza = {
    id: number
    name: string
    price: number
};

type NewPizza = Omit<Pizza, "id">;

//custom type of Order
type Order = {
    orderId : number;
    pizza: Pizza;
    status: "ordered" | "completed";
}

const menu: Pizza[] = [
    { id: itemId++, name : "Margherita", price : 200},
    { id: itemId++, name : "Pepperoni", price : 250},
    { id: itemId++, name : "Corn", price : 300},
    { id: itemId++, name : "Chicken", price : 400}
];


const orderHistory: Order[] = [];

/**
 * addNewPizza()
 * Utility method that takes a pizza object and adds to menu 
 * */

function addNewPizza(pizzaObject: NewPizza): void{
    const pizza: Pizza = {
        id : itemId++,
        ...pizzaObject
    }
    
    menu.push(pizza);
}

/**
 * placeOrder()
 * Utility method that takes a pizza name as parameter and
 * 1. finds that pizza object in the menu
 * 2. adds the income(price) to the cashInRegister
 * 3. pushes new order object to the orderQueue
 *      {pizza : selectedPizzaObjFromStep1, status : "ordered"}
 * 4. returns the new order object  
 */


function placeOrder(pizzaName: string): Order{
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!selectedPizza){
        throw new Error(`${pizzaName}, does not exist in the menu`);
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { orderId : nextOrderId++, pizza : selectedPizza, status : "ordered"};
    orderHistory.push(newOrder);
    return newOrder;
}

/**
 * 
 * using the generic to add object to array
 */

function addToArray<Type>(array: Type[], item: Type){
    array.push(item);
}

addToArray<Pizza>(menu, { id: itemId++, name : "Mixed", price : 500});
//explicit type generic functions instead of addToArray(menu, { id: itemId++, name : "Mixed", price : 500});
addToArray<Order>(orderHistory, {orderId : nextOrderId++, pizza : menu[3], status : "ordered"});

/**
 * completeOrder()
 * Utility method that takes orderID as a parameter
 * 1. finds the correct order in the queue and mark its status as "Completed"
 * 2. return the found order from the function
 */

function completeOrder(orderId : number): Order{
    const order = orderHistory.find(orderObj => orderObj.orderId === orderId);
    if(!order){
        throw new Error(`order with id : ${orderId} is not found!`);
    }
    order.status = "completed";
    return order;
}

function getPizzaDetails(choiceOfPizza: string | number): Pizza | undefined{
    let pizza;
    if(typeof choiceOfPizza === "string"){
        pizza = menu.find(pizza => pizza.name.toLowerCase() === choiceOfPizza.toLowerCase());
    } else if(typeof choiceOfPizza === "number"){
        pizza =  menu.find(pizza => pizza.id === choiceOfPizza);
    } else {
        throw new TypeError("Please select pizza based on Id or Name")
    }
    if(!pizza){
        throw new Error("Please select pizza from meny, the current one is not available")
    }

    return pizza;
}

console.log("Adding couple of new pizzas to the menu")
addNewPizza({ name : "Tandori Chicken", price : 450});
addNewPizza({ name : "Spicy Chicken", price : 400});
console.log(menu);
console.log("Please select the pizzas from the menu : ")
placeOrder("Tandori Chicken");
console.log("Your order placed, here is the order queue")
console.log(orderHistory);
completeOrder(1);
console.log("your order is ready, please pay the bill and collet your order")
console.log(`cash in register :  ${cashInRegister}`);
console.log(orderHistory);

