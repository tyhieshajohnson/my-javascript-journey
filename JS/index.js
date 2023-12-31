// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.
let language = 'javascript';
let score = 10;

// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully.
let length = 10;
let width = 5;
// Use the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
let rectangle = length * width
// Write the following to the console using CONCATENATION and BACKTICKS: 
console.log('The area of the rectangle is'.concat(rectangle));
// console.log(`The area of the rectangle ` $(answer)); -- another way to di it
// “The area of the rectangle is …” where … is the area you calculated.

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
let num1 = 10;
let num2 = 4;
// Calculate and display in the console what the remainder is if num1 is divided by num2.
console.log(num1 / num2);

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
let numberOne = 10,
    numberTwo = 4;
console.log(`numberOne / numberTwo = ${~~(numberOne / numberTwo)} remainder ${~~(numberOne % numberTwo)}`)
// console.log(`${numberOne} / ${numberTwo} ${}`);

// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
let integer = -1;
// 2. Once you’ve created the variables, display them to the console:
console.log(integer);
// 3. Use the ‘typeof’ function to check each variable
console.log(typeof integer);

let decimal = 1.23;
// 2. Once you’ve created the variables, display them to the console:
console.log(decimal);
// 3. Use the ‘typeof’ function to check each variable
console.log(typeof decimal);

let string = "Ty Johnson";
// 2. Once you’ve created the variables, display them to the console:
console.log(string);
// 3. Use the ‘typeof’ function to check each variable
console.log(typeof string);

const cars = "Volvo";
// 2. Once you’ve created the variables, display them to the console:
console.log(cars);
// 3. Use the ‘typeof’ function to check each variable
console.log(typeof cars);

// 4. Create an array with numbers and strings. Comment what data type you expect this to be. Then use the ‘typeof’ function on this array:
const numbFruit = ["1", "2", "6", "Ty Johnson"];
console.log(numbFruit);
// 5. Create a null variable and an undefined variable:
let numberThree = null,
    numberFour = null;
console.log(numberThree);
console.log(numberFour);

// ***********C. Task 3. functions and contional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!
function convertEuro(){
    let answerEuro = 1000*0.05
    return answerEuro
    console.log(answerEuro);
}
convertEuro = convertEuro

function convertDollar(){
    let answerDollar = 1000*18.69
    return answerDollar
    console.log(answerDollar);
}
convertDollar = convertDollar

function convertPound(){
    let answerPound = 1000*22.84
    return answerPound
    console.log(answerPound);
}
convertDollar = convertDollar

//Another way to calculate it:
function convertDollar(a,b){
    let answer = a/b
}
console.log(1000/18.69)

function convertPound(a,b){
    let answer = a/b
}
console.log(1000/22.84);

function convertEuro(a,b){
    let answer = a/b
}
console.log(1000/0.05);

//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
// function VAT(){
//     let answer = 400*115/100
//     let answer2 = 400*0.15
//     return answer2 + 400
// }
// console.log(`The amount after tax is` ${answer2});
//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.
// let 1stNum = 8;
// let 2ndNum = 20;
// let 3rdNum = 14;

//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)
// function display(){
//     if (1stNum>2nsNum) {
//         console.log(1stNum);{
//         }else{
//             console.log(2ndNum)
//         }
// }
// }

// function oddOrEven(){
//     if(1stNum%2==0){
//         console.log(`This is even`);
//     }else{
//         console.log(`This is odd`);
//     }
// }
// oddOrEven();
//  5.  Next, write a JavaScript conditional statement to sort the three numbers
//(1stNum, 2ndNum, 3rdNum) from largest to smallest.
// if (8>20 & 8>14){
//     if (20>14);
//     console.log(8,20,14);
// } -- Example of the brain thought.

// if (1stNum>2ndNum && 1stNum>3rdNum) {
//     if(2ndNum>3rdNum){
//         console.log(`${1stNum},${2ndNum},${3rdNum}`);
//     }else{
//         console.log(`${1stNum},${3rdNum},${2ndNum`);
//     }else if (2ndNum>1stNum && 2ndNum>3rdNum){
//         4 if (1stNum>3rdNum)
//     }
// }