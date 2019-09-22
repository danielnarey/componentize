```js

const recursiveAdd = (total) => (value, print = false) => {
  const newTotal = total + value;

  if (print) {
    console.log(newTotal);
  }

  return recursiveAdd(newTotal);
};


let adder = recursiveAdd(0)(0);

for (var i = 0; i < 100000000; i++) {
   adder = adder(1);
}

adder(0, true);

```