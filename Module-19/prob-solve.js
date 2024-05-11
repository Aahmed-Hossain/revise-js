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

// function make_avg(numbers){
//     // const sum = numbers.reduce((acc, num)=>(acc+num),0)
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++){
//         let num = numbers[i];
//         sum = sum + num;

//     }
//     const average =sum/numbers.length;
//     return average;
// }
// const array = [1, 3, 5, 7];
// const avg = make_avg(array);
// console.log(avg);
