// If we use var to define a variable in a different file with the same variable name in standard JS.
// A variable's value can potentially be altered by changing another variable. because var is the window's scope.
// The modularity is broken by that.

// Each and every.js file in node js is a module. We cannot use other file data without importing,
// for this reason. and we can only view the imported file's output contents.
var peopleName = require("./people");

console.log(peopleName);
