// console.log(process.argv);

// const { number } = require("yargs");

// const yargs = require("yargs/yargs");
// if (process.argv.includes("test")) {
//   console.log("Hello there");
// }

// - ACTUAL

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const arg1 = parseInt(process.argv[2]);

// const arg2 = parseInt(process.argv[3]);

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// -

// import yargs from "yargs";

// const yargs = require("yargs");

// const argv = yargs.argv;

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const arg1 = parseInt(process.argv[2]);

// const arg2 = parseInt(process.argv[3]);

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// console.log(yargs.argv);

// - EXPERIMENT

// function that takes a randomInt and their difference?
// a function that we're gonna use to call it inside of another function
// define the arguments
// if/else statement if its a number and not a number

// var argv = require('yargs/yargs')(process.argv.slice(2))
//   .default('random', function randomValue(max) {
//     return Math.floor(Math.random() * max);
//   }).argv;

// const argv = require('yargs/yargs')(process.argv.slice(2))
//   .default('random', function randomValue(max) {
//     return Math.floor(Math.random() * max);
//   }
//   .check((argv, options) => {
//     const filePaths = argv  ._
//     if (filePaths.length = NaN) {
//       throw new Error("That is not a number try again")
//     } else {
//       const randomNumber = calculate(arg1, arg2);
//       return randomNumber // tell Yargs that the arguments passed the check
//     }
//   })
//   .argv

// -

// SAMPLE

// console.log("Startigg app.js");

// const yargs = require("yargs");

// const notes = require("./notes.js");

// const argv = yargs.argv;
// // var command = process.argv[2];
// var command = argv._[0];
// console.log("Command: ", command);
// console.log("Process", process.argv);
// console.log("yargs", argv);

// if (command === "add") {
//   notes.addNote(argv.title, argv.body);
// } else if (command === "list") {
//   notes.getAll();
// } else if (command === "read") {
//   notes.getNote(argv.title);
// } else if (command === "remove") {
//   notes.removeNote(argv.title);
// } else {
//   console.log("Command not recognized");
// }

// -

// EXPERIMENT

// console.log("Startigg app.js");

// const yargs = require("yargs");
// const argv = yargs.argv;
// const notes = require("./notes.js");

// const arg1 = argv._[0];
// const arg2 = argv._[1];

// // var command = argv._[0];

// console.log("Arg1 yargs", arg1);
// console.log("Arg2 yargs", arg2);

// const argv = require('yargs/yargs')(process.argv.slice(2))
//   .command('$0', 'the default command', () => {}, (argv) => {
//     console.log('this command will be run by default')
//   })
//   .argv

// - OLD EXPERIMENT

// const yargs = require("yargs");
// // const chalk = require("chalk");
// const getNotes = require("./notes.js");

// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log("Title: ", argv);
//   },
// });

// yargs.command({
//   command: "calc",
//   describe: "Random number from 2 arguments min max",
//   builder: {
//     calculate: {
//       describe: "random number between 2 arguments",
//       demandOption: true,
//       type: "number",
//     },
//   },
//   handler: function (argv1, argv2) {
//     const diff = Math.abs(argv1 - argv2);

//     const base = Math.min(argv1, argv2);

//     const result = base + getRandomInt(diff);

//     const getRandom = function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   },

//     return result;
//   },
//   // handler: function getRandomInt(max) {
//   //   return Math.floor(Math.random() * max);
//   // },
// });

// console.log(yargs.argv);

// NEW EXPERIMENT

// var argv = require("yargs/yargs")(process.argv.slice(2)).option("f", {
//   alias: "argv1",
//   number: yarg.argv,
//   demandOption: true,
//   default: "/etc/passwd",
//   describe: "x marks the spot",
//   type: "number",
// }).argv;

// var argv = require("yargs/yargs")(process.argv.slice(2)).options({
//   x: {
//     demandOption: true,
//     nargs: "2",
//     default: "/etc/passwd",
//     describe: "x number",
//     type: "number",
//   },
// }).argv;

// var argv = require("yargs/yargs")(process.argv.slice(2)).options({
//   f: {
//     alias: "file",
//     demandOption: true,
//     default: "/etc/passwd",
//     describe: "x marks the spot",
//     type: "string",
//   },
// }).argv;

const yargs = require("yargs/yargs");

const instance = yargs(process.argv.slice(2));

// console.log(argv.argv === instance.argv);

// understand the require function

var argv = require("yargs/yargs")(process.argv.slice(2)).options({
  a: {
    alias: "min",
    demandOption: true,
    describe: "minimum number",
    type: "number",
  },
  b: {
    alias: "max",
    demandOption: true,
    describe: "maximum number",
    type: "number",
  },
}).argv;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const calculate = function (x, y) {
  const diff = Math.abs(x - y);

  const base = Math.min(x, y);

  const result = base + getRandomInt(diff);

  return result;
};

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// fix this

if (
  typeof argv.a !== "number" ||
  typeof argv.b !== "number" ||
  isNaN(argv.a) ||
  isNaN(argv.b)
) {
  throw "Not a number try again";
} else if (argv.a > argv.b) {
  console.log("first argument can't be bigger than the second argument"); // add exit code
} else if (argv.a < argv.b) {
  const randomNumber = calculate(argv.a, argv.b);
  console.log(randomNumber);
}

// if( typeof(argv.a) !== "number" || typeof(argv.b) !== "number" || isNaN(argv.a) || isNaN(argv.b))

// console.log(argv.x + argv.y);

// var argv = require("yargs/yargs")(process.argv.slice(2))
//   .options({
//     f: {
//       number: true,
//       type: "number",
//     },
//   })
//   .command("").argv;

// WHERE DO I CONSOLE . LOG?

// WHERE DO I APPLY THE LOGIC AFTER AWPPLYING OPTIONS?

// HOW DO I PROPERLY RUN THIS HAVING 2 OR MULTIPLE ARGUMENTS?

// - REFEREMCE

// const yargs = require("yargs");

// const argv = yargs.argv;

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const arg1 = parseInt(process.argv[2]);

// const arg2 = parseInt(process.argv[3]);

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// console.log(yargs.argv);

// - REFERENCE

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// console.log(yargs.argv);

// -
// if (command !== Number) {
//   notes.notNumber();
// } else if (command === Number.isInteger(argv)) {
//   notes.isNumber();
// } else if (command === "read") {
//   notes.getNote(argv.title);
// } else if (command === "remove") {
//   notes.removeNote(argv.title);
// } else {
//   console.log("Command not recognized");
// }

// EXPERIMENT

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// console.log(yargs.argv);

// REFERENCE

// const yargs = require("yargs");

// const argv = yargs.argv;

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const arg1 = parseInt(process.argv[2]);

// const arg2 = parseInt(process.argv[3]);

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }

// console.log(yargs.argv);

// const calculate = function (x, y) {
//   const diff = Math.abs(x - y);

//   const base = Math.min(x, y);

//   const result = base + getRandomInt(diff);

//   return result;
// };

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const arg1 = parseInt(process.argv[2]);

// const arg2 = parseInt(process.argv[3]);

// if (!(Number.isInteger(arg1) && Number.isInteger(arg2))) {
//   console.log("Its not a number yooo");
// } else {
//   const randomNumber = calculate(arg1, arg2);
//   console.log(randomNumber);
// }
