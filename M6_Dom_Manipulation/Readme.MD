# Module 6: DOM Manipulation

## A. Browser Environments and Specs

### **Global object**

The global object refers to the objects which provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

In a browser it is named `window.`

For Node.js it is `global`, For other environments it may have another name.

Recently, `globalThis` was added to the language, as a standardized name for a global object, that should be supported across all environments. It’s supported in all major browsers.

<aside>
📖 **We’ll use `window` here, assuming that our environment is a browser. If your script may run in other environments, it’s better to use `globalThis` instead.**

</aside>
<br/>
All properties of the global object can be accessed directly:

```javascript
alert("Hello");

// is the same as
window.alert("Hello");
```

### **Window Object**

Here’s a bird’s-eye view of what we have when JavaScript runs in a web browser:

![Capture.PNG](https://res.cloudinary.com/dcgrv6shk/image/upload/v1732876023/Capture.PNG_ro6g1w.png)

There’s a “root” object called `window`. It has two roles:

1. First, it is a global object for JavaScript code.
2. Second, it represents the “browser window” and provides methods to control it.

> **Global functions are methods of the global object:**

For instance, here we use it as a global object:

```jsx
function sayHi() {
  alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();
```

And here we use it as a browser window, to see the window height:

```jsx
alert(window.innerHeight); // inner window height
```

There are more window-specific methods and properties, we’ll cover them later.

### **DOM (Document Object Model)**

Document Object Model represents all page content as objects that can be modified.

The `document` object is the main “entry point” to the page. We can change or create anything on the page using it.

For instance:

```jsx
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => (document.body.style.background = ""), 1000);
```

Here we used `document.body.style`, but there’s much, much more. Properties and methods are described in the specification: [DOM Living Standard](https://dom.spec.whatwg.org/).

<aside>
📖 **The Document Object Model (DOM) specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.**

</aside>

#### MAKING A MODEL OF THE HTML PAGE

When the browser loads a web page, the browser creates a **D**ocument **O**bject **M**odel of the page. The **HTML DOM** model is constructed as a tree of **Objects.** The DOM specifies the way in which the browser should structure this model using a DOM tree. The DOM is called an object model because the model (the DOM tree) is made of objects. Each object represents a different part of the page loaded in the browser window.

![Untitled](https://res.cloudinary.com/dcgrv6shk/image/upload/v1732876023/Untitled_nhfevd.png)

**DOM is not only for browsers**

The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use DOM too.

For instance, server-side scripts that download HTML pages and process them can also use DOM. They may support only a part of the specification though.

**CSSOM for styling**
There’s also a separate specification, CSS Object Model (CSSOM) for CSS rules and stylesheets, that explains how they are represented as objects, and how to read and write them.

CSSOM is used together with DOM when we modify style rules for the document. In practice though, CSSOM is rarely required, because we rarely need to modify CSS rules from JavaScript (usually we just add/remove CSS classes, not modify their CSS rules), but that’s also possible.

### **BOM (Browser Object Model)**

The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

For instance:

- The `navigator` object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: `navigator.userAgent` – about the current browser, and `navigator.platform` – about the platform (can help to differ between Windows/Linux/Mac etc).
- The `location` object allows us to read the current URL and can redirect the browser to a new one.

Here’s how we can use the `location` object:

```jsx
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
```

Functions `alert/confirm/prompt` are also a part of BOM: they are directly not related to the document, but represent pure browser methods of communicating with the user.

**Specifications**

BOM is the part of the general HTML specification.

Yes, you heard that right. The HTML spec at https://html.spec.whatwg.org is not only about the “HTML language” (tags, attributes), but also covers a bunch of objects, methods and browser-specific DOM extensions. That’s “HTML in broad terms”. Also, some parts have additional specs listed at https://spec.whatwg.org.

## B. Dom: Tree Representation, Node and Element

### DOM Tree

- The **Document Object Model (DOM)** represents the structure of an HTML or XML document as a tree of nodes.
- Each element, attribute, or piece of text in the document becomes a **node** in this tree.

For example, for the following HTML:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

The DOM tree looks like:

```
Document
 ├── <html>
      ├── <body>
           ├── <h1> (element node)
           │     └── "Hello, World!" (text node)
           ├── <p> (element node)
                 └── "This is a paragraph." (text node)
```

The backbone of an HTML document is **tags**.

**DOM says: ”Every HTML tag is an object even comments and texts”**

Nested tags are “children” of the enclosing one. The text inside a tag is an object as well. All these objects are accessible using JavaScript, and we can use them to modify the page.

**For example, `document.body` is the object representing the `<body>` tag.**

### DOM Node

- A **node** in the DOM is the basic unit of the DOM tree. It can represent an element, text, attribute, or other components of the document.
- Every node has a `nodeType`, `nodeName`, and `nodeValue` property, which help identify its type and content.

---

### DOM Node Types

The most common **node types** are:

| Node Type     | Constant Value | Description                              |
| ------------- | -------------- | ---------------------------------------- |
| **Element**   | `1`            | Represents an element like `<div>`.      |
| **Attribute** | `2`            | Represents an attribute like `id`.       |
| **Text**      | `3`            | Represents the text inside elements.     |
| **Comment**   | `8`            | Represents a comment `<!-- comment -->`. |
| **Document**  | `9`            | Represents the entire document.          |

For example:

```js
const node = document.querySelector("h1");
console.log(node.nodeType); // 1 (Element Node)
console.log(node.nodeName); // "H1"
```

<br/>

> **Note**: Everything in HTML, even comments, is a node that becomes a part of the DOM.

---

### DOM Element

- A **DOM Element** is a specific type of DOM Node (with `nodeType === 1`).
- Elements represent actual HTML tags like `<div>`, `<h1>`, `<p>`, etc.
- Elements can have child nodes, attributes, and properties like `innerHTML`, `style`, and `classList`.

Example:

```js
const element = document.querySelector("p");
console.log(element.tagName); // "P" (Tag name)
console.log(element.innerHTML); // "This is a paragraph." (Content)
```

---

### DOM Node vs DOM Element

| **Aspect**     | **DOM Node**                                            | **DOM Element**                                                      |
| -------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| **Definition** | A generic unit in the DOM (can be text, element, etc.). | A specific type of node representing an HTML element.                |
| **Type**       | Includes elements, text, attributes, comments, etc.     | Represents only HTML or XML tags.                                    |
| **Properties** | All nodes have `nodeType`, `nodeName`, `nodeValue`.     | Elements have additional properties like `id`, `classList`, `style`. |
| **Example**    | Text node (`<p>Text</p>`, the `"Text"` part).           | `<p>` or `<div>` (element nodes).                                    |

---

### Common DOM Properties in JavaScript

Here are some commonly used DOM properties:

| **Property**                      | **Description**                                                          |
| --------------------------------- | ------------------------------------------------------------------------ |
| `innerHTML`                       | Gets or sets the HTML content inside an element.                         |
| `textContent`                     | Gets or sets the text content of an element (ignores HTML tags).         |
| `classList`                       | Provides methods to add, remove, or toggle classes on an element.        |
| `style`                           | Represents the inline styles of an element.                              |
| `children`                        | Returns a live collection of child elements (ignores text and comments). |
| `parentNode`                      | Gets the parent node of the current node.                                |
| `firstChild` / `lastChild`        | Gets the first or last child node of the element.                        |
| `nextSibling` / `previousSibling` | Gets the next or previous sibling node.                                  |
| `attributes`                      | Returns a collection of all attributes of an element.                    |
| `id`                              | Gets or sets the `id` attribute of an element.                           |

---

### Examples

1. **Accessing an Element Node:**

```js
const element = document.querySelector("h1");
console.log(element.tagName); // "H1"
console.log(element.textContent); // "Hello, World!"
```

2. **Accessing Child Nodes:**

```js
const parent = document.querySelector("body");
console.log(parent.children); // Live collection of child elements
console.log(parent.firstChild); // First child node (could be text or element)
```

3. **Working with Attributes:**

```js
const element = document.querySelector("p");
console.log(element.getAttribute("id")); // Get 'id' attribute
element.setAttribute("data-custom", "value"); // Add a custom attribute
```

4. **Traversing Nodes:**

```js
const node = document.querySelector("h1");
console.log(node.parentNode); // Parent node
console.log(node.nextSibling); // Next sibling node
```

## C. Attributes and Properties

When the browser loads the page, it reads.parse the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.

**Example:**

```javascript
<button id="paragraph" class="paragraph" onclick="changetextthroughId()">Change buttontext.</button>
<script>
let button1 = document.getELementbyId("paragraph")
console.log(button1.id)
</script>
```

But the attribute-property mapping is not one-to-one! In this chapter we’ll pay attention to separate these two notions, to see how to work with them, when they are the same, and when they are different.

### **DOM Properties vs HTML Attributes**

#### 1. **DOM Properties**

- DOM properties are **JavaScript representations** of HTML elements and their attributes.
- They are part of the live DOM object and may not always match the HTML attributes exactly.
- You can manipulate DOM properties directly using JavaScript.

#### 2. **HTML Attributes**

- Attributes are **static values** defined in the HTML source code.
- These are used to set initial values for DOM properties but do not always reflect changes made to the DOM dynamically via JavaScript.

---

### **Key Differences Between DOM Properties and HTML Attributes**

| **Aspect**            | **HTML Attributes**                                     | **DOM Properties**                                    |
| --------------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| **Definition**        | Static values defined in the HTML document.             | Live, dynamic JavaScript properties on DOM nodes.     |
| **Persistence**       | Remain constant unless explicitly modified in the HTML. | Change dynamically when interacting with the DOM.     |
| **Update Sync**       | May not reflect changes to DOM properties.              | Reflect changes made dynamically in JavaScript.       |
| **Data Type**         | Always a string.                                        | Can be of various data types (e.g., boolean, number). |
| **Example (Checked)** | `<input checked="true">`                                | `input.checked = true;` (boolean in JS).              |

---

### **Examples**

#### Example: `value` Attribute vs Property

```html
<input id="myInput" value="Hello" />
```

- **HTML Attribute:**

  ```js
  const input = document.getElementById("myInput");
  console.log(input.getAttribute("value")); // "Hello"
  ```

- **DOM Property:**
  ```js
  input.value = "World"; // Dynamically updates the DOM property
  console.log(input.value); // "World"
  console.log(input.getAttribute("value")); // Still "Hello"
  ```

---

### **Standard HTML Attributes**

Standard HTML attributes are those defined in the HTML specification and supported across browsers.

| **Attribute** | **Usage**                                                         |
| ------------- | ----------------------------------------------------------------- |
| `id`          | Specifies a unique identifier for an element.                     |
| `class`       | Assigns one or more CSS classes to an element.                    |
| `style`       | Defines inline CSS for an element.                                |
| `src`         | Specifies the source of an image, script, or iframe.              |
| `href`        | Specifies the URL of a link.                                      |
| `alt`         | Provides alternative text for images.                             |
| `title`       | Provides additional information about an element (e.g., tooltip). |
| `disabled`    | Disables an input, button, or other element.                      |
| `checked`     | Indicates whether a checkbox or radio button is selected.         |
| `placeholder` | Provides placeholder text in input fields.                        |
| `data-*`      | Custom data attributes used to store extra information.           |

---

### **Non-Standard HTML Attributes**

Non-standard attributes are not part of the HTML specification but can still be used with the `data-*` convention or as custom attributes.

#### Using `data-*` Attributes:

- **Purpose:** To store custom data for an element. Accessible using JavaScript.

Example:

```html
<div id="box" data-color="blue" data-size="large">Box</div>
```

JavaScript:

```js
const box = document.getElementById("box");
console.log(box.dataset.color); // "blue"
console.log(box.dataset.size); // "large"
```

---

### **DOM Properties**

Here’s a list of commonly used DOM properties:

| **Property**  | **Description**                                                  |
| ------------- | ---------------------------------------------------------------- |
| `innerHTML`   | Gets or sets the HTML content of an element.                     |
| `textContent` | Gets or sets the text content of an element (ignoring HTML).     |
| `className`   | Gets or sets the `class` attribute as a string.                  |
| `classList`   | Provides methods to add, remove, or toggle classes.              |
| `style`       | Represents the inline CSS of an element.                         |
| `value`       | Gets or sets the value of an input, textarea, or select element. |
| `checked`     | Gets or sets the checked state of a checkbox or radio button.    |
| `disabled`    | Gets or sets whether an element is disabled.                     |
| `id`          | Gets or sets the `id` of an element.                             |
| `tagName`     | Returns the tag name of the element (e.g., `DIV`, `INPUT`).      |
| `attributes`  | Returns a NamedNodeMap of all attributes of the element.         |

---

### **Dynamic Interaction Example**

HTML:

```html
<button id="btn" disabled>Click Me</button>
```

JavaScript:

```js
const button = document.getElementById("btn");

// Accessing and modifying attributes
console.log(button.getAttribute("disabled")); // ""
button.setAttribute("data-action", "click");
console.log(button.getAttribute("data-action")); // "click"

// Accessing and modifying properties
console.log(button.disabled); // true
button.disabled = false; // Removes the disabled state dynamically
console.log(button.disabled); // false
```

## D. Element Selectors and Event Listeners

### **Element Selectors in JavaScript**

Element selectors are methods in JavaScript used to access and manipulate HTML elements in the DOM (Document Object Model). They allow developers to dynamically interact with web pages.

#### **Common Element Selectors**

1. **`getElementById()`**

   - Selects an element by its unique `id`.
   - Returns a single element.
   - Example:
     ```javascript
     const element = document.getElementById("myId");
     console.log(element);
     ```

2. **`getElementsByClassName()`**

   - Selects all elements with a specific class name.
   - Returns an HTMLCollection (array-like object).
   - Example:
     ```javascript
     const elements = document.getElementsByClassName("myClass");
     console.log(elements);
     ```

3. **`getElementsByTagName()`**

   - Selects all elements with a specific tag name, like `div`, `p`, or `button`.
   - Returns an HTMLCollection.
   - Example:
     ```javascript
     const paragraphs = document.getElementsByTagName("p");
     console.log(paragraphs);
     ```

4. **`querySelector()`**

   - Selects the first element that matches a CSS selector.
   - Returns a single element.
   - Example:
     ```javascript
     const element = document.querySelector(".myClass");
     console.log(element);
     ```

5. **`querySelectorAll()`**
   - Selects all elements that match a CSS selector.
   - Returns a NodeList (array-like object).
   - Example:
     ```javascript
     const elements = document.querySelectorAll("div.myClass");
     console.log(elements);
     ```

#### **Best Practices**

- Use `querySelector` and `querySelectorAll` for more complex selectors as they allow CSS-style selection.
- Use `getElementById` for faster, unique selections.

---

### **Event Listeners in JavaScript**

Event listeners are used to execute code in response to user actions (events) such as clicks, key presses, or mouse movements.

#### **Adding Event Listeners**

The `addEventListener()` method is the most common way to attach events to an element.

#### **Syntax**

```javascript
element.addEventListener(event, function, useCapture);
```

- **`event`**: The type of event (e.g., 'click', 'mouseover').
- **`function`**: The function to execute when the event occurs.
- **`useCapture`**: Optional boolean indicating event propagation phase (default is `false` for the bubbling phase).

#### **Examples**

1. **Click Event**

   ```javascript
   const button = document.querySelector("#myButton");
   button.addEventListener("click", () => {
     alert("Button clicked!");
   });
   ```

2. **Mouseover Event**

   ```javascript
   const div = document.querySelector(".hoverDiv");
   div.addEventListener("mouseover", () => {
     console.log("Mouse is over the div!");
   });
   ```

3. **Keyboard Events**

   ```javascript
   document.addEventListener("keydown", (event) => {
     console.log(`Key pressed: ${event.key}`);
   });
   ```

4. **Removing an Event Listener**
   You can remove an event listener using `removeEventListener()`.

   ```javascript
   const logMessage = () => console.log("Clicked!");
   const button = document.querySelector("#myButton");

   button.addEventListener("click", logMessage);
   button.removeEventListener("click", logMessage);
   ```

---

### **Common Event Types**

- **Mouse Events**: `click`, `dblclick`, `mouseover`, `mouseout`, `mousedown`, `mouseup`, `mousemove`
- **Keyboard Events**: `keydown`, `keyup`, `keypress`
- **Form Events**: `submit`, `change`, `input`, `focus`, `blur`
- **Window Events**: `load`, `resize`, `scroll`

---

### **Key Differences Between Inline Events and `addEventListener()`**

1. **Multiple Event Handlers**:

   - Inline events can only assign one handler per event.
   - `addEventListener` allows multiple handlers for the same event.

2. **Separation of Concerns**:
   - Inline events mix HTML with JavaScript.
   - `addEventListener` keeps JavaScript in a separate script, making code more maintainable.

#### **Inline Example**

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

#### **`addEventListener` Example**

```javascript
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  alert("Clicked!");
});
```

By understanding element selectors and event listeners, developers can create interactive, dynamic, and user-friendly web applications.

## E. Modifying Document with Js

### **Modifying the Document with JavaScript**

JavaScript provides powerful methods to dynamically create, insert, modify, and remove elements in the DOM. Here's a breakdown of common tasks:

---

### **a. Creating Elements with JavaScript**

The `document.createElement()` method is used to create a new HTML element.

#### **Syntax**

```javascript
const newElement = document.createElement("tagName");
```

#### **Example: Creating a New Element**

```javascript
const newDiv = document.createElement("div"); // Creates a <div> element
newDiv.textContent = "Hello, World!"; // Adds text inside the div
newDiv.classList.add("my-class"); // Adds a class to the div
console.log(newDiv); // Outputs: <div class="my-class">Hello, World!</div>
```

#### **Adding Attributes**

Use `setAttribute()` or direct property assignment to add attributes:

```javascript
newDiv.setAttribute("id", "newDivId");
newDiv.style.color = "blue";
```

---

### **b. Insertion Methods in JavaScript**

Once an element is created, it must be added to the DOM using insertion methods.

#### **Common Methods**

1. **`appendChild()`**

   - Appends a new child element to a parent.

   ```javascript
   const parent = document.querySelector("#parentElement");
   parent.appendChild(newDiv); // Adds the newDiv as the last child of the parent
   ```

2. **`prepend()`**

   - Inserts an element as the first child of a parent.

   ```javascript
   parent.prepend(newDiv); // Adds newDiv as the first child
   ```

3. **`insertBefore()`**

   - Inserts a new element before an existing child element.

   ```javascript
   const referenceElement = document.querySelector("#referenceChild");
   parent.insertBefore(newDiv, referenceElement); // Inserts newDiv before referenceChild
   ```

4. **`append()`**

   - Appends multiple elements or text nodes.

   ```javascript
   parent.append("Some text", newDiv);
   ```

5. **`innerHTML`**
   - Inserts HTML content into an element.
   ```javascript
   parent.innerHTML += "<p>This is a new paragraph</p>"; // Adds a new paragraph
   ```

---

### **c. Removing Nodes in JavaScript**

JavaScript provides methods to remove elements from the DOM.

#### **Methods for Node Removal**

1. **`remove()`**

   - Removes an element from the DOM directly.

   ```javascript
   const element = document.querySelector("#removeMe");
   element.remove(); // Removes the element with id 'removeMe'
   ```

2. **`removeChild()`**

   - Removes a child node from its parent.

   ```javascript
   const parent = document.querySelector("#parentElement");
   const child = document.querySelector("#childElement");
   parent.removeChild(child); // Removes childElement from parentElement
   ```

3. **Clearing Content**
   - Use `innerHTML` to remove all children of an element.
   ```javascript
   parent.innerHTML = ""; // Removes all child nodes
   ```

---

### **d. `document.write()`**

The `document.write()` method is used to write directly into the HTML document. However, its usage is considered outdated and is discouraged in modern web development.

#### **Syntax**

```javascript
document.write(content);
```

#### **Example: Writing to the Document**

```javascript
document.write("<h1>Welcome to My Page</h1>");
```

#### **Use Cases**

- Mostly used in early web development for debugging or creating static pages.
- If called after the page has loaded, it will overwrite the entire document:
  ```javascript
  document.write("<p>This will replace the page content!</p>");
  ```

#### **Modern Alternatives**

Instead of `document.write`, use DOM manipulation methods like `innerHTML`, `textContent`, or DOM insertion methods.

---

### **Example: Putting It All Together**

```javascript
// Creating a new element
const newElement = document.createElement("div");
newElement.textContent = "This is a dynamically created div";
newElement.classList.add("dynamic-div");

// Inserting the element
const parent = document.querySelector("#parentElement");
parent.appendChild(newElement);

// Removing an element
const removeMe = document.querySelector("#removeMe");
removeMe.remove();

// Writing directly to the document (discouraged in modern use)
document.write(
  "<p>This is written using document.write (not recommended).</p>"
);
```

## F. Style and Classes

JavaScript allows you to dynamically manipulate the styles and classes of HTML elements, enabling interactive and responsive web applications.

### **Dealing with Styles and Classes in JavaScript DOM**

JavaScript allows you to dynamically manipulate the styles and classes of HTML elements, enabling interactive and responsive web applications.

---

### **1. Working with Inline Styles**

You can modify the `style` property of a DOM element to directly set or change inline styles.

#### **Setting a Single Style**

```javascript
const element = document.querySelector("#myElement");
element.style.color = "blue"; // Changes the text color to blue
element.style.fontSize = "20px"; // Sets the font size to 20px
```

#### **Setting Multiple Styles**

Use the `style` property for multiple styles, but note you must set them individually:

```javascript
element.style.backgroundColor = "yellow";
element.style.margin = "10px";
```

#### **Accessing Computed Styles**

To get the computed styles applied to an element (including those from CSS files or inherited styles), use `getComputedStyle()`.

```javascript
const computedStyles = getComputedStyle(element);
console.log(computedStyles.color); // Logs the computed text color
console.log(computedStyles.margin); // Logs the computed margin
```

---

### **2. Working with Classes**

Using classes is a more scalable and cleaner way to style elements compared to inline styles.

#### **Adding Classes**

Use `classList.add()` to add one or more classes to an element:

```javascript
element.classList.add("highlight", "bold");
```

#### **Removing Classes**

Use `classList.remove()` to remove one or more classes:

```javascript
element.classList.remove("bold");
```

#### **Toggling Classes**

Use `classList.toggle()` to add a class if it doesn’t exist or remove it if it does:

```javascript
element.classList.toggle("hidden"); // Adds or removes 'hidden'
```

#### **Checking if an Element has a Class**

Use `classList.contains()` to check for the presence of a class:

```javascript
if (element.classList.contains("active")) {
  console.log("Element is active");
}
```

---

### **3. Replacing Classes**

Use `classList.replace()` to replace an old class with a new one:

```javascript
element.classList.replace("oldClass", "newClass");
```

---

### **4. Overwriting All Classes**

You can use the `className` property to overwrite all classes, but this is not recommended if you need to keep existing classes:

```javascript
element.className = "newClass"; // Replaces all existing classes
```

---

### **5. Dynamically Adding Styles with JavaScript**

#### **Creating and Appending a `<style>` Element**

You can dynamically create and inject CSS rules into the DOM:

```javascript
const style = document.createElement("style");
style.textContent = `
  .dynamic-class {
    color: red;
    font-size: 18px;
  }
`;
document.head.appendChild(style);

// Apply the new class
element.classList.add("dynamic-class");
```

---

### **6. Inline Styles vs. Classes**

| **Aspect**          | **Inline Styles**                              | **Classes**                                     |
| ------------------- | ---------------------------------------------- | ----------------------------------------------- |
| **Use Case**        | Quick one-off style changes.                   | Reusable, maintainable, and consistent styling. |
| **Scalability**     | Limited, hard to manage for multiple elements. | Highly scalable for multiple elements.          |
| **CSS Specificity** | Higher specificity, may override classes.      | Lower specificity, follows CSS cascading rules. |
| **Maintainability** | Hard to debug and maintain.                    | Easy to manage in CSS files or frameworks.      |

---

### **Examples: Combining Style and Classes**

#### **Hover Effect with Classes**

```javascript
const button = document.querySelector(".myButton");

button.addEventListener("mouseover", () => {
  button.classList.add("hovered");
});

button.addEventListener("mouseout", () => {
  button.classList.remove("hovered");
});
```

#### **Dynamic Theme Switching**

```javascript
const themeToggle = document.querySelector("#themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
```

With CSS:

```css
.dark-mode {
  background-color: black;
  color: white;
}
```

Using these techniques, you can effectively manage the styles and classes of DOM elements to create dynamic and interactive web pages.

---
