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
