const EventEmitter = require("events");

//! not worked (****)
//!const emitter = new EventEmitter();
//! function startPeriod() {
//!   console.log("class Started");

//!   //!/ rais event when ring bell
//!   emitter.emit("bellRing", {
//!     period: 1,
//!     text: "over",
//!   });
//! }
//! module.exports = startPeriod;

class School extends EventEmitter {
  startPeriod() {
    console.log("class Started");
    //!/ rais event when ring bell
    this.emit("bellRing", {
      period: 1,
      text: "over",
    });
  }
}

module.exports = School;
