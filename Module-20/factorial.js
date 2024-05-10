function factorial(number){
    let result =1;
    for(let i = 1; i <= number; i++){
        // here i = 1; if you use i=0 value will start from 0;
        result = result * i;
    }
    return result;
}
const res = factorial(3);
console.log(res);
