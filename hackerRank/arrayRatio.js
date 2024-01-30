function arrayRatio(arr){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]> 0){
            positiveCount++;
        }else if(arr[i]< 0){
            negativeCount++;
        }else{
            zeroCount++;
        }
    }
  const total = arr.length;
  const positiveRatio = positiveCount / total;
  const negativeRatio = negativeCount / total;
  const zeroRatio = zeroCount / total;
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}
const arr = [1, 1, 0, -1, -1];
arrayRatio(arr);