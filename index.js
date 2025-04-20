"use strict";
const menu = [
    { name: "Margherita", price: 200 },
    { name: "Pepperoni", price: 250 },
    { name: "Corn", price: 300 },
    { name: "Chicken", price: 400 }
];
let cashInRegister = 1000;
const orderHistory = [];
let nextOrderId = 1;
/**
 * addNewPizza()
 * Utility method that takes a pizza object and adds to menu
 * */
function addNewPizza(pizzaObject) {
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
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName}, does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { orderId: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    return newOrder;
}
/**
 * completeOrder()
 * Utility method that takes orderID as a parameter
 * 1. finds the correct order in the queue and mark its status as "Completed"
 * 2. return the found order from the function
 */
function completeOrder(orderId) {
    const order = orderHistory.find(orderObj => orderObj.orderId === orderId);
    if (!order) {
        console.error(`order with id : ${orderId} is not found!`);
        return;
    }
    order.status = "completed";
    return order;
}
console.log("Adding couple of new pizzas to the menu");
addNewPizza({ name: "Tandori Chicken", price: 450 });
addNewPizza({ name: "Spicy Chicken", price: 400 });
console.log(menu);
console.log("Please select the pizzas from the menu : ");
placeOrder("Tandori Chicken");
console.log("Your order placed, here is the order queue");
console.log(orderHistory);
completeOrder(1);
console.log("your order is ready, please pay the bill and collet your order");
console.log(`cash in register :  ${cashInRegister}`);
console.log(orderHistory);
