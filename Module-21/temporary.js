let first = 7;
let second = 8;
console.log(first, second);
let temp = first;
first = second;
second = temp;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);