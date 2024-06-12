// for declaration of function (I) keyword: function (II) function name (III) do something into the function (IV) call the function outside the function body.
function startFn(){
    // console.log('revising java script')
}
startFn();

function toSum(a, b, c,d){
    var sum = a+b+c+d;
    // console.log(`The sum: `, sum);

}
toSum(4,5,6,7);


function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}
var total = add(4 , 5);
// console.log(`Total:`, total);

function singara(money){
    var price = 10;
    var quantity = money / price;
    return quantity;
}
var myTK =  500;
var singaras = singara(myTK);
function addResult(assign1, assign2, assign3){
    var average = assign1 + assign2 + assign3;
    return average;
}
var assign1 = 30;
var assign2 = 28;
var assign3 = 30;
var result1 = addResult(assign1, assign2, assign3);
var result2 = addResult(assign1, assign2, assign3);
var result3 = addResult(assign1, assign2, assign3);
console.log(result1, result2, result3);




