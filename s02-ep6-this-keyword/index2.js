//Difference between function and a method
//If the function is a part of a object it is known as a method

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // {a:10 , x:f}

//whenever you are in a method the value of this is the  object where method is present

const obj1 = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};

obj1.x(); //10
