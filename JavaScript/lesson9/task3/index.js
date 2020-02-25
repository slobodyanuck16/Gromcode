const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Nikita',
        age: 30
    }
}

function getCustomersList(customers) {
    let copy = Object.entries(customers);
    return copy.map(el => ({ id: el[0], ...customers[el[0]] }))
        .sort((prev, cur) => prev.age - cur.age)
}
console.log(getCustomersList(customers));