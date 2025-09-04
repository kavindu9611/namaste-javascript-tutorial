//Before async await

const s = new Promise((resolve, reject) => {
  resolve("Promise resolve value!!!");
});

function getData() {
  s.then((res) => console.log(res));
}

getData();

//After async await

//*Use await keyword infront of await
//* await is a keyword that can only be use inside a async function

const p = new Promise((resolve, reject) => {
  resolve("Promise resolve value!!!");
});

async function handlePromise(){
    const val = await p
    console.log(val)
}

handlePromise()
