var nums = [23, 45, 65, 35, 3454, 676, 44 , 86, 98];
for(var i = 0; i < nums.length; i++){
    var num = nums[i];
     if(num === 65){
        break;
     }
     console.log(num);
}

// const numbers =  [5, 7, 8, 64, 9, 12]
// let sum = 0;
// for(let i=0; i < numbers.length; i++){
   
//    let number = numbers[i];
//    sum = sum + number;
//    if(number === 64){
//       break;
//    }
//    console.log(sum);
// }



function breakArr(arr) {
   let result = [];
   for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element === 65) {
         break;
      }
      result.push(element);
   }
   return result;
}

var arr = [23, 45, 65, 35, 3454, 676, 44, 86, 98];
const result = breakArr(arr);
console.log(result); // Output: [23, 45]
