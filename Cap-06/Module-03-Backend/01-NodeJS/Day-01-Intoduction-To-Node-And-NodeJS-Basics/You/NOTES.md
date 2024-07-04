# Notes

`JS - was meant to run only in the browser`

-Following are some JS engines that are present in modern day browser to run JavaScript:
-Google Chrome - V8 Engine.
-Mozilla Firefox - SpiderMonkey.

-Node was developed by Ryan Dahl to run JS outside of the browser.

-Node is a Runtime environment, that allows JS to run outside of browsers in local machines as well.

## CJS

```
//for importing
const x = require("module")
//for exporting
module.exports = x
```

Common JS method is used to import or export any Node module.
We are not using ES6 method of importing and exporting because almost all the
industries in the market use the CJS method only, and we have to align with the
same as most of the resources present on web also prefers the same.

### Let us create two file in vs code `index.js` & `data.js`

// index.js

```
const { sum, sub, pro, div } = require("./data.js");

sum(10, 10);
sub(20, 5);
pro(12, 12);
div(10, 5);

```

// data.js

```
const sum = (a, b) => {
  console.log(a + b);
};
const sub = (a, b) => {
  console.log(a - b);
};
const pro = (a, b) => {
  console.log(a * b);
};
const div = (a, b) => {
  console.log(a / b);
};

module.exports = {
  sum,
  sub,
  pro,
  div,
};

```

## Node REPL

Read ⇒ Evaluate ⇒ Print ⇒ Loop
Explore this by your own, Do Experiments.

## JavaScript is `Single Threaded`,`Asynchronous`,`Dynamically Typed`,`Concurrent`.

### Documentations

Node ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/
Specifically Go through the following:

1. File System ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
2. DNS ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/dns.html
3. Path ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/path.html
4. Crypto ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/crypto.html
5. HTTP ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/http.html
6. Stream ⇒ https://nodejs.org/dist/latest-v18.x/docs/api/stream.html

## What I learned

- Node Js ==> V8 Engine + Some Other Stuffs (Node Modules and Webpack) // modules of NodeJS
- Module ==> Anything which is exported in JavaScript is called Module
- Type of Modules ==> 3 Types
  1. Inbuilt Modules // Already exported by NodeJS which is created by `Ryan Dahl`
  2. Custom Modules // We can create our own modules
  3. External Modules // We can import any third party modules which are available like using `npm install _________`

by default nodejs support `CJS` not `ESM`

### ASCII & UTF-8

ASCII -> if you want to use a simple english text with some symbols, you can use ASCII.
UTF-8 -> if you want to use any other International language you can use UTF-8 (utf-8)

### Type 1 Inbuilt Modules

- fs module --> fs.readFile(path[, options], callback)
