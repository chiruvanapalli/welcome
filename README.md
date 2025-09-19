# what is JSX?

JSX is stands for Javascript with xml. jsx makes us developer light.
JSX is not html its html like syntax.
JSX is a developer friendly.
React Element is not a friendly.
JSX transpiled before reaches to the js engine which will browser understand.
JSX is transpiled by Babel finally.
JSX will sanitize your data and do that, it will prevent malicious things and execute it properly, its a powerful.

## 11. What is Babel and why do we use it?

**Babel** is a JavaScript compiler (or transpiler).  
It allows developers to write modern JavaScript (ES6/ES7/ESNext) and still run it on older browsers or environments that don’t support the latest features.

---

### 🔹 Why we use Babel

1. **Backward Compatibility**

   - Many browsers (especially older ones) don’t support the latest JavaScript features.
   - Babel converts modern code → into older JavaScript (ES5) that all browsers understand.

2. **Use Latest Features Today**

   - You can use `async/await`, arrow functions, classes, optional chaining (`?.`), etc.
   - Babel makes sure your code still runs everywhere.

3. **JSX & React**

   - Babel converts **JSX** (used in React: `<h1>Hello</h1>`) into standard JavaScript (`React.createElement`).

4. **Polyfills**
   - Babel can also add polyfills (like `Promise`, `Object.assign`, etc.) so that missing features are simulated in older browsers.

---

### 🔹 Example

**Modern JavaScript (ES6):**

```js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

## 12. What is Cross-Site Scripting (XSS)?

**Cross-Site Scripting (XSS)** is a type of security vulnerability found in web applications.  
It happens when attackers inject malicious JavaScript into a trusted website, and that script runs in the browser of other users.

---

### 🔹 How it works

1. A website displays user input without properly sanitizing it.
2. An attacker submits a `<script>` tag or malicious code.
3. Other users load the page → the injected script executes in their browser.
4. The attacker can then steal cookies, session tokens, or sensitive data.

---

### 🔹 Example

**Vulnerable code (unsanitized input):**

```html
<p>
  Welcome,
  <?php echo $_GET["name"]; ?>
</p>

🔹 Types of XSS Stored XSS Malicious code is permanently stored on the server
(e.g., in a database, comment field). Every user visiting the page gets
attacked. Reflected XSS Malicious code comes from the URL/query string. Affects
only the user who clicks the crafted link. DOM-based XSS The vulnerability
exists in client-side JavaScript (manipulating document.innerHTML, etc.). 🔹
Prevention Escape output → never directly render raw user input as HTML. Use
sanitization libraries (e.g., DOMPurify). Use frameworks safely → React, Angular
automatically escape data by default. Enable Content Security Policy (CSP).
```

## 14. What is Config-Driven UI?

**Config-Driven UI** means building your application’s UI dynamically based on configuration files (usually JSON, or sometimes YAML).  
Instead of hardcoding layouts and components, you define them in a config, and your app renders the UI according to that config.

---

### 🔹 Why use Config-Driven UI?

1. **Flexibility**

   - Change UI without changing code.
   - Just update the config file.

2. **Faster Customization**

   - Useful for dashboards, forms, admin panels where structure changes often.
   - Example: adding a new field in a form → just update JSON config, no need to redeploy code.

3. **Scalability**

   - Large apps with multiple modules can share a common rendering engine, with configs driving each screen.

4. **Non-developer friendly**
   - Business teams can tweak configs instead of asking devs for UI changes.

---

### 🔹 Example

**Config (formConfig.json):**

```json
{
  "title": "User Registration",
  "fields": [
    { "label": "Name", "type": "text", "required": true },
    { "label": "Email", "type": "email", "required": true },
    { "label": "Password", "type": "password", "required": true },
    { "label": "Subscribe", "type": "checkbox" }
  ]
}
```
