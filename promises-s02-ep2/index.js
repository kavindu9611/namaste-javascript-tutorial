//Promises are used to handle async operations in javascript

 //Before promises

 const cart = ["shoes", "pants", "kurta"];

 createOrder(cart, function (orderId) {
   proceedToPayment(orderId);
 });

 //createOrder return orderId and it s responsible for calling proceedToPayment
 //this is a issue (Inversion of control)


 //After Promise

 const promise = createOrder(cart)

 promise.then(function(orderId){
    proceedToPayment(orderId)
 })


//Earlier we are passing a callback function to another function by blindly trusting it
// And with promise we a re attaching a function to a promise object  