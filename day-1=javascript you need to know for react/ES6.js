const arr =[20, 23, 24, 11, 33,44, 78]

const student ={
    name: 'kasem',
    age: 20,
    movies: ['sakib khan, superstar, ajaira']
}
//  template string 
const about = `My name is ${student.name} age of ${student.age} has number ${arr[0]} also like movies ${student.movies[0]}`

// arrow function

const get = () => 55
const add = num => num + 10

const doMath = (num1, num2) => {
    const sum = num1 + num2 
    return sum
}

const output = doMath(52, 25)
console.log(output);


// spread operator

const newNumber = [...arr, 77]
console.log(arr);

console.log(newNumber);

