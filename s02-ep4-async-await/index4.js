const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1 st Promise!!!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve("2 nd Promise!!!");
  }, 5000);
});

async function handlePromise() {
  console.log("start");

  const val1 = await p1;
  console.log(val1);
  console.log("check 1");

  const val12 = await p2;
  console.log(val12);
  console.log("check 2");
}

handlePromise();
