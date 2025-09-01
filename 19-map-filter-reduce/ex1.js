const users = [
  { firstName: "kavindu", lastName: "Wickramasinghe", age: 29 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Barak", lastName: "Obama", age: 25 },
  { firstName: "Bill", lastName: "Clinton", age: 85 },
  { firstName: "George", lastName: "Bush", age: 85 },
];

//List of full names
//["Kavindu Wickramasinghe", "Donald Trump" , .......]

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

//How many people are of a particular age
//acc = {29 : 1, 75 : 1, 65 : 1, 85 : 2}

const output1 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(output1);

//First Name of all the people age is less than 30

const output2 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output2);
