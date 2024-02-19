//    *
//    * *
//    * * *
//    * * * *
//    * * * * *

// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j >= 1; j--) {
//         document.write("*" + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }




//   * * * * *
//   * * * *
//   * * *
//   * *
//   *


// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         document.write("*" + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }



//      *
//     * *
//    * * * 
//   * * * * 
//  * * * * *



// for(let i=1;i<=5;i++){
// for(let j=5;j>=i;j--){
//     document.write("&nbsp;&nbsp;");
// }
// for(let k=1;k<=i;k++){
//     document.write("*"+"&nbsp;&nbsp;");
// }
// document.write("<br>");
// }


//  * * * * *
//   * * * *
//    * * *
//     * *
//      *

// for (let i = 1; i <= 5; i++) {
//     for (let k = 1; k <= i; k++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let j = 5; j >= i; j--) {     
//         document.write("*" + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }




//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *


// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     for (let k = 1; k <= i * 2 - 1; k++) {
//         document.write("*" + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }


//   * * * * * * * * 
//    * * * * * * *
//      * * * * *
//        * * * 
//          *


// for (let i = 1; i <= 5; i++) {
//     for (let k = 1; k <= i; k++) {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     for (let j = 8; j >= i * 2 - 2; j--) {
//         document.write("*" + "&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }




// * * * * *
// *       *
// *       *
// *       *
// * * * * *


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i == 2 && j == 2 || i == 2 && j == 3 || i == 2 && j == 4 || i == 3 && j == 2 || i == 3 && j == 3 || i == 3 && j == 4 || i == 4 && j == 2 || i == 4 && j == 3 || i == 4 && j == 4) {
//             document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//         } else {
//             document.write("*" + "&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }


//  *
//  * *
//  *   *
//  *     *
//  *       *
//  * * * * * *


// for (let i = 1; i <= 6; i++) {
//     for (let j = i; j >= 1; j--) {
//         if (i == 3 && j == 2 ||
//             i == 4 && j == 2 || i == 4 && j == 3 ||
//             i == 5 && j == 2 || i == 5 && j == 3 || i == 5 && j == 4) {
//             document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//         }
//         else {
//             document.write("*" + "&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }



//        *
//       * *
//      *   *
//     *     *
//    * * * * *


// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let k = 1; k <= i; k++) {
//         if (i == 3 && k == 2 ||
//             i == 4 && k == 2 || i == 4 && k == 3) {
//             document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
//         }
//         else {
//             document.write("*" + "&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j+" ");
//     }
//     document.write("<br>");
// }


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(i + " ");
//     }
//     document.write("<br>");
// }


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }



// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2

// for (let i = 5; i > 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }



// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write(i+" ");
//     }
//     document.write("<br>");
// }


//          1
//        1   2
//      1   2   3
//    1   2   3   4
//  1   2   3   4   5

///////////////////////////WITH THREE LOOPS///////////////////////////

// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }
//     for (let k = 1; k <= i; k++) {
// document.write(k + "&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }


///////////////////////////WITH TWO LOOP///////////////////////////

// for (let i = 1; i <= 5; i++) {
//     for (let k = -5; k <= i; k++) {
//         if (i == 1 && k < -1 || i == 2 && k < -2 || i == 3 && k < -3 || i == 4 && k < -4 || i == 5 && k < -5) {
//             document.write("&nbsp;&nbsp;&nbsp;");
//         } else {
//             if (k >= 1) {
//                 document.write(k + "&nbsp;&nbsp;&nbsp;&nbsp;");
//             }
//         }
//     }
//     document.write("<br>");
// }


// 	1
// 	2 3
// 	4 5 6
// 	7 8 9 10


// let num = 1;
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(num + " ");
//         num++;
//     }
//     document.write("<br>");
// }


// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i == 9 && j == 2 || i == 9 && j == 3 || i == 9 && j == 4 || i == 9 && j == 5 || i == 9 && j == 6 || i == 9 && j == 7 || i == 9 && j == 8 || i == 9 && j == 9
//             || i == 8 && j == 3 || i == 8 && j == 4 || i == 8 && j == 5 || i == 8 && j == 6 || i == 8 && j == 7 || i == 8 && j == 8
//             || i == 7 && j == 4 || i == 7 && j == 5 || i == 7 && j == 6 || i == 7 && j == 7
//             || i == 6 && j == 5 || i == 6 && j == 6) {
//             document.write("&nbsp;&nbsp;&nbsp;");
//         } else {
//             document.write("*" + " ");
//         }
//     }
//     document.write("<br>");
// }
