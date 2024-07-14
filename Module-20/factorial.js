// function factorial(number){
//     let result =1;
//     for(let i = 1; i <= number; i++){
//         // here i = 1; if you use i=0 value will start from 0;
//         result = result * i;
//     }
//     return result;
// }
// const res = factorial(3);
// console.log(res);

function factorial(num){
    let result = 1;
    for ( let i =1; i<=num; i++){
        result = result * i;
    }
    return result;
}
const num = 3
const res = factorial(num);
console.log(res)