
function make_avg(numbers){
    // const sum = numbers.reduce((acc, num)=>(acc + num), 0);

    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    const average = sum/numbers.length;
    return average;
}
const numbersArray = [3, 6, 9, 12];

const avg = make_avg(numbersArray);
console.log(avg);