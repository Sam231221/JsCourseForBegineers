# Module 4: Data Types Methods

## Primitive Data Types

### `Number` Methods

The `Number` object in JavaScript provides various methods for working with numbers. Below is a list of commonly used methods, along with descriptions and examples.

---

### 1. `Number.isFinite()`

Checks whether a value is a finite number.

```javascript
console.log(Number.isFinite(25)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("25")); // false
```

---

### 2. `Number.isInteger()`

Determines whether a value is an integer.

```javascript
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(4.2)); // false
console.log(Number.isInteger("42")); // false
```

---

### 3. `Number.isNaN()`

Checks if the value is `NaN` (Not-a-Number).

```javascript
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(42)); // false
console.log(Number.isNaN("NaN")); // false
```

---

### 4. `Number.isSafeInteger()`

Checks if the value is a safe integer (within the safe range).

```javascript
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(42.5)); // false
```

---

### 5. `Number.parseFloat()`

Parses a string and converts it into a floating-point number.

```javascript
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("10px")); // 10
console.log(Number.parseFloat("abc")); // NaN
```

---

### 6. `Number.parseInt()`

Parses a string and converts it into an integer.

```javascript
console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("10.99")); // 10
console.log(Number.parseInt("abc")); // NaN
```

---

### 7. `Number.toFixed()`

Formats a number using fixed-point notation.

```javascript
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toFixed(0)); // "3"
console.log(num.toFixed(5)); // "3.14159"
```

---

### 8. `Number.toExponential()`

Returns the string representation of a number in exponential notation.

```javascript
let num = 123456;
console.log(num.toExponential(2)); // "1.23e+5"
console.log(num.toExponential(0)); // "1e+5"
```

---

### 9. `Number.toLocaleString()`

Formats the number according to the locale-specific settings.

```javascript
let num = 123456.789;
console.log(num.toLocaleString("en-US")); // "123,456.789"
console.log(num.toLocaleString("de-DE")); // "123.456,789"
```

---

### 10. `Number.toPrecision()`

Returns a string representation of a number to a specified precision.

```javascript
let num = 123.456;
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toPrecision(2)); // "1.2e+2"
```

Here’s a Markdown guide that explains various methods available for the `String` object in JavaScript, complete with examples:

### `String` Methods

The `String` object in JavaScript provides numerous methods for working with and manipulating strings. Below is a list of commonly used methods with explanations and examples.

---

### 1. `charAt()`

Returns the character at the specified index.

```javascript
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

---

### 2. `charCodeAt()`

Returns the Unicode value of the character at the specified index.

```javascript
let str = "A";
console.log(str.charCodeAt(0)); // 65
```

---

### 3. `concat()`

Combines two or more strings and returns a new string.

```javascript
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
```

---

### 4. `includes()`

Checks if a string contains a specified substring.

```javascript
let str = "JavaScript is fun";
console.log(str.includes("Script")); // true
console.log(str.includes("script")); // false (case-sensitive)
```

---

### 5. `endsWith()`

Checks if a string ends with a specified substring.

```javascript
let str = "Hello World";
console.log(str.endsWith("World")); // true
console.log(str.endsWith("world")); // false
```

---

### 6. `indexOf()`

Returns the index of the first occurrence of a specified value, or -1 if not found.

```javascript
let str = "Hello World";
console.log(str.indexOf("o")); // 4
console.log(str.indexOf("z")); // -1
```

---

### 7. `lastIndexOf()`

Returns the index of the last occurrence of a specified value.

```javascript
let str = "Hello World";
console.log(str.lastIndexOf("o")); // 7
```

---

### 8. `localeCompare()`

Compares two strings in the current locale.

```javascript
let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (before)
console.log(str2.localeCompare(str1)); // 1 (after)
```

---

### 9. `match()`

Searches for a match using a regular expression and returns an array.

```javascript
let str = "The rain in Spain";
console.log(str.match(/ain/g)); // ["ain", "ain"]
```

---

### 10. `repeat()`

Returns a new string that repeats the original string a specified number of times.

```javascript
let str = "Hi";
console.log(str.repeat(3)); // "HiHiHi"
```

---

### 11. `replace()`

Replaces a substring or matches with a new string.

```javascript
let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"
```

---

### 12. `search()`

Searches for a match using a regular expression and returns the index of the first match.

```javascript
let str = "The rain in Spain";
console.log(str.search(/ain/)); // 5
```

---

### 13. `slice()`

Extracts a portion of a string and returns it as a new string.

```javascript
let str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
```

---

### 14. `split()`

Splits a string into an array based on a specified separator.

```javascript
let str = "apple,banana,cherry";
console.log(str.split(",")); // ["apple", "banana", "cherry"]
```

---

### 15. `startsWith()`

Checks if a string starts with a specified substring.

```javascript
let str = "Hello World";
console.log(str.startsWith("Hello")); // true
```

---

### 16. `substring()`

Extracts characters between two specified indices.

```javascript
let str = "Hello World";
console.log(str.substring(0, 5)); // "Hello"
```

---

### 17. `toLowerCase()`

Converts a string to lowercase.

```javascript
let str = "HELLO";
console.log(str.toLowerCase()); // "hello"
```

---

### 18. `toUpperCase()`

Converts a string to uppercase.

```javascript
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
```

---

### 19. `trim()`

Removes whitespace from both sides of a string.

```javascript
let str = "   Hello World   ";
console.log(str.trim()); // "Hello World"
```

---

### 20. `toString()`

Returns the string representation of the object.

```javascript
let num = 123;
console.log(num.toString()); // "123"
```

---

### `Array` Methods

JavaScript arrays come with a variety of built-in methods that make it easier to manipulate and process data. Here's an overview of the most commonly used array methods, categorized based on their functionality:

---

### **1. Adding/Removing Elements**

#### **push()**

- **Adds** one or more elements to the **end** of an array.
- Returns the new length of the array.

```js
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

#### **pop()**

- **Removes** the last element from an array.
- Returns the removed element.

```js
let arr = [1, 2, 3];
let last = arr.pop(); // last = 3, arr = [1, 2]
```

#### **unshift()**

- **Adds** one or more elements to the **start** of an array.
- Returns the new length of the array.

```js
let arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
```

#### **shift()**

- **Removes** the first element from an array.
- Returns the removed element.

```js
let arr = [1, 2, 3];
let first = arr.shift(); // first = 1, arr = [2, 3]
```

---

### **2. Accessing and Iterating**

#### **forEach()**

- Executes a provided function once for each array element.

```js
let arr = [1, 2, 3];
arr.forEach((num) => console.log(num)); // Logs 1, 2, 3
```

#### **map()**

- Creates a **new array** by applying a function to each element.

```js
let arr = [1, 2, 3];
let doubled = arr.map((num) => num * 2); // [2, 4, 6]
```

#### **filter()**

- Creates a **new array** with elements that pass a provided test.

```js
let arr = [1, 2, 3, 4];
let even = arr.filter((num) => num % 2 === 0); // [2, 4]
```

#### **find()**

- Returns the **first element** that satisfies the provided test.

```js
let arr = [1, 2, 3, 4];
let firstEven = arr.find((num) => num % 2 === 0); // 2
```

#### **findIndex()**

- Returns the **index** of the first element that satisfies the test.

```js
let arr = [1, 2, 3, 4];
let index = arr.findIndex((num) => num % 2 === 0); // 1
```

#### **includes()**

- Checks if an array **contains** a certain element.
- Returns `true` or `false`.

```js
let arr = [1, 2, 3];
arr.includes(2); // true
```

---

### **3. Transforming Arrays**

#### **slice()**

- Returns a **shallow copy** of a portion of an array into a new array.
- Does not modify the original array.

```js
let arr = [1, 2, 3, 4];
let part = arr.slice(1, 3); // [2, 3]
```

#### **splice()**

- **Modifies** the original array by adding/removing elements.
- Returns the removed elements.

```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b"); // arr = [1, "a", "b", 4]
```

#### **concat()**

- Combines two or more arrays into a **new array**.

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2); // [1, 2, 3, 4]
```

#### **flat()**

- Flattens a nested array into a single array up to the specified depth.

```js
let arr = [1, [2, [3, 4]]];
let flat = arr.flat(2); // [1, 2, 3, 4]
```

#### **join()**

- Joins all elements of an array into a string.

```js
let arr = ["Hello", "World"];
let str = arr.join(" "); // "Hello World"
```

---

### **4. Searching and Sorting**

#### **indexOf()**

- Returns the **index** of the first occurrence of a specified value.
- Returns `-1` if the value is not found.

```js
let arr = [1, 2, 3];
arr.indexOf(2); // 1
```

#### **lastIndexOf()**

- Returns the **last index** of a specified value.

```js
let arr = [1, 2, 3, 2];
arr.lastIndexOf(2); // 3
```

#### **sort()**

- Sorts the elements of an array **in place**.
- Default sorting is lexicographical; provide a comparator for custom sorting.

```js
let arr = [3, 1, 2];
arr.sort((a, b) => a - b); // [1, 2, 3]
```

#### **reverse()**

- Reverses the order of the elements **in place**.

```js
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

### **5. Reducing and Accumulating**

#### **reduce()**

- Applies a function to each element to reduce it to a single value.

```js
let arr = [1, 2, 3];
let sum = arr.reduce((acc, num) => acc + num, 0); // 6
```

#### **reduceRight()**

- Similar to `reduce()`, but processes the array from right to left.

```js
let arr = [1, 2, 3];
let result = arr.reduceRight((acc, num) => acc + num, 0); // 6
```

---

### **6. Other Methods**

#### **some()**

- Checks if **any** element satisfies a condition.
- Returns `true` or `false`.

```js
let arr = [1, 2, 3];
arr.some((num) => num > 2); // true
```

#### **every()**

- Checks if **all** elements satisfy a condition.
- Returns `true` or `false`.

```js
let arr = [1, 2, 3];
arr.every((num) => num > 0); // true
```

---

### Summary Table

| Category              | Methods                                                     |
| --------------------- | ----------------------------------------------------------- |
| **Adding/Removing**   | `push`, `pop`, `unshift`, `shift`                           |
| **Iterating**         | `forEach`, `map`, `filter`, `find`, `findIndex`, `includes` |
| **Transforming**      | `slice`, `splice`, `concat`, `flat`, `join`                 |
| **Searching/Sorting** | `indexOf`, `lastIndexOf`, `sort`, `reverse`                 |
| **Reducing**          | `reduce`, `reduceRight`                                     |
| **Testing**           | `some`, `every`                                             |

### `Object` Methods

JavaScript object methods are functions associated with objects. They allow objects to perform actions and provide a way to manipulate and interact with the object's data. Here's an overview of some commonly used object methods in JavaScript:

### 1. `Object.keys(obj)`

Returns an array of the object's own enumerable property names.

```javascript
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); // Output: ['name', 'age']
```

### 2. `Object.values(obj)`

Returns an array of the object's own enumerable property values.

```javascript
console.log(Object.values(user)); // Output: ['Alice', 25]
```

### 3. `Object.entries(obj)`

Returns an array of key-value pairs from the object.

```javascript
console.log(Object.entries(user));
// Output: [['name', 'Alice'], ['age', 25]]
```

---

### 4. `Object.assign(target, ...sources)`

Copies properties from one or more source objects to a target object.

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }
```

---

### 5. `Object.create(proto, propertiesObject)`

Creates a new object with the specified prototype and optional properties.

```javascript
const proto = {
  greet() {
    return "Hi!";
  },
};
const newObj = Object.create(proto);
console.log(newObj.greet()); // Output: Hi!
```

---

### 6. `Object.fromEntries(iterable)`

Transforms a list of key-value pairs into an object.

```javascript
const entries = [
  ["name", "Bob"],
  ["age", 30],
];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // Output: { name: 'Bob', age: 30 }
```

---

#### **Working with `this`**

Inside a method, `this` refers to the object the method was called on.

```javascript
const calculator = {
  num: 10,
  double() {
    return this.num * 2;
  },
};

console.log(calculator.double()); // Output: 20
```

### `Date` Methods

JavaScript provides a powerful `Date` object with various methods to create, manipulate, and format dates and times. Here’s an overview of how to use the `Date` object and its methods:

---

**Creating a Date Object**

You can create a `Date` object in several ways:

```javascript
// Current date and time
const now = new Date();
console.log(now); // Output: Current date and time

// Specific date
const specificDate = new Date("2023-12-25");
console.log(specificDate); // Output: Mon Dec 25 2023 ...

// Using year, month, day, etc. (month is 0-indexed)
const detailedDate = new Date(2023, 11, 25, 10, 30, 15); // Dec 25, 2023 10:30:15
console.log(detailedDate);

// Epoch time (milliseconds since Jan 1, 1970)
const fromEpoch = new Date(0);
console.log(fromEpoch); // Output: Thu Jan 01 1970 00:00:00 GMT

// Using milliseconds since epoch
const customEpoch = new Date(1672531200000); // Corresponds to some specific time
console.log(customEpoch);
```

---

### 1. **Getting Components of a Date**

Use getter methods to retrieve parts of a date.

```javascript
const date = new Date();

console.log(date.getFullYear()); // Output: Current year (e.g., 2024)
console.log(date.getMonth()); // Output: Month (0-11, where 0 is January)
console.log(date.getDate()); // Output: Day of the month (1-31)
console.log(date.getDay()); // Output: Day of the week (0-6, where 0 is Sunday)
console.log(date.getHours()); // Output: Hour (0-23)
console.log(date.getMinutes()); // Output: Minutes (0-59)
console.log(date.getSeconds()); // Output: Seconds (0-59)
console.log(date.getMilliseconds()); // Output: Milliseconds (0-999)
console.log(date.getTime()); // Output: Milliseconds since Jan 1, 1970
console.log(date.getTimezoneOffset()); // Output: Timezone offset in minutes
```

---

### 2. **Setting Components of a Date**

Use setter methods to modify parts of a date.

```javascript
const date = new Date();

date.setFullYear(2025); // Change year to 2025
date.setMonth(11); // Change month to December (11)
date.setDate(31); // Change day to 31
date.setHours(23); // Change hour to 23 (11 PM)
date.setMinutes(59); // Change minutes to 59
date.setSeconds(30); // Change seconds to 30

console.log(date); // Output: Adjusted date
```

---

### 3. **Formatting Dates**

The `Date` object has methods for formatting dates.

#### **toDateString()**

Returns the date in a readable format (without time).

```javascript
console.log(new Date().toDateString()); // Output: Mon Nov 27 2024
```

#### **toTimeString()**

Returns the time in a readable format.

```javascript
console.log(new Date().toTimeString()); // Output: 13:45:30 GMT+0530 (India Standard Time)
```

#### **toLocaleDateString()**

Returns the date in a locale-specific format.

```javascript
console.log(new Date().toLocaleDateString("en-US")); // Output: 11/27/2024
console.log(new Date().toLocaleDateString("en-GB")); // Output: 27/11/2024
```

#### **toLocaleTimeString()**

Returns the time in a locale-specific format.

```javascript
console.log(new Date().toLocaleTimeString("en-US")); // Output: 1:45:30 PM
```

#### **toISOString()**

Returns the date and time in ISO 8601 format.

```javascript
console.log(new Date().toISOString()); // Output: 2024-11-27T08:15:30.000Z
```

#### **toUTCString()**

Returns the date and time in UTC.

```javascript
console.log(new Date().toUTCString()); // Output: Wed, 27 Nov 2024 08:15:30 GMT
```

---

### 4. **Parsing Dates**

The `Date` object can parse date strings.

#### **Date.parse()**

Parses a date string and returns the number of milliseconds since the epoch.

```javascript
const ms = Date.parse("2024-11-27T12:00:00");
console.log(ms); // Output: 1732737600000
```

#### **Date.UTC()**

Creates a UTC date using specified components.

```javascript
const utcDate = new Date(Date.UTC(2024, 10, 27, 12, 0, 0)); // Nov 27, 2024 12:00:00 UTC
console.log(utcDate); // Output: Wed Nov 27 2024 12:00:00 GMT+0000 (UTC)
```

---

### 5. **Date Comparisons**

You can compare dates using simple operators.

```javascript
const date1 = new Date("2024-11-27");
const date2 = new Date("2024-12-01");

console.log(date1 > date2); // Output: false
console.log(date1 < date2); // Output: true
console.log(date1.getTime() === date2.getTime()); // Compare exact timestamps
```

---

### 6. **Date Math**

You can add or subtract time using arithmetic.

```javascript
const now = new Date();
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 1 day
console.log(tomorrow);

const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // Subtract 1 week
console.log(lastWeek);
```

Here’s a comprehensive Markdown guide for the **JavaScript Math Object** that you can include in your full JavaScript course:

---

### `Math` Object

The **Math** object in JavaScript is a built-in object that provides properties and methods for mathematical constants and functions. It is not a constructor, so you cannot create instances of it. Instead, you directly use its properties and methods.

### Math Properties (Constants)

The Math object provides the following mathematical constants:

| Property       | Value              | Description                                       |
| -------------- | ------------------ | ------------------------------------------------- |
| `Math.PI`      | 3.141592653589793  | Ratio of a circle's circumference to its diameter |
| `Math.E`       | 2.718281828459045  | Euler's number (base of natural logarithms)       |
| `Math.LN2`     | 0.6931471805599453 | Natural logarithm of 2                            |
| `Math.LN10`    | 2.302585092994046  | Natural logarithm of 10                           |
| `Math.LOG2E`   | 1.4426950408889634 | Base 2 logarithm of E                             |
| `Math.LOG10E`  | 0.4342944819032518 | Base 10 logarithm of E                            |
| `Math.SQRT2`   | 1.4142135623730951 | Square root of 2                                  |
| `Math.SQRT1_2` | 0.7071067811865476 | Square root of 1/2                                |

---

### Math Methods

#### Basic Math

These methods allow basic arithmetic or calculations:

| Method                | Description                          | Example                  |
| --------------------- | ------------------------------------ | ------------------------ |
| `Math.abs(x)`         | Returns the absolute value of `x`.   | `Math.abs(-7) // 7`      |
| `Math.max(x, y, ...)` | Returns the largest of the inputs.   | `Math.max(1, 3, 2) // 3` |
| `Math.min(x, y, ...)` | Returns the smallest of the inputs.  | `Math.min(1, 3, 2) // 1` |
| `Math.pow(x, y)`      | Returns `x` raised to the power `y`. | `Math.pow(2, 3) // 8`    |
| `Math.sqrt(x)`        | Returns the square root of `x`.      | `Math.sqrt(9) // 3`      |

---

#### Rounding Numbers

| Method          | Description                             | Example                |
| --------------- | --------------------------------------- | ---------------------- |
| `Math.ceil(x)`  | Rounds `x` up to the nearest integer.   | `Math.ceil(4.3) // 5`  |
| `Math.floor(x)` | Rounds `x` down to the nearest integer. | `Math.floor(4.7) // 4` |
| `Math.round(x)` | Rounds `x` to the nearest integer.      | `Math.round(4.5) // 5` |
| `Math.trunc(x)` | Removes the fractional part of `x`.     | `Math.trunc(4.9) // 4` |

---

#### Randomizing Numbers

| Method          | Description                              | Example                       |
| --------------- | ---------------------------------------- | ----------------------------- |
| `Math.random()` | Returns a random number between 0 and 1. | `Math.random() // e.g., 0.57` |

To generate random numbers in a specific range:

```javascript
// Random number between 1 and 10
Math.floor(Math.random() * 10) + 1;
```

---

#### Trigonometric Methods

| Method         | Description                          | Example                      |
| -------------- | ------------------------------------ | ---------------------------- |
| `Math.sin(x)`  | Sine of `x` (in radians).            | `Math.sin(Math.PI / 2) // 1` |
| `Math.cos(x)`  | Cosine of `x` (in radians).          | `Math.cos(0) // 1`           |
| `Math.tan(x)`  | Tangent of `x` (in radians).         | `Math.tan(0) // 0`           |
| `Math.asin(x)` | Arcsine (inverse sine) of `x`.       | `Math.asin(1) // PI/2`       |
| `Math.acos(x)` | Arccosine (inverse cosine) of `x`.   | `Math.acos(1) // 0`          |
| `Math.atan(x)` | Arctangent (inverse tangent) of `x`. | `Math.atan(1) // PI/4`       |

---

#### Exponential and Logarithmic Methods

| Method          | Description                             | Example                 |
| --------------- | --------------------------------------- | ----------------------- |
| `Math.exp(x)`   | Returns `e` raised to the power of `x`. | `Math.exp(1) // 2.718`  |
| `Math.log(x)`   | Returns the natural logarithm of `x`.   | `Math.log(Math.E) // 1` |
| `Math.log10(x)` | Returns the base-10 logarithm of `x`.   | `Math.log10(1000) // 3` |

---

### Examples

```javascript
// Example 1: Using Math.random() to simulate a dice roll
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled a ${diceRoll}`);

// Example 2: Calculating the hypotenuse using Math methods
const a = 3,
  b = 4;
const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(`Hypotenuse: ${hypotenuse}`);

// Example 3: Finding the maximum of an array
const numbers = [3, 7, 2, 9];
const maxNumber = Math.max(...numbers);
console.log(`Max number: ${maxNumber}`);
```

---

### 🔑 Key Takeaways

- **Math** is not a constructor; you use it directly.
- It provides constants for common mathematical values.
- It has methods for arithmetic, rounding, random number generation, trigonometry, and more.

---
