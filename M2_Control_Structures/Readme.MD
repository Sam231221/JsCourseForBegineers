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

### 1. **`for` Loop**

The `for` loop is used when the number of iterations is known beforehand. It consists of three parts:

- **Initialization:** Executes once at the beginning.
- **Condition:** Checks before each iteration; if `false`, exits the loop.
- **Increment/Decrement:** Updates the loop counter after each iteration.

```javascript
// Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 2. **`while` Loop**

The `while` loop is used when the number of iterations is not predetermined. It keeps looping as long as the condition is `true`.

```javascript
// Example: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### 3. **`do...while` Loop**

The `do...while` loop is similar to the `while` loop, except it ensures the code runs **at least once** because the condition is checked **after** the execution.

```javascript
// Example: Print numbers from 1 to 5
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

## Loop Control: `break` and `continue`

### 1. **`break`**

The `break` statement is used to terminate a loop immediately. Execution resumes at the next statement after the loop.

```javascript
// Example: Break when i equals 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1, 2
```

### 2. **`continue`**

The `continue` statement skips the current iteration of the loop and proceeds with the next iteration.

```javascript
// Example: Skip when i equals 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5
```

---

### **Comparison of Loops**

| Loop Type    | Use Case                                       | Key Difference                                                |
| ------------ | ---------------------------------------------- | ------------------------------------------------------------- |
| `for`        | Known number of iterations                     | Initialization, condition, and increment are all in one line. |
| `while`      | Unknown number of iterations; condition first  | Checks condition **before** running the loop.                 |
| `do...while` | At least one execution needed, condition later | Executes code **once** before checking the condition.         |

---

### Example Combining `break` and `continue`

```javascript
// Example: Find the first even number and skip odd numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue; // Skip odd numbers
  console.log(`First even number: ${i}`);
  break; // Exit the loop after finding the first even number
}
// Output: First even number: 2
```

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
