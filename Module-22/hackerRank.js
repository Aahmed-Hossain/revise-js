// function findMinMaxSum(arr) {
//     const totalSum = arr.reduce((acc, num) => acc + num, 0);
//     const minSum = totalSum - arr[arr.length - 1];
//     const maxSum = totalSum - arr[0];
//     console.log(minSum, maxSum);
//   }
//   const arr = [1, 3, 5, 7, 9];
//   findMinMaxSum(arr);

function findMinMaxSum(arr) {
let totalSum = 0;
let minNum = arr[0];
let maxNum = arr[0];
for(let i = 0; i < arr.length; i++){
    totalSum = totalSum + arr[i];
    if(arr[i] < minNum){
        minNum = arr[i];
    }
    if(arr[i] > maxNum){
        maxNum = arr[i];
    };
    const minSum = totalSum - maxNum;
    const maxSum = totalSum - minNum;
    console.log(minSum, maxSum);
}

















    // let totalSum = 0;
    // let minNum = arr[0];
    // let maxNum = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //   totalSum += arr[i];
    //   if (arr[i] < minNum) {
    //     // ekane 5 ta element teke lowest element ta ber kore nichi
    //     minNum = arr[i];
    //   }
    //   if (arr[i] > maxNum) {
    //       // ekane 5 ta element teke highest element ta ber kore nichi
    //     maxNum = arr[i];
    //   }
    // }
    // const minSum = totalSum - maxNum;
    // const maxSum = totalSum - minNum;
    // console.log(minSum, maxSum);
  }
  const arr = [1, 3, 5, 7, 9];
  findMinMaxSum(arr);
  
  

