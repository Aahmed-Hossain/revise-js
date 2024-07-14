function make_avg(numbers){
    // const sum = numbers.reduce((acc, num)=>(acc + num), 0)
 let sum = 0;
 for(let i = 0; i< numbers.length; i++){
    number = numbers[i];
    sum = sum + number;
 }
    const average = sum/numbers.length;
    return average;
}
const numbersArray = [3, 6, 9, 12];
const avg = make_avg(numbersArray);
console.log(avg);

function makeAvg(arr){
   let sum = 0;
   for(let i = 0; i< arr.length; i++){
      let element = arr[i];
      sum = sum + element;
   }
   let avg;
   return avg = sum/arr.length;
}
const arr = [3, 6, 9, 12];
const res = makeAvg(arr)
console.log(res);