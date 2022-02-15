// console.log(process.argv);

// if (process.argv.includes("test")) {
//   console.log("Hello there");
// }

// -

const calculate = function (x, y) {
  // const min = Math.arg1.min();
  // const max = Math.y.max();

  const diff = Math.abs(x - y); // its always positive

  const base = Math.min(x, y);

  const result = base + getRandomInt(diff);

  return result;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const arg1 = parseInt(process.argv[2]);

const arg2 = parseInt(process.argv[3]);

if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
  console.log("Its not a number yooo");
} else {
  const randomNumber = calculate(arg1, arg2);
  console.log(randomNumber);
}
