const input = [5, 7, 9, 11, 15, 17, 21];
let a = [];
for (let i = 0; i < input.length - 1; i++) {
  if (input[i + 1] - input[i] !== 2) {
    a[i] = input[i] + 2;
  }
}
a.forEach((a) => {
  console.log(a, " ,");
});
