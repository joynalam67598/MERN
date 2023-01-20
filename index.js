//path module
//os module
//file System module
const fs = require("fs");

fs.writeFileSync("file.txt", "Hello Gang"); //sync -> work in syncronus way. block the threads
fs.appendFile("file.txt", "What's up!");
fs.readFile("file.txt", (err, data) => {
  console.log(data);
}); // async -> for async we need to add call back.

// event module
//node js is nonblocking event griven runtime
// const EventEmitter = require("events"); // return a class EventEmitter, then we can create multiple instance of it;

// const emitter = new EventEmitter();

// register a listener for bellring event; -> when an event with this name this will work on.
const School = require("./school");
// emitter.on("bellRing", ({ period, text }) => {
School.on("bellRing", ({ period, text }) => { //(****)
  console.log(`Bell the ring because ${period} is ${text}`);
});

// We need to register listener before raising the event.
//startPeriod();

/// raise event from diffrent file. -> but it will not work, in school file we use one instance which has no listenr.
// to solve this we need to create a class which extends EventEmitter then the call contain every thing of EE.(****)

// raise an event.
//emitter.emit("bellRing",'Bell the Ring');
// emitter.emit("bellRing", {
//   period: 1,
//   text: "over",
// });

//(****)
const School = new School();
School.startPeriod();
