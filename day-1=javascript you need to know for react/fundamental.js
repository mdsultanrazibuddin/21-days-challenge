// how to declare a variable using let & const

const name = 'Razib'
let season ='winter'
season = 'autumn'

//  condition 
    // 6 basic conditions : >, <, ===, !==, <=, >=
    // multiline condition : &&, ||

if (fathername === 'sultan' || season === 'rainy') {
    
}
else if (fathername === 'kasem') {
    
}
else{

}

// Array
    // index, length, push
const arr =[20, 23, 24, 11, 33,44, 78]

// loop
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
    
}


// function
function multiply (num1, num2) {
    const number = num1*num2 
    return number
}

const output = multiply(20, 23)


console.log(output);


// object

const student ={
    name: 'kasem',
    age: 20,
    movies: ['sakib khan, superstar, ajaira']
}
const myvariable = 'age'
console.log(student.name);
console.log(student['age']);
console.log(student[myvariable]);


g