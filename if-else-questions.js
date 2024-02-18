// Q.1 -- Check if a number is odd or even in JavaScript. 

// let num = prompt("Enter a number.");
// if (num % 2 == 0) {
//     document.write("Given number " + num + " is even!")
// }
// else {
//     document.write("Given number " + num + " is odd!")
// }



// Q.2 --Find the largest and smallest of two number.

// let num1 = prompt("Enter first number.");
// let num2 = prompt("Enter second number.");
// if (num1 > num2) {
//     document.write("First number " + num1 + " is greater.");
// } else if (num2 > num1) {
//     document.write("Second number " + num2 + " is greater.");
// } else {
//     document.write("Both numbers " + num1 + " & " + num2 + " are equal.");
// }



// 3. Find the largest and smallest of three number.


// let a = prompt("Enter the first number :");
// let b = prompt("Enter the second number :");
// let c = prompt("Enter the third number :");
// if (a > b && a > c) {
//     document.write("First number " + a + " is greater " + "<br>");
//     if (b < c) {
//         document.write("Second number " + b + " is small " + "<br>");
//     } else {
//         document.write("Third number " + c + " is small ");
//     }
// } else if (b > a && b > c) {
//     document.write("Second number " + b + " is greater " + "<br>");
//     if (a < c) {
//         document.write("First number " + a + " is small " + "<br>");
//     } else {
//         document.write("Third number " + c + " is small " + "<br>");
//     }
// } else {
//     document.write("Third number " + c + " is greater " + "<br>");
//     if (a < b) {
//         document.write("First number " + a + " is small " + "<br>");
//     } else {
//         document.write("Second number " + b + " is small ");
//     }
// }


// 4. Check if a triangle is equilateral, scalene, or isosceles

// let first = prompt("Enter first engle :");
// let second = prompt("Enter second engle :");
// let third = prompt("Enter third engle :");
// if (first == second && second == third) {
//     document.write("it's equilateral");
// } else if (first == second || second == third || first == third) {
//     document.write("it's isosceles");
// } else {
//     document.write("it's scalene")
// }


// 5. Find that a given number is present in given range or not


// let start = prompt("Enter the starting range ");
// let end = prompt("Enter the ending range ");
// let number = prompt("Enter an number of which you want to know the presens in between " + start + " and " + end);
// if (number >= start && number <= end || number <= start && number >= end) {
//     document.write(" Given number " + number + " is presents between " + start + " and " + end + " numbers. ");
// } else {
//     document.write(" Given number " + number + " is not presents between " + start + " and " + end + " numbers. ");
// }


// 6. Perform arithmetic operations on two numbers

// let num1 = prompt("Enter num1 :");
// let num2 = prompt("Enter num2 :");
// // +++++++++++

// let add = (Number(num1)) + (Number(num2));
// document.write(" addition of the given numbers is "+add+"<br>");

// // -----------------

// let subs = num1 - num2;
// document.write(" substraction of the given numbers is "+subs+"<br>");

// // ************

// let multi = num1 * num2;
// document.write(" multiplication of the given numbers is "+multi+"<br>");

// //////////////////

// let divide = num1 / num2;
// document.write(" Division of the given numbers is "+divide+"<br>");

// // %%%%%%%%%%%%%%

// let ml = num1 % num2;
// document.write(" Multiplication of the given numbers is "+ml+"<br>");


// 7. Check if a year is leap year or not

// let year = prompt("Enter the year ");
// if (year % 4 == 0) {
//     document.write(year + " is an leap year.");
// } else {
//     document.write(year + " is not an leap year.");
// }



// 8. Find the grade for input marks for five subjects

// let phys = Number(prompt("Enter your physics marks."));
// let chem = Number(prompt("Enter your chemistry marks."));
// let maths = Number(prompt("Enter your mathematics marks."));
// let hindi = Number(prompt("Enter your hindi marks."));
// let english = Number(prompt("Enter your english marks."));
// let obtained_marks = phys + chem + maths + hindi + english;
// document.write("Your have obtained " + obtained_marks + " marks out of 500 marks. <br>");
// document.write("You get " + phys + " marks in physics <br>");
// document.write("You get " + chem + " marks in chemistry <br>");
// document.write("You get " + maths + " marks in mathematics <br>");
// document.write("You get " + hindi + " marks in hindi <br>");
// document.write("You get " + english + " marks in english <br>");
// let percentage = (obtained_marks / 5);
// document.write("Your percentage is " + percentage + " %  <br>");
// if (percentage >= 90 && percentage <= 100) {
//     document.write("You have got A grade <br>");
// }
// else if (percentage >= 80 && percentage < 89) {
//     document.write("You have got B grade <br>");
// }
// else if (percentage >= 70 && percentage < 79) {
//     document.write("You have got C grade <br>");
// }
// else if (percentage >= 60 && percentage < 69) {
//     document.write("You have got D grade <br>");
// }
// else if (percentage >= 50 && percentage < 59) {
//     document.write("You have got E grade <br>");
// }
// else {
//     document.write("Best of luck for future!!! <br>");
// }



// 9. Find number of days in a given month


// let mName = prompt("Enter month name :");
// switch (mName) {
//     case "january":
//         document.write("January contains 31 Days.");
//         break;
//     case "februray":
//         document.write("Feburary contains 28/29 Days");
//         break;
//     case "march":
//         document.write("March contains 31 Days");
//         break;
//     case "april":
//         document.write("April contains 30 Days");
//         break;
//     case "may":
//         document.write("May contains 31 days");
//         break;
//     case "june":
//         document.write("June containes 30 Days");
//         break;
//     case "july":
//         document.write("July containes 31 Days");
//         break;
//     case "august":
//         document.write("August containes 31 Dyas");
//         break;
//     case "september":
//         document.write("September containes 30 Days");
//         break;
//     case "october":
//         document.write("October containes 31 Days");
//         break;
//     case "november":
//         document.write("November containes 30 Days");
//         break;
//     case "december":
//         document.write("December containes 31 Days");
//         break;
//     default:
//         document.write("Esa koi month namij nai hota!!!");
// }


// 10. Final Result for five subjects (percentage and grading system)

// let s1 = Number(prompt("Enter first subject number :"));
// let s2 = Number(prompt("Enter second subject number :"));
// let s3 = Number(prompt("Enter third subject number :"));
// let s4 = Number(prompt("Enter fourth subject number :"));
// let s5 = Number(prompt("Enter fifth subject number :"));
// let obtain_marks = s1 + s2 + s3 + s4 + s5;
// document.write("Your total obtained marks is " + obtain_marks+"<br>");
// let perce = obtain_marks / 5;
// document.write("Your percentage is " + perce + " % <br> ");
// if (perce >= 90 && perce <= 100) {
//     document.write("You have got A grade <br> ");
// }
// else if (perce >= 80 && perce < 89) {
//     document.write("You have got B grade <br> ");
// }
// else if (perce >= 70 && perce < 79) {
//     document.write("You have got C grade <br> ");
// }
// else if (perce >= 60 && perce < 69) {
//     document.write("You have got D grade <br> ");
// }
// else if (perce >= 50 && perce < 59) {
//     document.write("You have got E grade <br> ");
// }
// else {
//     document.write("Best of luck for future!!! <br> ");
// }


// 11. check whether the number is positive, negative or zero.

// let num = parseInt(prompt("Enter a number."));
// if (num < 0) {
//     document.write("Given number " + num + " is negative");
// } else if (num > 0) {
//     document.write("Given number " + num + " is positive");
// } else {
//     document.write("Given number " + num + " is zero ")
// }


// 12. Check if input variable is a number or not (you can use isNaN() method in the conditions)


// let val = Number(prompt("Enter an value"))
// if (isNaN(val)) {
//     document.write("The given value is string");
// } else {
//     document.write("The given value " + val + " is a number");
// }


// 13. Write a JavaScript program to check if a number is divisible by 3, 5, or 7.


// let num = Number(prompt("Enter an number "));
// if (num % 3 == 0) {
//     document.write("The given number " + num + " is divisible by 3");
// } else if (num % 5 == 0) {
//     document.write("The given number " + num + " is divisible by 5");
// } else if (num % 7 == 0) {
//     document.write("The given number " + num + " is divisible by 7");
// } else {
//     document.write("The given number " + num + " is not divisible by 3,5 and 7");
// }



// 14. sort two numbers

// let num1 = prompt("Enter first number :");
// let num2 = prompt("Enter second number :");

// if (num1 < num2) {
//     document.write(num1 + "<br>");
//     document.write(num2);
// } else {
//     document.write(num2 + "<br>");
//     document.write(num1);
// }



// 15. sort three numbers

// let num1 = prompt("Enter the first num ");
// let num2 = prompt("Enter the second num ");
// let num3 = prompt("Enter the third num ");
// if (num1 < num2 && num1 < num3) {
//     document.write(num1 + "<br>");
//     if (num2 < num3) {
//         document.write(num2 + "<br>");
//         document.write(num3);
//     } else {
//         document.write(num3 + "<br>");
//         document.write(num2);
//     }
// } else if (num2 < num1 && num2 < num3) {
//     document.write(num2 + "<br>");
//     if (num1 < num2) {
//         document.write(num1 + "<br>");
//         document.write(num2);
//     } else {
//         document.write(num2 + "<br>");
//         document.write(num1);
//     }
// } else {
//     document.write(num3 + "<br>")
//     if (num1 < num2) {
//         document.write(num1 + "<br>");
//         document.write(num2);
//     } else {
//         document.write(num2 + "<br>");
//         document.write(num1);
//     }
// }



// 16.write a javascript program to check which number is divisible by 3 ,5 or 7 in between 1 to 110 and write in front of that number

// for (let numm = 1; numm <= 110; numm++) {
//     let divt_3;
//     let divt_5;
//     let divt_7;
//     if (numm % 3 == 0 && numm % 5 == 0 && numm % 7 == 0) {
//         divt_3 = numm / 3;
//         divt_5 = numm / 5;
//         divt_7 = numm / 7;
//         document.write("<br> <br>" + numm + " --Divisible by 3 in " + divt_3 + " times by 5 in " + divt_5 + " times & by 7 in " + divt_7 + " times");
//     }
//     else if (numm % 3 == 0 && numm % 5 == 0) {
//         divt_3 = numm / 3;
//         divt_5 = numm / 5;
//         document.write("<br> <br>" + numm + " --Divisible by 3 in " + divt_3 + " times & by 5 in " + divt_5 + " times");
//     }
//     else if (numm % 5 == 0 && numm % 7 == 0) {
//         divt_5 = numm / 5;
//         divt_7 = numm / 7;
//         document.write("<br> <br>" + numm + " --Divisible by 5 in " + divt_5 + " times & by 7 in " + divt_7 + " times");
//     }
//     else if (numm % 3 == 0 && numm % 7 == 0) {
//         divt_3 = numm / 3;
//         divt_7 = numm / 7;
//         document.write("<br> <br>" + numm + " --Divisible by 3 in " + divt_3 + " times & by 7 in " + divt_7 + " times");
//     }
//     else if (numm % 3 == 0) {
//         divt_3 = numm / 3;
//         document.write("<br> <br>" + numm + " --Divisible by 3 in " + divt_3 + " times");
//     }
//     else if (numm % 5 == 0) {
//         divt_5 = numm / 5;
//         document.write("<br> <br>" + numm + " --Divisible by 5 in " + divt_5 + " times");
//     }
//     else if (numm % 7 == 0) {
//         divt_7 = numm / 7;
//         document.write("<br> <br>" + numm + " --Divisible by 7 in " + divt_7 + " times");
//     }
//     else {
//         document.write("<br> <br>" + numm);
//     }
// }
