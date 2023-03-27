const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
  { name: "Dean", salary: 1100 },
];

function getWorthyWorkers(arr) {
  return arr.filter(function (obj) {
    return obj.salary > 1000;
  });
}

console.log(getWorthyWorkers(workers));
