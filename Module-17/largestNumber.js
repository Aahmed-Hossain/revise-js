var a = 586;
var b = 56; 
var c = 5;

if(a > b && a > c){
    console.log(`Largest Number is ${a}`);
}else if(b > a && b > a){
    console.log(`Largest number is ${b}`);
}else if(c > a && c > b ){
    console.log(`Largest number is ${c}`);
}else{
    console.log(`Number is not distinct or Not a number`);
}