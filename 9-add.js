function add(a, b) {
  return a + b;
}

const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

if (isNaN(first) || isNaN(second)) {
  console.log("NaN");
} else {
  console.log(add(first, second));
}
