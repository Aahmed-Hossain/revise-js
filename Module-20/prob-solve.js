// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const checkNumber = isEven(34);
// console.log('even num:', checkNumber);

// function isLeapYear(year){
//     const leapYear = (year % 4 );
//     if(leapYear === 0){
//         return true;
//     }
//     return false;
// }
// const myYear = isLeapYear(1952);
// // console.log('leap year:',myYear);

// function oddSumOfAnArray(numbers){
//     let sum = 0;
//     let oddArray = [];
//     for(let i= 0; i< numbers.length; i++){
//         const element = numbers[i];
//         if(element % 2 !== 0){
//             oddArray.push(element);
//         }
//     }
//     for(let i=0; i<oddArray.length; i++){
//         const element = oddArray[i];
//         sum = sum + element;
//     }
//     return sum;

// }
// const myArray = [34,23,21, 36, 75, 3];
// const sum = oddSumOfAnArray(myArray);
// // console.log(sum);


// function addOddNumber(elements){
//     let sum = 0;
//     let oddArray  = [];
//     for(let i = 0;  i<elements.length; i++){
//         let element = elements[i];
//         if(element %2 !==0){
//             oddArray.push(element)
//         }
//         console.log(oddArray);
//     }
// }
// const array = [1, 2, 3, 4, 5, 7]


function oddNumAdd(arr){
    let sum = 0;
    let oddArr = [];
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element %2 !==0){
            oddArr.push(element);
        }
    }
    for(let i = 0; i < oddArr.length; i++){
        let element = oddArr[i];
        sum = sum + element;
    }
    return sum;
}
const arr = [1, 2, 3, 9]
const res = oddNumAdd(arr);
console.log(res)
