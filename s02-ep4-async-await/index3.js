const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve value!!!");
  }, 10000);
});

async function handlePromise() {
  //Js engine was appearing waiting for promise to resolved
  const val = await p;
  console.log(val);
  console.log("check");
}

handlePromise();
