var a = 0;
var b = 1; 
var c = 0;

var largestNumber = Math.max(a, b, c);

if (largestNumber === -Infinity) {
    console.log('Number is not distinct or Not a number');
} else {
    console.log(`Largest number is ${largestNumber}`);
}

