const GITHUB_API = "https://api.github.com/users/kavindu9611";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});

//States of promises
//1-Pending
//2-Fulfilled
//3-Rejected

//Promise objects are immutable - Whenever a promise object has data(fullfilled).We can
// pass that here and there in our code.and we dont have to worry about someone can
// mutate that data

//How to handle this

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

//We can handle it like this
//promise chaining

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
