var shoppingCart = {
    books:4,
    pen: 2,
    pencil: 12,
    guava:12
}

var keys = Object.keys(shoppingCart)
for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    // console.log(propertyName);
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyValue);
}

for(propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}