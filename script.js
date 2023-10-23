// const p = new Promise() //won't work because no callback function specified

// const p = new Promise(function(resolve, reject) {
//   console.log(resolve, reject);
// });
// console.log(p);

const p = new Promise(function(resolve, reject) {
  let value = 42;
  resolve(value);
});
