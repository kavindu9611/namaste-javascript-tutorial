const s = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve value");
  }, 10000);

});

function getData() {
  //JS engine will not wait for promise to be resolved it will move to the
  //  next line and print 
  s.then((res) => console.log(res));
  console.log("ex1");
}

getData();
