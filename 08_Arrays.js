// Creating an empty array
/**Common Array Methods

JavaScript provides a rich set of methods for working with arrays. Here are some of the most frequently used ones categorized by functionality:

Manipulation Methods

push(): Adds one or more elements to the end of the array and returns the new length.
pop(): Removes and returns the last element from the array.
shift(): Removes and returns the first element from the array.
unshift(): Adds one or more elements to the beginning of the array and returns the new length.
slice(): Extracts a section of the array and returns a new array containing the extracted elements.
splice(): Removes elements from the array and, optionally, replaces them with other elements.
Searching and Sorting Methods

sort(): Sorts the elements of the array in place and returns the modified array. By default, it sorts according to string Unicode points.
find(): Returns the value of the first element in the array that satisfies a provided testing function.
findIndex(): Returns the index of the first element in the array that satisfies a provided testing function. Otherwise, it returns -1.
indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it's not found.
Conversion Methods

join(): Joins all elements of an array into a string, separated by a specified separator (comma by default).
concat(): Merges two or more arrays and returns a new array containing all elements.
toString(): Returns a string representation of the array.
Iteration Methods

forEach(): Executes a provided function once for each array element.
map(): Creates a new array with the results of calling a provided function on every element in the array.
filter(): Creates a new array with all elements that pass the test implemented by the provided function.
Utility Methods

isArray(): Determines whether a value is an array.
Remember, these are just some of the many array methods available in JavaScript. You can find the full list and detailed documentation on Mozilla Developer Network (MDN) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array.

Feel free to ask if you have any specific questions about these methods or working with arrays in JavaScript! */
// let emptyArray = [];

// // Creating an array with initial values
// let fruits = ['Apple', 'Banana', 'Orange'];
// console.log('OUTPUT : ',fruits);
// //push
// fruits.push('grape');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
// //pop
// let removedFruit = fruits.pop();
// console.log(removedFruit); // Output: 'orange'
// console.log(fruits); // Output: ['apple', 'banana']

// //shift
// let removedFruit2 = fruits.shift();
// console.log(removedFruit2); // Output: 'apple'
// console.log(fruits); // Output: ['banana', 'orange']
// //unshift
// fruits.unshift('grape', 'kiwi');
// console.log(fruits); // Output: ['grape', 'kiwi', 'apple', 'banana', 'orange']

// //concat
// let fruits1 = ['apple', 'banana'];
// let fruits2 = ['orange', 'grape'];
// let allFruits = fruits1.concat(fruits2);
// console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']
// //splice()
// fruits.splice(2, 1, 'kiwi'); // Removes 1 element at index 2 and inserts 'kiwi'
// console.log(fruits); // Output: ['apple', 'banana', 'kiwi', 'grape']
// //slice()
// let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to index 2 (not including index 3)
// console.log(slicedFruits); // Output: ['banana', 'orange']
// //forEach()
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//     console.log(num * 2);
// });
// Output:
// 2
// 4
// 6
// 8
// 10



//map
let numbers2 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers2.map((num) => {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//filter(
    let numbers3 = [1, 2, 3, 4, 5];
    let evenNumbers = numbers3.filter((num) => {
        return num % 2 === 0;
    });
    console.log(evenNumbers); // Output: [2, 4]
    const myArr=[1,434,43,6,76,7]

    const newArr=myArr.join()
    console.log('OUTPUT : ',myArr);
    console.log('OUTPUT : ',newArr);
// Creating an array with mixed data types
let mixedArray = [10, 'Hello', true, { key: 'value' }];
console.log('OUTPUT : ',mixedArray);
console.log('OUTPUT : ',mixedArray[0]);

//
const arry2=new Array(1,3,5,6,7,9,0,)
console.log('OUTPUT : ',arry2[4]);


