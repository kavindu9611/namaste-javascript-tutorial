//There are two issues in callback
//1-Callback hell
//2-Inversion of control

const cart = ["shoes", "pants", "kurta"];

//callback hell

// When more than 1 APIs depend on each other to get call so then we pass the
// callback function inside callback function so it created nested callback
// function this makes our code
// less maintainable and readable this is callback hell. It also know as "Pyramid of Doom".

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//Inversion of control -Loosing the control of code when we use the callbacks

//We are give the responsibility of proceedToPayment() function to the createOrder
// function.this is very risky.we dont know this function will ever executed the proceedToPayment
//function

//When we pass a callback function into another function then the execution of
// callback function is depend on that function
// so in this way we loose the control over our code this is know as Inversion of Control.

api.createOrder(cart, function () {
  api.proceedToPayment();
});
