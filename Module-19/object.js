var shoppingCart = {
    books:4,
    pen: 2,
    pencil: 12,
    guava:12
}
var pens = shoppingCart['pen'];
// console.log(pens);

var properties = Object.keys(shoppingCart);
// console.log(properties);
var values = Object.values(shoppingCart);
// console.log(values);

// shoppingCart.pen = 4;
// shoppingCart['pen'] = 6
var propertyName = 'mouse';
shoppingCart[propertyName] = 34;
console.log(shoppingCart);




