const products = [
    {name: 'laptop', color: 'black', price: 32000, brand: 'hp'},
    {name: 'mobaile', color: 'red', price: 4200, brand: 'iphone'},
    {name: 'watch', color: 'ash', price: 2100, brand: 'apple'},
    {name: 'television', color: 'red', price: 35000, brand: 'hp'},
    {name: 'sunglass', color: 'white', price: 200, brand: 'salo'},
    {name: 'bag', color: 'black', price: 3200, brand: 'asp'},
    {name: 'camera', color: 'black', price: 20000, brand: 'canon'},
]

const productsJson = JSON.stringify(products)

console.log(productsJson);

const productsObject = JSON.parse(productsJson)

// Fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data)
    )

//   keys, Value
const keys = object.keys(products)
const value = object.value(products)

