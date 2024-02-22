# React and React-DOM Basics

## Submission Instructions [Please note]

## Maximum Marks - 5

- The Submission should not contain spaces; for example,/js-101 folder/eval will not work

```
 ✅ Able to submit - 1 mark ( minimum score )

 ### Test cases for the index.html page
 ✅ Able to show up the text "Seize the day" with paragraph tag having a class name "para". - 4 marks
 ```

 ## Objectives

 - Learn the basics of creating user interface elements using React and ReactDOM, and compare this approach with traditional JavaScript and DOM manipulation.

 <h2 style="color: red">
SetUp Instructions
</h2>
 
- Clone the repository to your local machine.
- Start with the provided boilerplate HTML code inside `index.html`. This includes the necessary React and ReactDOM libraries.
- Don't change/override package.json
- Do not forget to install `node modules`
- Start the development server using `npm start`.

Provided Boilerplate

 ```
 HTML 

 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Template</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    // Your task starts here
  </script>
</html>

 ```

## Task: 
Your goal is to create a <p> element with the text "Seize the day" and display it in the DOM using React and ReactDOM. Follow these steps:

## Create React Element: 
Use React.createElement to create a new React element. This element should be a paragraph `<p>` with the text "Seize the day".

## Render with ReactDOM: 
Utilize ReactDOM to render your created React element inside the `<div id="root"></div>` in your HTML.

## Understand the Process: 
As you work on this, keep in mind the differences between traditional DOM manipulation and using React. React elements are not actual DOM elements; they are lightweight descriptions that React uses to efficiently update the DOM.

## Expected Outcome
Upon completion, your webpage should display a paragraph with the text `Seize the day`. This demonstrates your ability to use React and ReactDOM for creating and rendering UI components.

## Additional Notes
Remember, this task is about understanding the syntax and process differences between traditional JavaScript DOM manipulation and React's approach.
Feel free to experiment with additional properties or styling to enhance your understanding.
Happy Coding! 🚀
