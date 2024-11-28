<div align="center">
  <h1>Javascript Course</h1>
</div>

<div align="center">
  <strong> Designed to provide a comprehensive understanding of JavaScript.</strong>
</div>

<div align="center">
In just one week, you’ll learn the essential skills needed to build interactive websites and web applications. The course is packed with practical examples, hands-on coding, and real-world projects to ensure a solid foundation.
</div>

# Prerequisites

- PC/Laptop
- Code Editor

# Who is this course for

This course tries to cater for many types of learners:

- new developers,
- not so new developers,
- degree students,
- Everyone else who is looking to learn Javascript

# 📚 Table of Contents

1. [Module 1: Basics of JavaScript](#module-1-basics-of-javascript)
   - [What is JavaScript?](#what-is-javascript)
   - [Setting up the Environment](#setting-up-the-environment)
   - [Event loop](#event-loop)
   - [Variables and Data Types](#variables-and-data-types)
   - [Operations and Comparisons](#operations-and-comparisons)
2. [Module 2: Control Structures](#module-2-control-structures)
   - [Conditionals](#conditionals)
   - [Loops](#loops)
   - [Switch](sSwitch)
3. [Module 3: Functions](#module-3-functions)
   - [Defining Functions](#defining-functions)
   - [Arrow Functions](#arrow-functions)
   - [Function Scope and Closures](#function-scope-and-closures)
4. [Module 4: Data Types Methods](#module-4-data-types-methods)
   - [Numbers](#number-methods)
   - [Strings](#string-methods)
   - [Arrays](#array-methods)
   - [Objects](#object-methods)
   - [Date](#date-methods)
   - [Math](#math-object)
5. [Module 5: Asynchronous JavaScript and Es6 Features](#module-5-asynchronous-javascript-and-es6+-features)

   - [Asynchronous Javascript](#asynchronous-javascript)
   - [Es6 Features and more](#es6-features-and-more)

6. [Module 6: DOM Manipulation](#module-5-dom-manipulation)

   - [Selecting Elements](#selecting-elements)
   - [Event Listeners](#event-listeners)
   - [Creating and Modifying Elements](#creating-and-modifying-elements)

7. [Module 7: Projects](#projects)

8. [Conclusion and Resources](#conclusion-and-resources)

<br>

# Module 1: Basics of JavaScript

## What is JavaScript?

- Brief history of JavaScript.
- Importance of JavaScript in web development.

## Setting up the Environment

Before we dive into coding, let’s set up a proper environment to write and run JavaScript programs.

---

### 1. Installing Node.js

Node.js allows you to run JavaScript outside the browser and is essential for modern JavaScript development.

1. **Download Node.js:**

   - Visit the [Node.js website](https://nodejs.org/). Choose the Prebuilt-Installer.
   - Download the **LTS version** for your operating system.

2. **Install Node.js:**
   - Follow the installation instructions for your OS.
   - Verify the installation by running the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```
     This should display the versions of Node.js and npm (Node Package Manager).

---

### 2. Choosing an Editor

A good code editor makes coding faster and easier. We recommend **Visual Studio Code (VS Code)**.

1. **Download VS Code:**

   - Visit the [VS Code website](https://code.visualstudio.com/).
   - Download and install it for your operating system.

2. **Install Extensions:**
   - Open VS Code and go to the Extensions Marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`).
   - Install the following extensions:
     - **ESLint**: For catching JavaScript errors.
     - **Prettier**: For formatting code.
     - **JavaScript (ES6) Code Snippets**: For faster coding.

---

### 3. Running Your First JavaScript Program

Once the setup is complete, let’s run your first JavaScript program.

1. **Create a File:**

   - Open VS Code.
   - Create a new file and save it as `hello.js`.

2. **Write the Code:**
   ```javascript
   console.log("Hello, World!");
   ```
3. **Open the terminal:**
   Navigate to the folder containing hello.js. Run the command:
   ```
   node hello.js
   ```

## Event Loop

Js handles async events functions or operations through Event loop. The **event loop** is a fundamental concept in JavaScript that ensures non-blocking, asynchronous operations can be executed while maintaining a smooth and efficient flow in the program.

### Key Points About the Event Loop

1. **JavaScript is Single-Threaded**

- JavaScript has one main thread for executing code, meaning it can do only one thing at a time.

2. **Problem with Single-Threading**

- If a task (e.g., a file read or API call) takes too long, it would block other tasks, making the application unresponsive.

3. **Solution: Asynchronous Programming**

- JavaScript uses the event loop to handle long-running tasks asynchronously, so the main thread isn’t blocked.

---

### How the Event Loop Works

**1. Call Stack**

- The call stack is where JavaScript functions to be executed are added.
- It follows a **last-in, first-out (LIFO)** principle: the last function added is executed first.

**2. Web APIs/Task Queue**

- When an asynchronous function (like `setTimeout` or `fetch`) is called, it is offloaded to the browser’s **Web APIs** (or Node.js equivalent APIs).
- These APIs handle the async operation (e.g., waiting for a timer, fetching data).

**3. Callback Queue**

- Once the async task is completed, the callback (function to run after completion) is placed in the **callback queue**.

**4. Event Loop**

- The event loop keeps checking if the call stack is empty.
- If the stack is empty, it pushes the first task from the callback queue into the stack for execution.

**Example**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Callback from setTimeout");
}, 2000);

console.log("End");
```

**Execution Process:**

- "Start" is logged immediately (call stack → console.log).
- setTimeout is called. It delegates the timer to the Web API and moves on.
- "End" is logged (call stack → console.log).
- After 2 seconds, the callback from setTimeout is moved to the callback queue.
- The event loop adds the callback to the call stack (since it’s empty) and executes it, logging "Callback from setTimeout."

**Output:**

```
Start
End
Callback from setTimeout
```

## Variables and Data Types

In JavaScript, you can store and manipulate data using variables. Variables are containers for storing data values. Let’s explore the different types of variables and the data types they can hold.

- Variables are defined using 3 Keywords: `var`, `let`, and `const`.
- Data type are of two types:
    <ul>
    <li>Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`.</li>
    
     <li>Reference types: Objects and Arrays.</li>
    </ul>

**Examples**

```javascript
// String
let firstName = "John";

// Number
let age = 30;

// Boolean
let isActive = true;

// Null
let emptyValue = null;

// Undefined
let notAssigned;

// Symbol
let uniqueID = Symbol("id");

console.log(firstName); // "John"
console.log(age); // 30
console.log(isActive); // true
console.log(emptyValue); // null
console.log(notAssigned); // undefined
console.log(uniqueID); // Symbol(id)

//Non-Primitive Data types
//Objects
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log(person.name); // "Alice"
console.log(person.age); // 25
console.log(person.city); // "New York"

//Arrays
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // "Red"
console.log(colors.length); // 3
```

### `var` vs `let` in JavaScript

In JavaScript, `var` and `let` are used to declare variables, but they have significant differences in terms of **scope**, **hoisting**, and **temporal dead zone**. Below is a comprehensive comparison with examples.

---

#### 1. **Scope**

- **`var`**:  
  Variables declared with `var` have **function scope**. They are accessible throughout the entire function in which they are declared. If declared outside a function, they become **global variables**.

- **`let`**:  
  Variables declared with `let` have **block scope**. They are only accessible within the block `{}` in which they are declared.

**Example**

```javascript
function testVar() {
  if (true) {
    var x = 10; // Function-scoped
  }
  console.log(x); // Output: 10
}

function testLet() {
  if (true) {
    let y = 20; // Block-scoped
  }
  console.log(y); // Error: y is not defined
}

testVar();
testLet();
```

---

#### 2. **Hoisting**

Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compile phase of execution. This means you can use variables and functions before they are declared in your code.

---

#### **Key Points About Hoisting:**

1. Only Declarations Are Hoisted.

   - For variables, only their declaration (e.g., `var x;`) is hoisted, not their initialization (e.g., `x = 5`).
   - For functions, the entire function definition is hoisted.

2. Function and Variable Hoisting.

   - **Function declarations** are fully hoisted, so they can be called before being declared.
   - **Variable declarations** with `var` are hoisted, but their initialization remains in place. This leads to `undefined` if accessed before initialization.

3. `let` and `const` Hoisting:
   - Variables declared with `let` and `const` are also hoisted but are placed in a "temporal dead zone" from the start of the block until their declaration is encountered. Accessing them before declaration results in a `ReferenceError`.

---

#### **Examples of Hoisting:**

#### **Example 1: `var` Hoisting**

```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

**Explanation:**

- The declaration `var a;` is hoisted to the top, but the initialization `a = 5;` is not. So, `a` exists but is `undefined` before the assignment.

#### **Example 2: Function Hoisting**

```javascript
sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

**Explanation:**

- The entire function declaration is hoisted, so you can call the function before defining it.

#### **Example 3: `let` and `const` Hoisting**

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

**Explanation:**

- Although `let x;` is hoisted, it is in the temporal dead zone and cannot be accessed before its declaration.

---

#### **How to Avoid Issues with Hoisting**

1. Declare variables and functions at the top of their scope.
2. Use `let` and `const` instead of `var` to avoid unintended behavior.
3. Follow a consistent coding style to make your code predictable and clear.

---

#### 3. **Temporal Dead Zone (TDZ)**

The **Temporal Dead Zone (TDZ)** refers to the period between the start of a block (or scope) and the point where a variable declared with `let` or `const` is initialized. During this period, accessing the variable will throw a `ReferenceError`.

---

#### **Key Points About TDZ:**

1. **Declaration vs. Initialization:**

   - Variables declared with `let` or `const` are hoisted to the top of their scope but remain **uninitialized** in the TDZ.
   - The TDZ ends when the variable's declaration is executed and it is assigned a value (or initialized).

2. **ReferenceError in the TDZ:**

   - Any attempt to access the variable before its declaration will result in a `ReferenceError`.

3. **Block Scope:**
   - TDZ applies to variables inside their specific block scope, including `{}`, `if`, `for`, and function blocks.

---

#### **Examples of the Temporal Dead Zone:**

#### **Basic Example**

```javascript
console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;
console.log(myVar); // 10
```

**Explanation:**

- `let myVar;` is hoisted, but it's in the TDZ until the line `let myVar = 10;` executes.

---

#### **TDZ with `const`**

```javascript
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;
console.log(myConst); // 20
```

**Explanation:**

- `const` variables also experience a TDZ, just like `let`.

---

#### **TDZ in a Block Scope**

```javascript
{
  console.log(myBlockVar); // ReferenceError: Cannot access 'myBlockVar' before initialization
  let myBlockVar = 30;
  console.log(myBlockVar); // 30
}
```

**Explanation:**

- Inside the block `{}`, the variable `myBlockVar` is hoisted but remains in the TDZ until its declaration is encountered.

---

#### **No TDZ with `var`**

```javascript
console.log(myVar); // undefined
var myVar = 40;
console.log(myVar); // 40
```

**Explanation:**

- Variables declared with `var` are hoisted and initialized to `undefined`, so there's no TDZ.

---

#### **Why Does the TDZ Exist?**

The TDZ ensures that variables are used in a predictable and safe manner. It prevents accessing variables before their declaration, which can lead to confusing bugs.

---

#### **Best Practices to Avoid TDZ Issues:**

1. **Declare Variables at the Top of Their Scope:**

   - Always declare `let` and `const` variables at the beginning of a block or function.

2. **Avoid Using Variables Before Declaration:**

   - Ensure variables are only accessed after their declarations to prevent runtime errors.

3. **Use `const` When Possible:**
   - Since `const` must always be initialized, it minimizes chances of TDZ-related errors.

---

#### 4. **Re-declaration**

- **`var`**:  
  Variables declared with `var` can be **re-declared** in the same scope without errors.

- **`let`**:  
  Variables declared with `let` **cannot** be re-declared in the same scope.

#### Example: Re-declaration

```javascript
var x = 1;
var x = 2; // No error

let y = 1;
let y = 2; // Error: Identifier 'y' has already been declared
```

---

#### 5. **Use in Loops**

- **`var`**:  
  When used in loops, `var` does **not create a new scope** for each iteration, leading to unexpected results.

- **`let`**:  
  When used in loops, `let` creates a **new scope** for each iteration, making it more predictable.

#### Example: Loops

```javascript
// Using var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // Output: 3, 3, 3
}

// Using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // Output: 0, 1, 2
}
```

---

#### Summary Table

| Feature                | `var`                                  | `let`                                  |
| ---------------------- | -------------------------------------- | -------------------------------------- |
| **Scope**              | Function-scoped                        | Block-scoped                           |
| **Hoisting**           | Hoisted and initialized to `undefined` | Hoisted but not initialized            |
| **Temporal Dead Zone** | No                                     | Yes                                    |
| **Re-declaration**     | Allowed in the same scope              | Not allowed in the same scope          |
| **Loop Behavior**      | Does not create a new scope            | Creates a new scope per loop iteration |

---

#### Best Practice

- Use `let` for block-scoped variables as it provides more predictable behavior and avoids issues with hoisting and re-declaration.
- Avoid `var` unless you have a specific reason to use it for legacy code compatibility.

### Operations and Comparisons

#### Arithmetic Operators

- Basic arithmetic: `+`, `-`, `*`, `/`, `%`.
- Increment (`++`) and Decrement (`--`).
- Exponentiation (`**`).

#### Assignment Operators

- `=`: Assigns a value.
- `+=`, `-=`, `*=`, `/=`: Shortcut for arithmetic with assignment.

#### Comparison Operators

- `==`: Equality (loose comparison).
- `===`: Strict equality (type and value).
- `!=` and `!==`: Not equal (loose and strict).
- `<`, `>`, `<=`, `>=`: Relational operators.

#### Logical Operators

- `&&`: Logical AND.
- `||`: Logical OR.
- `!`: Logical NOT.

**Examples**

```javascript
// Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a ** b); // 1000

// Comparison Operators
console.log(a > b); // true
console.log(a === 10); // true

// Logical Operators
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // false
console.log(!isAdmin); // true
```

---

<br>

# Module 2: Control Structures

## Conditionals

- `if`, `else if`, `else`.
- Ternary operator.

**Examples**

```javascript
//if
let age = 18;
if ((age) => 18) {
  console.log("You are eligible to vote!");
}

//If else
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//if else if else
let age = 20;

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
```

## Loops

- `for`, `while`, and `do...while`.
- Loop control: `break` and `continue`.

## Switch

The `switch` statement is used to perform different actions based on different conditions. It’s an alternative to using multiple `if...else if` conditions when you want to compare the same variable or expression against different values.

**Examples**:

```javascript
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("This is a banana.");
    break;
  case "apple":
    console.log("This is an apple.");
    break;
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

---

<br>

# Module 3: Functions and Closures

## 1.Normal Function

A function is a reusable block of code designed to perform a specific task. It can take inputs (parameters), perform operations, and return an output. Functions help organize code, make it reusable, and improve readability.

#### **Syntax of a Function**

```javascript
function functionName(parameters) {
  // Function body
  return value; // Optional
}
```

#### **Example: Basic Function**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

---

## 2. Arrow Function

Arrow functions, introduced in ES6, provide a shorter syntax for writing functions. They are especially useful for short operations, and their behavior differs from traditional functions in how they handle the `this` keyword (arrow functions do not have their own `this`).

#### **Syntax of an Arrow Function**

```javascript
const functionName = (parameters) => {
  // Function body
  return value; // Optional
};
```

- **Single-line return**: If the function body contains a single expression, the `return` keyword and curly braces can be omitted.
- **No parameters**: Use empty parentheses `()` when the function takes no arguments.

#### **Example: Arrow Function**

```javascript
// With one parameter
const square = (num) => num * num;

console.log(square(4)); // Output: 16

// With multiple parameters
const add = (a, b) => a + b;

console.log(add(3, 5)); // Output: 8

// No parameters
const sayHello = () => "Hello, World!";

console.log(sayHello()); // Output: Hello, World!
```

#### **Arrow Function vs Regular Function**

1. **Short Syntax**: Arrow functions are more concise.
2. **`this` Context**: Arrow functions do not bind their own `this`; they inherit it from the surrounding scope.

   - Example:

     ```javascript
     function regularFunction() {
       console.log(this);
     }

     const arrowFunction = () => {
       console.log(this);
     };

     const obj = {
       name: "Alice",
       regular: regularFunction,
       arrow: arrowFunction,
     };

     obj.regular(); // Output: obj (regular function binds `this` to the caller)
     obj.arrow(); // Output: window/global object (arrow function uses outer `this`)
     ```

Use arrow functions for callbacks or one-liners and traditional functions when working with objects or requiring a specific `this` context.

## 3. Function Scope and Closures

In JavaScript, understanding **scope** and **closures** is crucial for writing efficient and bug-free code. These concepts determine how variables are accessed and retained in your programs.

### What is Scope?

**Scope** refers to the accessibility of variables in different parts of your code.

#### Global Scope

Variables declared outside any function or block are in the **global scope**. They are accessible from anywhere in your code.

```javascript
let globalVar = "I'm global";

function showGlobalVar() {
  console.log(globalVar); // Accessible
}

showGlobalVar();
console.log(globalVar); // Accessible
```

#### Local (Function) Scope

Variables declared inside a function are in the **function scope**. They can only be accessed within that function.

```javascript
function localScopeExample() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible
}

localScopeExample();
console.log(localVar); // Error: localVar is not defined
```

#### Block Scope

Variables declared with `let` or `const` inside a block (`{}`) are in the **block scope** and are not accessible outside that block.

```javascript
{
  let blockVar = "I'm block scoped";
  console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined
```

> **Note**: Variables declared with `var` are **not block scoped**. They are function scoped instead.

**Example:**

```javascript
function sayhello() {
  var name = "Hello";
  console.log("Hello");
}
console.log(name); // ReferenceError: name is not defined
```

---

### Closures

A **closure** in JavaScript is a function that retains access to its lexical scope, even after the outer function has finished executing. This means that a closure can access variables from its containing scope, allowing for powerful and flexible code patterns.

#### Key Concept of Closures:

- Functions in JavaScript form **closures**.
- A closure allows a function to retain access to its parent scope, even after the parent function has returned.

#### Example of a Closure:

```javascript
function outerFunction(outerVariable) {
  //innerFunction is a closure
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureFunc = outerFunction("Outside");
closureFunc("Inside"); // Outer: Outside, Inner: Inside
```

In this example:

- `innerFunction` retains access to `outerVariable` even after `outerFunction` has finished executing.

---

#### Practical Examples

##### Example 1: Counter Using Closures

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

Here:

- `createCounter` returns a function that increments and returns `count`.
- The returned function forms a closure over the `count` variable, retaining access to it.

---

##### Example 2: Private Variables Using Closures

```javascript
function secretKeeper(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const mySecret = secretKeeper("I love JavaScript");
console.log(mySecret.getSecret()); // I love JavaScript
mySecret.setSecret("I love Python");
console.log(mySecret.getSecret()); // I love Python
```

Here:

- The `secret` variable is private and can only be accessed or modified using the provided methods.

---

### Common Use Cases of Closures

1. **Data Privacy**
   Closures allow you to create private variables, as seen in the "Private Variables" example above.

2. **Callback Functions**
   Closures are often used in event listeners, `setTimeout`, and asynchronous code.

   ```javascript
   function greet(name) {
     setTimeout(function () {
       console.log(`Hello, ${name}!`);
     }, 1000);
   }

   greet("Alice"); // Logs "Hello, Alice!" after 1 second
   ```

3. **Currying**
   Currying is a functional programming technique often implemented using closures.

   ```javascript
   function multiply(a) {
     return function (b) {
       return a * b;
     };
   }

   const double = multiply(2);
   console.log(double(5)); // 10
   ```

4. **Maintaining State in Loops**
   Closures can "capture" variables for each iteration of a loop.

   ```javascript
   for (let i = 0; i < 3; i++) {
     setTimeout(function () {
       console.log(i); // 0, 1, 2
     }, 1000);
   }
   ```

---

### Key Takeaways

1. **Scope** determines where variables can be accessed.

   - Global Scope: Accessible everywhere.
   - Function Scope: Accessible only within the function.
   - Block Scope: Accessible only within the block (`{}`) when using `let` or `const`.

2. A **closure** is a function that retains access to its surrounding scope, even after the outer function has executed.

3. Closures are widely used in JavaScript for:
   - Data privacy
   - Callbacks and asynchronous operations
   - Functional programming techniques like currying
   - Managing state in loops

---

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

# Module 5: Asynchronous JavaScript and Es6+ Features

## Asynchronous JavaScript

Asynchronous JavaScript is a programming paradigm that allows tasks to run independently of the main execution thread, enabling non-blocking behavior. This is crucial for handling operations like fetching data from an API, reading files, or performing database queries without freezing the user interface.

### **1. Callback Functions**

A **callback function** is a function passed as an argument to another function and executed after the completion of that function.

#### Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Callback executed after fetching data");
});
```

**Limitations of Callbacks:**

- **Callback Hell:** Nesting multiple callbacks can make code harder to read and maintain.
- **Error Handling:** Handling errors in deeply nested callbacks is cumbersome.

---

### **2. Promises**

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. Promises provide better structure for handling asynchronous code than callbacks.

#### States of a Promise:

1. **Pending:** Initial state, neither fulfilled nor rejected.
2. **Fulfilled:** Operation completed successfully.
3. **Rejected:** Operation failed.

#### Example:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulating a condition
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data");
    }
  }, 1000);
});

fetchData
  .then((result) => console.log(result)) // Handles fulfillment
  .catch((error) => console.error(error)) // Handles rejection
  .finally(() => console.log("Operation completed")); // Executes regardless of outcome
```

**Advantages of Promises:**

- Handles asynchronous tasks more cleanly.
- Easier to chain multiple asynchronous operations.

---

### **3. Async/Await**

The **async/await** syntax is a modern way to handle asynchronous code, built on top of Promises. It makes asynchronous code look and behave like synchronous code.

#### Rules:

- An `async` function always returns a Promise.
- The `await` keyword pauses the execution of the async function until the Promise resolves or rejects.

#### Example:

```javascript
async function fetchData() {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulating a condition
        if (success) resolve("Data fetched successfully!");
        else reject("Failed to fetch data");
      }, 1000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Operation completed");
  }
}

fetchData();
```

**Advantages of Async/Await:**

- Cleaner, more readable code.
- Easier to debug due to synchronous-like behavior.

---

### **Comparison:**

| Feature        | Callbacks              | Promises                             | Async/Await                         |
| -------------- | ---------------------- | ------------------------------------ | ----------------------------------- |
| Readability    | Prone to Callback Hell | Better than callbacks                | Clean and synchronous-like          |
| Error Handling | Complex                | `.catch()` simplifies error handling | `try...catch` for structured errors |
| Use Case       | Legacy code            | Moderate complexity async tasks      | Modern, clean async code            |

---

### **Conclusion**

Understanding asynchronous JavaScript is critical for building performant and responsive applications. Starting with callbacks provides foundational knowledge, while Promises and `async/await` offer modern tools for managing asynchronous operations effectively.

### Fetching Data from APIs

Fetching data from an API in JavaScript is commonly done using the `fetch` API. It is a modern and flexible interface for making HTTP requests.

---

#### **Basic Syntax**

```javascript
fetch(url, options)
  .then((response) => {
    // Process the response
  })
  .catch((error) => {
    // Handle errors
  });
```

- **`url`**: The API endpoint you want to fetch data from.
- **`options`** _(optional)_: An object for specifying the HTTP method, headers, body, etc.

---

#### **Fetching Data Example**

Here is a simple example of fetching data from an API using `fetch`:

##### Example: Fetching Data from a Public API

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON from response
  })
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

---

#### **Using `async/await`**

The same operation can be done more cleanly with `async/await`:

##### Example:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Parse JSON from response
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

---

#### **Fetching with Headers and Options**

For APIs requiring headers (e.g., API keys or custom authentication), use the `options` parameter:

##### Example: Fetching with Headers

```javascript
async function fetchWithHeaders() {
  const url = "https://api.example.com/data";
  const options = {
    method: "GET", // HTTP method (GET, POST, etc.)
    headers: {
      "Content-Type": "application/json", // Specify content type
      Authorization: "Bearer YOUR_API_TOKEN", // Add an API key/token
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data with Headers:", data);
  } catch (error) {
    console.error("Error fetching with headers:", error);
  }
}

fetchWithHeaders();
```

---

#### **Fetching with POST Request**

For sending data to an API (e.g., creating a new resource), use the `POST` method and include a request body.

##### Example: Sending a POST Request

```javascript
async function postData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const payload = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  try {
    const response = await fetch(url, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Convert data to JSON
    });
    const data = await response.json();
    console.log("Response Data:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

postData();
```

---

#### **Handling Errors**

Common error-handling scenarios when using `fetch`:

1. Check `response.ok` to handle non-200 HTTP status codes.
2. Use `try...catch` for network or runtime errors.
3. Validate API response data if needed.

##### Example:

```javascript
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("https://api.invalid-url.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

fetchWithErrorHandling();
```

---

## Es6 Features and more

ES6 (ECMAScript 2015) introduced significant updates to JavaScript, and subsequent versions (ES7, ES8, and so on) added even more features. Together, these are often referred to as "ES6+" features. Here's a list of the key ES6+ features:

---

### **ES6 (2015): The Big Leap**

1. **Block-scoped variables (`let`, `const`)**

2. **Arrow Functions**

3. **Template Literals**

   - Multiline strings and embedded expressions using backticks.

   ```javascript
   const name = "John";
   console.log(`Hello, ${name}!`);
   ```

4. **Destructuring Assignment**

   - Extract properties from objects or elements from arrays.

   ```javascript
   const [a, b] = [1, 2];
   const { name, age } = { name: "Alice", age: 25 };
   ```

5. **Default Parameters**

6. **Rest and Spread Operators (`...`)**

   - Rest: Gather remaining elements.
   - Spread: Expand elements.

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((a, b) => a + b, 0);
   }
   const arr = [1, 2, 3];
   const newArr = [...arr, 4];
   ```

7. **Classes**

   - Syntax for defining object-oriented classes.

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }
     greet() {
       return `Hello, ${this.name}`;
     }
   }
   ```

8. **Modules (`import`/`export`)**

   - Modularize code by importing and exporting functions, objects, or classes.

   ```javascript
   // file1.js
   export const hello = () => "Hello";

   // file2.js
   import { hello } from "./file1.js";
   console.log(hello());
   ```

9. **Promises**

10. **Enhanced Object Literals**

    - Shorthand for methods and properties.

    ```javascript
    const name = "Alice";
    const obj = {
      name,
      greet() {
        return `Hello, ${this.name}`;
      },
    };
    ```

11. **`Map` and `Set`**

    - New data structures for unique elements (`Set`) and key-value pairs (`Map`).

    ```javascript
    const map = new Map();
    map.set("key", "value");
    console.log(map.get("key"));
    ```

12. **`Symbol`**

    - Unique and immutable primitive value used as object property keys.

    ```javascript
    const sym = Symbol("unique");
    ```

13. **`for...of` Loop**
    - Iterate over iterable objects like arrays.
    ```javascript
    const arr = [1, 2, 3];
    for (let value of arr) {
      console.log(value);
    }
    ```

---

### **ES7 (2016):**

1. **Exponentiation Operator (`**`)\*\*

2. **`Array.prototype.includes`**
   - Check if an array contains an element.
   ```javascript
   console.log([1, 2, 3].includes(2)); // true
   ```

---

### **ES8 (2017):**

1. **`Object.values` and `Object.entries`**

2. **String Padding (`padStart`, `padEnd`)**

   ```javascript
   console.log("5".padStart(3, "0")); // "005"
   ```

3. **`async`/`await`**

---

### **ES9 (2018):**

1. **Rest/Spread for Objects**

   ```javascript
   const obj = { a: 1, b: 2 };
   const { a, ...rest } = obj; // rest: { b: 2 }
   ```

2. **Asynchronous Iteration**

   ```javascript
   async function process() {
     for await (let value of someAsyncIterable) {
       console.log(value);
     }
   }
   ```

3. **`Promise.prototype.finally`**
   - Execute code after a promise is settled.
   ```javascript
   fetchData().finally(() => console.log("Done"));
   ```

---

### **ES10 (2019):**

1. **`Array.prototype.flat` and `flatMap`**

   ```javascript
   const arr = [1, [2, [3]]];
   console.log(arr.flat(2)); // [1, 2, 3]
   ```

2. **`Object.fromEntries`**

   ```javascript
   const entries = [
     ["a", 1],
     ["b", 2],
   ];
   const obj = Object.fromEntries(entries);
   ```

3. **Optional `catch` Binding**
   ```javascript
   try {
     throw new Error("Error");
   } catch {
     console.log("Caught");
   }
   ```

---

### **ES11 (2020) and Beyond:**

1. **Nullish Coalescing Operator (`??`)**

   ```javascript
   const name = null ?? "Default";
   ```

2. **Optional Chaining (`?.`)**

   ```javascript
   const user = {};
   console.log(user?.address?.street);
   ```

3. **Dynamic Imports**

   ```javascript
   import("./module.js").then((module) => module.doSomething());
   ```

4. **BigInt**

   ```javascript
   const largeNumber = 123n;
   ```

5. **`globalThis`**
   - Standard way to access the global object across environments.

---

# Module 6: DOM Manipulation

## Selecting Elements

- Methods: `getElementById`, `querySelector`, etc.

## Event Listeners

- Adding and removing events.
- Event propagation.

## Creating and Modifying Elements

- Adding, updating, and removing elements dynamically.

---

# Module 6: Advanced Topics

## ES6+ Features

- Template literals.
- Destructuring.
- Spread/rest operators.

## Modules

- Import/export syntax.
- Organizing code into modules.

## Error Handling

- `try`, `catch`, and `finally`.
- Throwing custom errors.

---

# Conclusion and Resources

Congratulations on completing the course! Here are some additional resources to continue learning:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info)
- [FreeCodeCamp](https://www.freecodecamp.org)
