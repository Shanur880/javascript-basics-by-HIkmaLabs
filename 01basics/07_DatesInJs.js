// Get the current date and time
let currentDate = new Date();

// Display the current date and time in different formats
console.log('Current Date and Time:', currentDate);

// Display the date and time as a string
console.log('Date and Time (String):', currentDate.toString());

// Display the timestamp (milliseconds since Unix epoch)
console.log('Timestamp (Milliseconds):', currentDate.getTime());

// Display individual components of the date and time
console.log('Year:', currentDate.getFullYear());
console.log('Month:', currentDate.getMonth() + 1); // Adding 1 because getMonth() returns 0-indexed months (0 for January)
console.log('Day:', currentDate.getDate());
console.log('Hour:', currentDate.getHours());
console.log('Minute:', currentDate.getMinutes());
console.log('Second:', currentDate.getSeconds());
console.log('Milliseconds:', currentDate.getMilliseconds());

// Display the day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log('Day of the Week:', daysOfWeek[currentDate.getDay()]);

// Display whether it's currently AM or PM
const period = currentDate.getHours() < 12 ? 'AM' : 'PM';
console.log('Period:', period);

// Display whether the current year is a leap year
const isLeapYear = (currentDate.getFullYear() % 4 === 0 && currentDate.getFullYear() % 100 !== 0) || currentDate.getFullYear() % 400 === 0;
console.log('Leap Year:', isLeapYear);

// Display whether the current date is in a daylight saving time
console.log('Daylight Saving Time:', currentDate.getTimezoneOffset() < Math.max(currentDate.getTimezoneOffset(), new Date(currentDate.getFullYear(), 0, 1).getTimezoneOffset()));

// Display the date and time in ISO format
console.log('ISO Format:', currentDate.toISOString());

// Display the date portion only
console.log('Date Only:', currentDate.toDateString());

// Display the time portion only
console.log('Time Only:', currentDate.toTimeString());

// Display the date and time in a custom format
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log('Custom Format:', currentDate.toLocaleString('en-US', options));

// Get the current Unix timestamp in seconds (rounded down)
let currentTimestampInSeconds = Math.floor(Date.now() / 1000);
console.log('Timestamp (Seconds):', currentTimestampInSeconds);
/////**********************examples+++++++++++++?????????????????????????????????///////
// Get the current date and time
let currentDate2 = new Date();

// Example 1: Displaying a countdown to a specific date
let christmasDate = new Date(currentDate.getFullYear(), 11, 25); // Christmas is on December 25th
let daysUntilChristmas = Math.ceil((christmasDate - currentDate) / (1000 * 60 * 60 * 24)); // Calculate the number of days until Christmas
console.log('Days until Christmas:', daysUntilChristmas);

// Example 2: Checking if it's a weekday or weekend
const isWeekday = currentDate.getDay() >= 1 && currentDate.getDay() <= 5; // Monday to Friday
console.log('Is it a weekday?', isWeekday ? 'Yes' : 'No');

// Example 3: Determining business hours
const isBusinessHours = currentDate.getHours() >= 9 && currentDate.getHours() < 17; // Assuming business hours are from 9 AM to 5 PM
console.log('Are we within business hours?', isBusinessHours ? 'Yes' : 'No');

// Example 4: Displaying a message based on the time of day
let greeting;
if (currentDate.getHours() < 12) {
    greeting = 'Good morning!';
} else if (currentDate.getHours() < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}
console.log(greeting);

// Example 5: Formatting a date for display in a user-friendly way
const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
const formattedDate = currentDate.toLocaleString('en-US', options);
console.log('Formatted Date:', formattedDate);

// Example 6: Logging a message at a specific time of day
const alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 7, 30); // Set the alarm for 7:30 AM
if (currentDate.getHours() === alarmTime.getHours() && currentDate.getMinutes() === alarmTime.getMinutes()) {
    console.log('Time to wake up!');
}

// Example 7: Scheduling a task to run at a specific time
const scheduledTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0); // Schedule the task for 12:00 PM
if (currentDate.getTime() === scheduledTime.getTime()) {
    console.log('Task scheduled for 12:00 PM has started.');
}
