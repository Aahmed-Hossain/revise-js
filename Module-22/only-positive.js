const numbers = [11, 12, 13, 54, -65, 78, -94, 54, 45];
function onlyPositive() {
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(number > 0){
        sum  = sum + number;
    }else{
        break;
    }
  }
  return sum;
}
const result = onlyPositive(numbers);
console.log(result);