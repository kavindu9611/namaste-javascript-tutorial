//Filter function in js use to filter the data from array based on some condition

const arr = [5, 1, 3, 2, 6];

//Filter odd values

function isOdd(x) {
  return x % 2;
}

const output = arr.filter(isOdd);
console.log(output); // [ 5, 1, 3 ]

//Filter even values
function isEven(x) {
  return x % 2 === 0;
}

const output2 = arr.filter(isEven);
console.log(output2); // [ 2, 6 ]


//Filter values greater than 4

function isGreaterThan(x) {
  return x > 4;
}

const output3 = arr.filter(isGreaterThan);
console.log(output3); // [ 5, 6 ]
