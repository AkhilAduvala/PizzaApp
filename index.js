const menu = [
    { name : "Margherita", price : 200},
    { name : "Pepperoni", price : 250},
    { name : "Corn", price : 300},
    { name : "Chicken", price : 400}
];

const cashInRegister = 1000;
const orderQueue = [];
const nextOrderId = 1;

/**
 * addNewPizza()
 * Utility method that takes a pizza object and adds to menu 
 * */

function addNewPizza(pizzaObject){
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

function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
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

function completeOrder(orderId){
    const order = menu.find(orderObj => orderObj.orderId == orderId);
    order.status = "Completed";
    return order;
}

addNewPizza({ name : "Tandori Chicken", price : 450});
addNewPizza({ name : "Spicy Chicken", price : 400});
console.log(menu);
placeOrder("Tandori Chicken");
console.log(orderQueue);
completeOrder(1);
console.log(cashInRegister);
console.log(orderQueue);