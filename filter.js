const arr = [20, 23, 25, 30, 21, 50, 60];

const under30 = arr.filter((item) => {
  return item < 30;
});

console.log(under30);
