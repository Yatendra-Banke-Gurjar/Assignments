// 1. Insert an item into array at specific index in JavaScript ?

// let array = [1, 2, 3, 4, 5];
// let indexToInsert = parseInt(prompt("Enter the index no. on which you want to insert new element : [1, 2, 3, 4, 5]"));
// let newItem = parseInt(prompt("Enter the element that you want to insert on the " + indexToInsert + " index no. "));
// for (let i = array.length; i > indexToInsert; i--) {
//     array[i] = array[i - 1];
// }
// array[indexToInsert] = newItem;
// document.write("Updated Array: " , array);



// 2. Remove an element from an array in JavaScript?

// let arr = [10, 20, 34, 50];
// let num = Number(prompt("How many elements do you want to remove from this array :  [10, 20, 34, 50]"));
// for (let i = 0; i < arr.length - num; i++) {
//     document.write(arr[i] + " ");
// }



// 4. Replace an item from an array in JavaScript?


////without for loop 

// let ind = prompt("Enter the index value on which you want to replace the value : [10, 20, 30, 40, 50]");
// let arr = [10, 20, 30, 40, 50];
// if (ind < arr.length) {
//     let newElement = prompt("Enter the value that you want to put on the index " + ind + " of the array :");
//     arr[ind] = newElement;
//     document.write(arr);
// } else {
//     document.write("Enter the valid index no. ")
// }



////with for loop 

// let arr = [20, 30, 40, 21];
// let indVal = prompt("Enter the index value on which you want to replace the value : [20, 30, 40, 21]");
// if (indVal < 0 || indVal >= arr.length) {
//     document.write("Enter a valid index no.");
// } else {
//     let newElement = prompt("Enter the value that you want to put on the index " + indVal + " of the array :");
//     for (let i = 0; i <= indVal; i++) {
//         if (i == indVal) {
//             arr[i] = newElement;
//         }
//     }
//     document.write(arr);
// }




// 5. How do you check if an element exists in an array?

// let numCheck = prompt("Enter the element that you want to check in th array : [10, 20, 30, 40, -40, -50]");
// let arr = [10, 20, 30, 40, -40, -50];
// for (let i = 0; i < arr.length; i++) {
//     if (numCheck == arr[i]) {
//         document.write("Number finded");
//         break;
//     }
//     else {
//         if (i == arr.length - 1) {
//             document.write("Number not finded ");
//         }
//     }
// }




// 6. How do you swap any two numbers in a given array?

// let arr = [10, 20, 39, 40];
// let ind_1, ind_2, temp;
// ind_1 = prompt("Enter the first index no. according this array [10, 20, 39, 40] ");
// if (ind_1 > arr.length || ind_1 < 0) {
//     document.write("Enter a valid index no. ");
// } else {
//     ind_2 = prompt("Enter the second index no. according this array [10, 20, 39, 40] ");
//     if (ind_2 > arr.length || ind_2 < 0) {
//         document.write("Enter a valid index no. ");
//     } else {
//         temp = arr[ind_1]
//         arr[ind_1] = arr[ind_2];
//         arr[ind_2] = temp;
//         document.write(arr);
//     }
// }



// 7. Find the sum of each and every element present in an array. 

// let arr = [1, 1, 1, 1, 1,5];
// let arrSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
// }
// document.write(arrSum);



// 9. Reverse an array in JavaScript?

// let array = [1, 2, 3, 4, 5];
// let length = array.length;
// for (let i = 0, j = length - 1; i < j; i++, j--) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }
// document.write("Reversed Array: ", array);



// 10. Calculate the length of an array using JavaScript?

// let arr = [11, 2, 3, 4, 5, 5,2,3];
// let len = 0;
// for (let i = 0; i <= arr.length; i++) {
//     len = i;
// }
// document.write("The length of the array is : "+len);
