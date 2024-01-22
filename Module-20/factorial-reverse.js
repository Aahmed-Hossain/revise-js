function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(result);
  }
  return result;
}
const number = 5;
const res = factorial(number);
console.log(res);
