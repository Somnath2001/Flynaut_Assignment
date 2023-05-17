const promise1 = Promise.resolve("Resolved 1");
const promise2 = Promise.resolve("Resolved 2");
const promise3 = Promise.reject("Rejected 3");

Promise.all([promise1, promise2])
  .then((values) => console.log(values)) // ['Resolved 1', 'Resolved 2']
  .catch((error) => console.log(error));

Promise.all([promise1, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error)); // 'Rejected 3'
