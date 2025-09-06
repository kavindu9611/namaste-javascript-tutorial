//Arrow functions do not have their own 'this'
//they take the value of their lexical environment where they are enclosed
//enclosing lexical context

const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj.x(); //window

const obj1 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };

    y();
  },
};

obj1.x(); //{a: 20 x:f}

//Arrow functions doesnt have 'this' binding
