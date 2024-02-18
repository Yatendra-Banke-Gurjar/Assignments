// 1. Write a JS code to print numbers from 1 to 10.

// for(let i=1;i<=10;i++){
//     document.write("<br>"+i);
// }


// 2 (a)-- Display sum off all natural numbers from 1 to 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// document.write(sum);


// 2 (b)-- Write two JS code to print Even and Odd numbers from 1 to 100.

// for (let num = 1; num <= 100; num++) {
//     if (num % 2 == 0) {
//         document.write(num + " even <br> ");
//     } else {
//         document.write(num + " odd <br>");
//     }
// }


// 4. Write a JS code to find the power of a number using for loop.(you can also use functions.

// let num = prompt("Enter an number :");
// let pwr = prompt("Enter the power of the above number :");
// function power() {
//     document.write(num + " to the power " + pwr + " equals to " + num ** pwr);
// }
// power();


// 5. Write a JS code to print a stair of numbers using loop.

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     document.write(i);
//     document.write("<br>");
// }



// 6. Write a JS code to print a pyramid of * using loop.

// for(let i=1;i<=5;i++){
// for(let j=5;j>=i;j--){
//     document.write("&nbsp;&nbsp;");
// }
// for(let k=1;k<=i;k++){
//     document.write("*"+"&nbsp;&nbsp;");
// }
// document.write("<br>");
// }



// 7. Write a JS code to find the no of digits in a number.

// let num = prompt("Enter an number :");
// let count = 0;
// for (let i = 1; i <= num.length; i++) {
//     count = i;
// }
// document.write("The number of digits in the given number is " + count);



// 8. Write a JS code to calculate the sum of digits in a number.

// let num = prompt("Enter an number :");
// let r = 0;
// let sum = 0;
// while (num > 0) {
//     r = num % 10;
//     sum = sum + r;
//     num = parseInt(num / 10);
// } document.write("Sum of digits of given numer is " + sum);



// 9 (A)-- Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

// let f = Number(prompt("Enter the first number :"));
// let s = Number(prompt("Enter the second number :"));
// let t = Number(prompt("Enter the third number :"));
// let prod = 0;
// prod = f * s * t;
// if (prod < 0) {
//     alert("The sign of the given three number's product is '-' ");
// } else {
//     alert("The sign of the given three number's product is '+' ");
// }


// 12. Write a JS code to print the Fibonacci series for a given value of N.


// let n = Number(prompt("Enter a number :"));
// let firstNum = 0;
// let secondNum = 1;
// let fab = 0;
// for (let i = 1; i <= n; i++) {
//     document.write(firstNum + " <br> ");
//     fab = firstNum + secondNum;
//     firstNum = secondNum;
//     secondNum = fab;
// }



// 14. Write a JS code to count all letters in a word.


// let word = prompt("Enter a word :");
// let count = 0;
// for (let i = 1; i <= word.length; i++) {
//     count = i;
// }
// document.write("The length of the given word " + "' " + word + " '" + " is " + count);


// 16. Using a for loop print all even numbers up to and including n.


// let n = prompt("Enter a number :");
// for (let i = n; i <= 100; i++) {
//     if (i % 2 == 0) {
//         document.write(i + " is even <br>");
//     }
// }



// 19. Given a number n Calculate the factorial of the number. 

// let n = Number(prompt("Enter a number"));
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }
// document.write("The factorial of the given number " + n + ", is " + fact);


// 20. Display a Text Five Times.

// let txt = prompt("Enter a text :");
// for (let i = 1; i <= 5; i++) {
//     document.write("<br>" + txt);
// }
