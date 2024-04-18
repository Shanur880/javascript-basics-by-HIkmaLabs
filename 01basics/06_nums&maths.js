// ```javascript
// /**
//  * The `Number()` constructor in JavaScript creates Number objects. When called as a function, it returns primitive values of type Number. Here's how it works:
//  *
//  * 1. Creating Number Objects:
//  *    - You can create a Number object using the `new Number(value)` syntax. The `value` parameter represents the numeric value of the object being created.
//  *    - When used with `new`, it creates a Number object (which is not a primitive).
//  *    - When used without `new`, it coerces the parameter to a number primitive. If the value can't be converted, it returns NaN.
//  *    - Example:
//  *      ```javascript
//  *      const a = new Number("123"); // a === 123 is false
//  *      const b = Number("123"); // b === 123 is true
//  *      console.log(a instanceof Number); // true
//  *      console.log(b instanceof Number); // false
//  *      console.log(typeof a); // "object"
//  *      console.log(typeof b); // "number"
//  *      ```
//  * 2. Converting BigInt to a Number:
//  *    - The `Number()` constructor is the only case where a BigInt can be converted to a number without throwing an error.
//  *    - Example:
//  *      ```javascript
//  *      // This works without error
//  *      console.log(Number(1n)); // 1
//  *      ```
//  *    - Note that this may result in loss of precision if the BigInt is too large to be safely represented.
//  *
//  * Remember that you should rarely find yourself using `Number` as a constructor; it's more common to use it as a function to convert values to numbers¹. 🤖
//  *
//  * Source: Conversation with Bing, 4/17/2024
//  * (1) Number() constructor - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number.
//  * (2) Object() constructor - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object.
//  * (3) JavaScript Constructor Function (with Examples) - Programiz. https://www.programiz.com/javascript/constructor-function. 
//  */

// // const score = 400
// // console.log('OUTPUT:', score);
// // const balance = new Number(100)
// // console.log('OUTPUT:', balance); // Copy to console web
// // console.log(balance.toFixed(2))
// // let sbr = "Shanur Rahman"
// // console.log('OUTPUT:', sbr, sbr.length);
// // const hundreds = 100000
// // console.log('OUTPUT:', hundreds.toLocaleString('en-EN'));

// // // +++++++++++++++++ MATHEMATICS +++++++++++++++++++++++++++++++++++
// // /**
// //  * JavaScript offers a variety of mathematical operators and functions to perform calculations. Here's a breakdown of some common ones:
// //  *
// //  * Arithmetic Operators:
// //  *
// //  * * Addition (+): Adds two numbers.
// //  *   * Example: `let sum = 10 + 5; // sum will be 15`
// //  * * Subtraction (-): Subtracts one number from another.
//  *   * Example: `let difference = 20 - 7; // difference will be 13`
//  * * Multiplication (*): Multiplies two numbers.
//  *   * Example: `let product = 3 * 4; // product will be 12`
//  * * Division (/): Divides one number by another.
//  *   * Example: `let quotient = 12 / 3; // quotient will be 4`
//  * * Modulo (%): Returns the remainder after dividing one number by another.
//  *   * Example: `let remainder = 10 % 3; // remainder will be 1`
//  * * Exponentiation (**): Raises a number to a power. (Introduced in ES6)
//  *   * Example: `let power = 2 ** 3; // power will be 8`
//  *
//  * Increment (++) and Decrement (--) Operators:
//  *
//  * * Increment (++): Increases a number by 1 (can be pre-increment or post-increment).
//  *   * x++: Increments x after using its current value.
//  *   * ++x: Increments x before using its current value.
//  * * Decrement (--): Decreases a number by 1 (similarly pre-decrement and post-decrement).
//  *
//  * Math Object:
//  *
//  * The built-in `Math` object provides various mathematical functions:
//  *
//  * * Math.abs(x): Returns the absolute value of a number.
//  * * Math.ceil(x): Returns the smallest integer greater than or equal to x.
//  * * Math.floor(x): Returns the largest integer less than or equal to x.
//  * * Math.round(x): Rounds a number to the nearest integer.
//  * * Math.sqrt(x): Returns the square root of a number.
//  * * Math.pow(x, y): Returns x raised to the power of y.
//  * * Math.sin(x): Returns the sine of an angle (in radians).
//  * * Math.cos(x): Returns the cosine of an angle (in radians).
//  * * Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
//  *
//  * Operator Precedence:
//  *
//  * JavaScript follows the order of operations (PEMDAS) when evaluating expressions. Multiplication and division are done before addition and subtraction. You can use parentheses to override the default precedence.
//  *
//  * Remember:
//  *
//  * * Variables used in calculations must be defined and assigned values before use.
//  * * Division by zero will result in `Infinity` or `-Infinity`.
//  *

let PI = Math.PI
console.log('OUTPUT:', PI);
// 
console.log('OUTPUT:', Math.random());
console.log('OUTPUT:', Math.random() * 10 + 1)
console.log('OUTPUT:', Math.floor(Math.random() * 10 + 1))
console.log('OUTPUT:', Math.ceil(Math.random() * 10 + 1))
console.log('OUTPUT:', Math.abs(-5))
console.log('OUTPUT:', Math.pow(2, 3))
console.log('OUTPUT:', Math.sqrt(16))
console.log('OUTPUT:', Math.sin(Math.PI / 2))
console.log('OUTPUT:', Math.cos(Math.PI))
//
const min = 10
const max = 20
console.log('OUTPUT:', Math.floor(Math.random() * (max - min + 1)) + min);