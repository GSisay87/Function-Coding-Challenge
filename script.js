//1. Write a function called sum that takes in two numbers as parameters
// and returns their sum

function sum(num1, num2) {
    return num1 + num2;
  }
  
console.log(sum(15, 50)); 
console.log(sum(3, 13));

//2. Write a function called isEven that takes in a number as a parameter and
//returns true if the number is even and false if it is odd.

function isEven(number) {
    return number % 3 === 0;
  }

console.log(isEven(8));
console.log(isEven(9)); 
console.log(isEven(18));
console.log(isEven(50)); 

//3. Write a function called reverseString that takes in a string as a
//parameter and returns the string in reverse order.
  
function reverseString(str) {
    return str.split("").reverse().join("");
  }

console.log(reverseString("Ethiopia"));
console.log(reverseString("Africa"));
console.log(reverseString("03690"));

//4. Write a function called calculateFactorial that takes in a number as a
//parameter and returns the factorial of that number (i.e. the product of all positive integers up to that number).

function calculateFactorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

console.log(calculateFactorial(4));
console.log(calculateFactorial(5));
console.log(calculateFactorial(0));

//5.Write a function called convertTemperature that takes in a temperature
//in Celsius as a parameter and returns the equivalent temperature in Fahrenheit.

function convertTemperature(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

console.log(convertTemperature(0));
console.log(convertTemperature(25)); 
console.log(convertTemperature(100)); 

//.6 Write a function called countVowels that takes in a string as a parameter
//and returns the number of vowels in the string. For example, countVowels("hello") should return 2.

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }

console.log(countVowels("Hello"));
console.log(countVowels("Getachew")); 
console.log(countVowels("DiaaTech"));

  