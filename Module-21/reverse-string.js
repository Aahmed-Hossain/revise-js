// function reverseString(text){
//     let reversed = '';
//     for(let i = text.length- 1; i >= 0; i--){
//         const element = text[i];
//         reversed = reversed + element;
//         console.log(element, reversed);
//     }
//     return reversed;
// }
// const text = 'STRINGS';
// const result = reverseString(text);
// console.log('reversed string:', result);

// const texts = 'stress'
// console.log(texts.length);
// for (let i = 0; i < texts.length; i++) {
//     console.log(`Character at index ${i}: ${texts[i]} (Unicode: ${texts.charCodeAt(i)})`);
// }
// The reason you are observing a length of 6 for the string 'stress' is because there is an invisible character, known as a zero-width space (U+200B), included in the string. When you log the length of the string, it counts each visible and invisible character.



// function reverseString(strings){
//     var reversedString = '';
//     for(let i = strings.length -1; i >= 0; i--){
//         var element = strings[i];
//         console.log(element);
//         reversedString = reversedString + element  
//     }
//     return reversedString;
// }
// const strings = 'Something';
// const result = reverseString(strings);
// console.log(result);


function reversedString(word){
let reversed = '';
for(let i = word.length-1 ; i >=0; i--){
let element = word[i];
reversed = reversed + element;
}
return reversed;
}
const strings = 'Something';
const result = reversedString(strings);
console.log(result);