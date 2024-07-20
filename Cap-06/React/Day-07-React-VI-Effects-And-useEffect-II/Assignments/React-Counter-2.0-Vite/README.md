## Counter App 2.0

Counter App which shows if the current number is "Even" or "Odd" and if its a Prime Number or Not.

## Tags

react, useState, conditional rendering, cssmodules

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to make submission - 1 mark(default)
 ✅ should render App and have basic structure - 1 mark
 ✅ counter should have initial value 0- 1 mark
 ✅ should have a disabled -1 button -  1 marks
 ✅ should decrement counter by 1 - 1mar
 ✅ should increment counter by 1 -  1 marks
 ✅ should display if the number is even or odd-  1 marks
 ✅ should display if the number is prime-  2 marks
 ✅ should reset counter to 0- 1 mark


```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm start** to run.

## Screenshot of the Application:

<img width="1330" alt="Screenshot 2022-07-01 at 7 47 19 PM" src="https://user-images.githubusercontent.com/86409991/176912347-0b8ec838-9fa3-486b-97f2-7f212e11f8b7.png">

## Features to build

1. The Application should have a `counter` with initial value set to `0`.

   - A `span` with `className="counter"` already exists in the boilerplate.

2. The Application should have three buttons

   - All three buttons are already in the boilerplate with the following `className`
   - `plusonebtn`: This button should increment the count by one.
   - `minusonebtn`: This button should decrement the count by one. This button should be disabled if the count is equal to zero.
   - `resetbtn`: This button should reset te counter to zero.

3. The Application should display if the number is `odd-or-even`.
   - a span with `className="odd-or-even"` is already present in the boilerplate. The span should display `Even` or `Odd` depending on the counter value.
   - These texts are case sensitive so be sure to cross check.

4. The Application should display if the number is `Prime` or Not.
   - a span with `className="is-prime"` is already present in the boilerplate. The span should display `true` or `false` depending on the counter value.
   - **NOTE:** 0 and 1 are not Prime numbers.
   - These texts are case sensitive so be sure to cross check.

#### Optional
- You can add css for the styling part to make your counter look good.
- If you are creating new `.css` files, then do not forget to import them properly. 

## General Instructions (IMPORTANT)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `className="xxxx"` or `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as changing component name, structures might result in giving you zero marks.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time

HAAPY CODING 🚀🤞

