# Module 3: Functions and Closures

## Function

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

### Arrow Function

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

## Function Scope and Closures

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
