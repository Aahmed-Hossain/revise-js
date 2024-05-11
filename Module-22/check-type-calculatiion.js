function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number'
    }
    total = num1 + num2;
    return total;
}
const result = add(9,45);
console.log(result);