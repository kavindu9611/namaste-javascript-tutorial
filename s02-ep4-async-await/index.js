//What is async?
//async is a keyword that is used before a function to create a async function

//Always return a promise
async function getData() {
  return "Test";
}

const dataPromise = getData();
//console.log(dataPromise)

dataPromise.then((res) => console.log(res));
