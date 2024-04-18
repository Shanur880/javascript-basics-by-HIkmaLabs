// Defining a symbol
const mySym = Symbol("key");

// Creating an object using object literal notation
const JsUser = {
    name: "Shanur",
    "full name": "Shanur Rahman",
    age: 90,
    location: "Patna",
    isLoggedIN: false,
    mySym: "mykey1",
    [mySym]: "mykey2"
};

// Accessing object properties using different methods
console.log('OUTPUT : ', JsUser.age); // Accessing property using dot notation
console.log('OUTPUT : ', JsUser["full name"]); 
// Accessing property using square bracket notation
console.log('OUTPUT : ', mySym);
console.log('OUTPUT : ', JsUser[mySym]); // Accessing property using symbol

// Attempting to modify object properties and freezing the object
JsUser.age = 90; // Setting age to 90 (same value)
Object.freeze(JsUser); // Freezing the object to prevent further modifications
JsUser.location = "kolkata"; // Trying to modify a non-existent property (shouldn't affect the object)

console.log('OUTPUT : ', JsUser); // Outputting the modified object

// Adding methods to the JsUser object
JsUser.greeting = function() {
    console.log('Hello JS user');
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling the methods
JsUser.greeting();
JsUser.greetingTwo();
