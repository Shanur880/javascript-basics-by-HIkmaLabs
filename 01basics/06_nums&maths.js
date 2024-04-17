/**The **`Number()` constructor** in JavaScript creates **Number objects**. When called as a function, it returns primitive values of type **Number**. Here's how it works:

1. **Creating Number Objects**:
   - You can create a Number object using the `new Number(value)` syntax. The `value` parameter represents the numeric value of the object being created.
   - When used with `new`, it creates a Number object (which is not a primitive).
   - When used without `new`, it coerces the parameter to a number primitive. If the value can't be converted, it returns **NaN**.
   - Example:
     ```javascript
     const a = new Number("123"); // a === 123 is false
     const b = Number("123"); // b === 123 is true
     console.log(a instanceof Number); // true
     console.log(b instanceof Number); // false
     console.log(typeof a); // "object"
     console.log(typeof b); // "number"
     ```
2. **Converting BigInt to a Number**:
   - The `Number()` constructor is the only case where a **BigInt** can be converted to a number without throwing an error.
   - Example:
     ```javascript
     // This works without error
     console.log(Number(1n)); // 1
     ```
   - Note that this may result in loss of precision if the BigInt is too large to be safely represented.

Remember that you should rarely find yourself using `Number` as a constructor; it's more common to use it as a function to convert values to numbers¹. 🤖

Source: Conversation with Bing, 4/17/2024
(1) Number() constructor - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number.
(2) Object() constructor - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object.
(3) JavaScript Constructor Function (with Examples) - Programiz. https://www.programiz.com/javascript/constructor-function. */


const score= 400
console.log('OUTPUT : ',score);
const balance= new Number (100)
console.log('OUTPUT : ',balance); //copy to console web

console.log(balance.toFixed(2))

let sbr="turfa tanveer siddiqui"
console.log('OUTPUT : ',sbr,sbr.length);