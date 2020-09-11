const arr = [1, 2, 110, 3, 3, 4, 330];

const sortedArr = arr.sort((a, b) => {
  return a - b;
});

console.log(sortedArr);
