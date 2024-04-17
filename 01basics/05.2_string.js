// Certainly! Let's dive into the details of the JavaScript string methods you've used in your code snippet:

// 1. **String Length**:
//    - The `length` property returns the length of a string. For example:
//      ```javascript
//      let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//      let length = text.length;
//      console.log(`Length of the string: ${length}`);
//      ```
//      Output: Length of the string: 26

// 2. **Extracting String Characters**:
//    - You can extract characters from a string using various methods:
//      - `charAt(index)`: Returns the character at the specified index.
//      - `charCodeAt(index)`: Returns the Unicode value of the character at the specified index.
//      - `at(index)`: A new method introduced in ES2022, similar to `charAt()`, but allows negative indexes.
//      - Property access `[index]`: Access characters using array-like notation.
//    - Example:
//      ```javascript
//      let text = "HELLO WORLD";
//      let char = text.charAt(0); // Returns 'H'
//      let unicode = text.charCodeAt(0); // Returns 72
//      let thirdLetter = text.at(2); // Returns 'L'
//      console.log(`First character: ${char}, Unicode value: ${unicode}, Third letter: ${thirdLetter}`);
//      ```
//      Output: First character: H, Unicode value: 72, Third letter: L

// 3. **Extracting String Parts**:
//    - You can extract parts of a string using:
//      - `slice(start, end)`: Extracts a substring from `start` to `end` (end not included).
//      - `substring(start, end)`: Similar to `slice()`, but doesn't accept negative indexes.
//      - `substr(start, length)`: Extracts a substring from `start` with a specified `length`.
//    - Example:
//      ```javascript
//      let originalString = "Shanur rahman the DevOps and DevKing";
//      let extractedSlice = originalString.slice(0, 5); // Returns "Shanu"
//      let extractedSubstring = originalString.substring(0, 5); // Returns "Shanu"
//      let extractedSubstr = originalString.substr(0, 5); // Returns "Shanur"
//      console.log(`Slice: ${extractedSlice}, Substring: ${extractedSubstring}, Substr: ${extractedSubstr}`);
//      ```
//      Output: Slice: Shanu, Substring: Shanu, Substr: Shanur

// 4. **Finding Substring Position**:
//    - You can find the position of a substring using:
//      - `indexOf(substring)`: Returns the index of the first occurrence of `substring`.
//    - Example:
//      ```javascript
//      let position = originalString.indexOf("rahman"); // Returns 7
//      console.log(`Position of "rahman": ${position}`);
//      ```
//      Output: Position of "rahman": 7

// 5. **String Case Manipulation**:
//    - Convert a string to uppercase or lowercase:
//      - `toUpperCase()`: Converts the entire string to uppercase.
//      - `toLowerCase()`: Converts the entire string to lowercase.
//    - Example:
//      ```javascript
//      let upperCaseString = originalString.toUpperCase();
//      let lowerCaseString = originalString.toLowerCase();
//      console.log(`Uppercase: ${upperCaseString}, Lowercase: ${lowerCaseString}`);
//      ```
//      Output: Uppercase: SHANUR RAHMAN THE DEVOPS AND DEVKING, Lowercase: shanur rahman the devops and devking

// 6. **Trimming Whitespace**:
//    - Remove leading and trailing spaces:
//      - `trim()`: Removes whitespace from both ends.
//      - `trimStart()`: Removes leading whitespace.
//      - `trimEnd()`: Removes trailing whitespace.
//    - Example:
//      ```javascript
//      let trimmedString = originalString.trim();
//      console.log(`Trimmed string: "${trimmedString}"`);
//      ```
//      Output: Trimmed string: "Shanur rahman the DevOps and DevKing"

// Remember that all these methods return new strings without altering the original string. Feel free to explore more string methods and experiment with them! 😊🚀. 

// Source: Conversation with Bing, 4/17/2024
// (1) Python String Methods - W3Schools. https://www.w3schools.com/python/python_ref_string.asp.
// (2) Useful string methods - Learn web development | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods.
// (3) An Overview of Python String Methods | LearnPython.com. https://learnpython.com/blog/python-string-methods/.
// (4) String - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.
// (5) JavaScript String Methods - GeeksforGeeks. https://www.geeksforgeeks.org/javascript-string-methods/.
// (6) Common methods for manipulating strings in JavaScript. https://bing.com/search?q=JavaScript+string+methods.
// (7) JavaScript String Methods - W3Schools. https://www.w3schools.com/js/js_string_methods.asp.
// (8) Javascript String Methods List (with Examples) - Tutorials Tonight. https://www.tutorialstonight.com/js/javascript-string-methods.
// (9) String - JavaScript | MDN. http://devdoc.net/web/developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/string.html.
// (10) en.wikipedia.org. https://en.wikipedia.org/wiki/String_(computer_science).