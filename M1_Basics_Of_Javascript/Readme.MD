# Module 1: Basics of JavaScript

## What is JavaScript?

JavaScript is a single-threaded asynchronous programming language. But what does it mean? What is this event loop in JavaScript that we all keep talking about?

**What does it mean when we say JavaScript is single-threaded?**

It means that the main thread where JavaScript code is run, runs in one line at a time manner and there is no possibility of running code in parallel.

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
