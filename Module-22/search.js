const phones = [
    {id: 1, name: 'Lenovo Laptop 5G', price: 50000},
    {id: 2, name: 'Lenovo Laptop 4G', price: 40000},
    {id: 3, name: 'oppo Laptop 5G', price: 50000},
    {id: 4, name: 'Lenovo Phone 5G', price: 7000},
    {id: 5, name: 'Xiaomi Phone 5G', price: 8000},
];

function searchItems(phones, search) {
    const matched = [];
    for (const phone of phones) {
        if (phone.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(phone);
        }
    }
    return matched;
}

const result = searchItems(phones, 'phone');
console.log(result);
