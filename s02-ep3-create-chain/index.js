//consumer
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
  .then(function () {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//Promise implementation

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    //logic for createOrder

    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart() {
  return false;
}
