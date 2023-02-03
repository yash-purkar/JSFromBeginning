// 1️⃣Ways to print Hello World
// 1.
// ➖
// console.log("Hello World");
// console.log() - It is used in debugging the code.

// 2.
// ➖
// alert("Hello World");
// alert() - This method displays an alert box over the current window with the specified message.

// 3.
// ➖
// document.write("Hello World");
// document.write("<h1>Hello World</h1>");

// document.write() - It is used when we want to print the content to the HTML document.


// 2️⃣ Programme to add two numbers
// ◽ Static

/*let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum : ", sum)*/

// ◽ Dynamic

/*let a = Number(prompt("Enter First Number : ", 25));
let b = Number(prompt("Enter Second Number : ", 25));
let sum = a + b;
console.log("Sum : ", sum);*/

// we can pass default value to prompt.
/*Whatever input we take from user it comes as a string, so we have to convert it into a number to perform mathametical operations, so we converted using Number() method.*/

// ⚪ "Math"  is a built-in object that has properties and methods for mathematical constants and functions,
//It works only with the "number" datatype.

// 3️⃣ Program to find square root of a number
//To find the square root of a number in js we can use built-in Math.sqrt() method.
// syntax
// Math.sqrt(number);

/*let num = prompt("Enter the number : ");
let squareRoot = Math.sqrt(num);
console.log(`Square root of a ${num} is : ${squareRoot}`);*/

// 4️⃣ Program to find Area of a triangle
// ➖right angled triangle.
// formula : (base*height)/2

/*let base = prompt("Base : ");
let height = prompt("Height : ");

let area = (base * height) / 2;
console.log(`Area of a right angle triangle is : ${area}`)*/

// ➖ regular triangle
// formula :
// s = (a + b + c)/2
// area = sqrt of s(s-a)*(s-b)*(s-c)

/*let a = 10;
let b = 5;
let c = 10;

let s = a + b + c / 2;
let temp = s * (s - a) * (s - b) * (s - c)
let area = Math.sqrt(temp);
console.log(`Area : ${area}`)*/


// 5️⃣ Program to swap two numbers
// Ways to do that
// 1. Swapping using temporary variable.
// 2. Swapping without using temporary variable.

// ➖ 1.With temporary variable
/*let a = 10;
let b = 20;
let temp;

console.log(`Before a : ${a} and b : ${b}`);

temp = a; // temp = 10
a = b; // a=20
b = temp; // b=10

console.log(`After a : ${a} and b : ${b}`);*/


// ➖ Without temporary variable
/*let a = 10;
let b = 20;
console.log(`Before a : ${a} and b : ${b}`);
a = a + b; // a = 10+20=30
b = a - b; // b = 30-20 = 10
a = a - b; // a = 30 - 10 = 20;
console.log(`After a : ${a} and b : ${b}`);*/


// 6️⃣ Convert kms to miles
// 1 kilometer = 0.6211371 miles
// formula -> miles = kilometer * factor;
// factor is nothing but the 0.6211371 miles

function convertToMiles() {
  let kms = document.getElementById("kmsData").value;
  console.log(kms);

  const factor = 0.6211371;
  let miles = kms * factor;
  document.getElementById("milesRes").innerText = `${kms} km = ${miles} miles`;
}


// 7️⃣ Convert Celcius to Fahrenheit
// formula : Celcius * 1.8 + 32;

function convertToFahrenheit() {
  let celcius = document.getElementById("celData").value;

  let fah = (celcius * 1.8) + 32;
  document.getElementById("fahRes").innerText = `${celcius} Celcius = ${fah} Fahrenheit`
}


// 8️⃣ Check if a Number is positive , negative or zero.

// 1. Solve using Math.sign();
// 2. User defined function;

// 1. Math.sign() - It takes an argument or va value and according to the value it calculates and tells is it positive , negative or zero.
// It returns  
/*
1 for positive
-1 for negative
0 for 0
 */

function checkNumber() {
  let number = document.getElementById("numData").value;
  let outputBox = document.getElementById("res");

  // using Math.sign()
  /*let res = Math.sign(number);
  console.log(res);*/

  // user defined
  if (number > 0) {
    outputBox.innerText = `${number} is a positive number`;
  } else if (number < 0) {
    outputBox.innerText = `${number} is a negative number`;
  } else if (number === 0) {
    outputBox.innerText = `${number} is Zero`;
  }
  else {
    outputBox.innerText = `${number} is not a number`;
  }
}


// 9️⃣ JS program to generate random number
//  Math.random() - It returns a random floating point number from 0 to less than 1;
// e.g 0.5225454545, 0.98544564564

// formula to get random number 
// Math.random()*(highestNumber - lowestNumber) + lowestNumber;



// generating random  number 1-10
let x = Math.random() * (10 - 1) + 1;
console.log(x);
// => e.g 3.45454547875454

// random integer Number
let z = Math.floor(Math.random() * (10 - 1) + 1);
console.log(z);

// 4 digit otp generator
let minNum = 1000;
let maxNum = 9999;
let otp = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(otp);
// : Get the minimum and maximum number of n digits in variable min and max respectively. Then generate a random number using Math.random()(value lies between 0 and 1). Multiply the number by (max-min+1), get its floor value and then add min value to it.

// 🔟 Check if number is odd or even
// num % 2 ===0 even
// num % 2 !== 0 odd

let num1 = 36;

// checking using if-else
if (num1 % 2 === 0) {
  console.log("EVEN")
}
else {
  console.log("ODD")
}

// checking using ternary operator
let num2 = 35
let res = num2 % 2 === 0 ? "EVEN" : "ODD";
// console.log(res);




// 1️⃣1️⃣Check Prime Number
/* A prime number is a positive integer that is only divisible by 1 and itself. e.g 2,3,5,7,11 etc. 
In simple words , prime number doesn't come in any table of any number except 1 and itself */

function checkPrime(n) {
  let result;
  if (n <= 1) {
    return "Not prime";
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        result = `${n} is not a prime number`;
        break;
      }
      else {
        result = `${n} is a prime number`;
      }
    }
    return result;
  }

}
// console.log(checkPrime(5)); //Prime
// console.log(checkPrime(15)); //Not Prime



// 1️⃣2️⃣ Find the largest number between three numbers.

// ➖ using Math.max() method

// It returns the largest number among the provided numbers.
// e.g

function findLargestUsingMax() {
  var a = prompt("Enter 1st number : ");
  var b = prompt("Enter 2nd number : ");
  var c = prompt("Enter 1st3rd number : ");

  let largest = Math.max(a, b, c);
  console.log(`${largest} is the largest number`);
}
// findLargestUsingMax();


// ➖ User defined
function findLargest() {
  var a = prompt("Enter 1st number : ");
  var b = prompt("Enter 2nd number : ");
  var c = prompt("Enter 1st3rd number : ");

  if (a >= b && a >= c) {
    console.log(`${a} is the largest number`);
  }
  else if (b >= a && b >= c) {
    console.log(`${b} is the largest number`);
  }
  else {
    console.log(`${c} is the largest number`);
  }
}

// findLargest();




// 1️⃣3️⃣ Factorial of a number
// The factorial of a number is the product of all the numbers from 1 to that number.
// formula
// (n!) = 1*2*3*4*5...n

// We have to multiply from 1 to that number

function factorial(n) {
  let fact = 1; // In fact variable , the result of each step will be stored. And the we are multiplying fact to i.
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

// console.log(factorial(5));
