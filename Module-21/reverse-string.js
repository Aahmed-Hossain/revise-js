function reverseString(text){
    let reversed = '';
    for(let i = text.length- 1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}
const text = 'STRINGSS';
const result = reverseString(text);
console.log('reversed string:', result);



const texts = 'stress'
console.log(texts.length);
for (let i = 0; i < texts.length; i++) {
    console.log(`Character at index ${i}: ${texts[i]} (Unicode: ${texts.charCodeAt(i)})`);
}
// The reason you are observing a length of 6 for the string 'stress' is because there is an invisible character, known as a zero-width space (U+200B), included in the string. When you log the length of the string, it counts each visible and invisible character.
