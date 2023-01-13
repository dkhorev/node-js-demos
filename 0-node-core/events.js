import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const subscriber1 = () => {
  console.log("an event occurred!");
};
myEmitter.on("hello-event", subscriber1);

// const subscriber2 = () => {
//   console.log('an event occurred! #2');
// };
// myEmitter.on('hello-event', subscriber2);

myEmitter.emit("hello-event");

// example 2
// const math = new MyEmitter();

// subscriber
// const mathAdd = (a, b) => {
//   console.log("a + b =", a + b);
// };
// math.on("compute", mathAdd);

// subscriber
// const mathMultiply = (a, b) => {
//   console.log("a * b =", a * b);
// };
// math.on("compute", mathMultiply);

// publish an event
// math.emit("compute", 3, 3);
