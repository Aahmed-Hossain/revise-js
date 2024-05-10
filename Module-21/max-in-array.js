function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
              largest = element;
        }
    }
    return largest;
}

const array = [34, 23, 4, 343, 6, 2];
const result = maxInArray(array);
console.log(result);
