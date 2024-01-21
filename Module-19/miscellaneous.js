var name = 'Ariana Grande is doing math'
var nameState0 = name.includes('Ariana');
var nameState1 = name.substring(2,8);
var math0 = 'f'
var math1 ='4.444'
console.log(nameState0);
console.log(nameState1);
console.log(parseInt(math0, 16));
console.log(parseFloat(parseFloat(math1).toFixed(2)));  // toFixed is return a string so here parseFloat is used after the string return
