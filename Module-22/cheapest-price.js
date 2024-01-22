const phones = [
  { name: "iphone", price: 32000, storage: "24gb" },
  { name: "oppo", price: 18000, storage: "24gb" },
  { name: "ximi", price: 5000, storage: "24gb" },
  { name: "realme", price: 8000, storage: "24gb" },
  { name: "samsung", price: 2000, storage: "24gb" },
  { name: "one+", price: 1000, storage: "24gb" }
];
console.log(phones.length);
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let phone = phones[i];
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
  }
  return cheapest;
}
const myPhone = cheapestPhone(phones);
console.log(myPhone);

