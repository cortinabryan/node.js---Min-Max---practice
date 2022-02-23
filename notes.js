// console.log("Starting notes.js");

// var addNote = (title, body) => {
//   console.log("Adding note", title, body);
// };

// var getAll = () => {
//   console.log("Getting all notes");
// };

// var getNote = (title) => {
//   console.log("Getting note", title);
// };

// var removeNote = (title) => {
//   console.log("Removing Note", title);
// };

// module.exports = {
//   addNote,
//   getAll,
//   getNote,
//   removeNote,
// };

// -

console.log("Starting notes.js");

var addNote = (title, body) => {
  console.log("Adding note", title, body);
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = (title) => {
  console.log("Getting note", title);
};

var removeNote = (title) => {
  console.log("Removing Note", title);
};

var notNumber = (title) => {
  console.log("This is not a number. try again", title);
};

var isNumber = (title) => {
  console.log("This is a  number", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  notNumber,
  isNumber,
};
