//custom type of Pizza
type Pizza = {
    name: string
    price: number
};

//custom type of Order
type Order = {
    orderId : number;
    pizza: Pizza;
    status: string;
}

const menu = [
    { name : "Margherita", price : 200},
    { name : "Pepperoni", price : 250},
    { name : "Corn", price : 300},
    { name : "Chicken", price : 400}
];

let cashInRegister: number = 1000;
const orderQueue: Order[] = [];
let nextOrderId: number = 1;

/**
 * addNewPizza()
 * Utility method that takes a pizza object and adds to menu 
 * */

function addNewPizza(pizzaObject: Pizza){
    menu.push(pizzaObject);
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


function placeOrder(pizzaName: string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!selectedPizza){
        console.error(`${pizzaName}, does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { orderId : nextOrderId++, pizza : selectedPizza, status : "Ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

/**
 * completeOrder()
 * Utility method that takes orderID as a parameter
 * 1. finds the correct order in the queue and mark its status as "Completed"
 * 2. return the found order from the function
 */

function completeOrder(orderId : number){
    const order = orderQueue.find(orderObj => orderObj.orderId === orderId);
    if(!order){
        console.error(`order with id : ${orderId} is not found!`);
        return;
    }
    order.status = "Completed";
    return order;
}

console.log("Adding couple of new pizzas to the menu")
addNewPizza({ name : "Tandori Chicken", price : 450});
addNewPizza({ name : "Spicy Chicken", price : 400});
console.log(menu);
console.log("Please select the pizzas from the menu : ")
placeOrder("Tandori Chicken");
console.log("Your order placed, here is the order queue")
console.log(orderQueue);
completeOrder(1);
console.log("your order is ready, please pay the bill and collet your order")
console.log(`cash in register :  ${cashInRegister}`);
console.log(orderQueue);

