const names = ["abul", "babul", "tabul", "tabul", "abul", "abul", "babul"];
function removeDuplicate(names) {
  let unique = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
