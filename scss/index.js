Promise.resolve().then(() => {
  console.log("then");
});
process.nextTick(() => {
  console.log("nextTick");
});
console.log("end");

setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(function() {
  console.log("shen");
}, 0);
