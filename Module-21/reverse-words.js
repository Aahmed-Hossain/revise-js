// function reverseWords(text){
//     let words = text.split(' ');
//     let result = [];
//     for(let i = words.length - 1; i>=0; i--){
//         const element = words[i];
//         result.push(element);
//     }
//     const reversed = result.join(' ');
//     return reversed;
// }
// const text = "I am Learnig JavaScript";
// const res =  reverseWords(text);
// console.log(res);


function reverseWords(text){
    const words = text.split(' ');
    const result = [];
    for(let i = words.length-1; i>=0; i--){
        var element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const text = 'I am Learning JavaScript';
const resultant = reverseWords(text);
console.log(resultant);
