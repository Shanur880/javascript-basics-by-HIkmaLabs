// let sc ="336758674654654765abc"
// console.log('OUTPUT : ',typeof sc);
// let  valueINNumber =Number(sc)
// console.log('OUTPUT : ',valueINNumber);
// console.log('OUTPUT : ',typeof valueINNumber);
// let score=null
// console.log('OUTPUT : ',score);
// "33" => 33
// "33abc" => Nan  notanumber
// true => 1; false=> 0

// let isLoggedIN =1
// let booleanIsLoggedIN = Boolean (isLoggedIN)
// console.log(booleanIsLoggedIN);

//1 => true; 0 =>false
// "" => false
// "hitesh"=> true

let someNumber =33
let stringNumber =String(someNumber)
console.log('OUTPUT : ',stringNumber);
console.log('OUTPUT : ',typeof stringNumber);


//***************Operation************************ */
let value =3
let negValue =-value            
console.log('OUTPUT : ',negValue);
console.log('OUTPUT : ',2+2);
console.log('OUTPUT : ',2/2);
console.log('OUTPUT : ',2**3);


let srt ="shan" 
let srt1 ="rah"
let str2=srt/srt+srt1/srt
console.log('OUTPUT : ',str2);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

/**It seems like you're trying to understand the difference between the post-increment operator (`x++`) and the pre-increment operator (`++a`). Let's break down what's happening in each case:

1. **Post-increment (`x++`):**
   - The value of `x` (which is 3) is assigned to `y`.
   - Then, `x` is incremented by 1.
   - So, after this operation, `x` becomes 4, and `y` retains the original value of `x` (3).

2. **Pre-increment (`++a`):**
   - `a` is incremented by 1 first.
   - The new value of `a` (which is 4) is assigned to `b`.
   - So, both `a` and `b` end up with the same value, which is 4.

Your expectations are correct! Here's the output based on your code:

```javascript
console.log(`x:${x}, y:${y}`); // Output: "x:4, y:3"
console.log(`a:${a}, b:${b}`); // Output: "a:4, b:4"
```

These outputs match your expectations. Great job! */

