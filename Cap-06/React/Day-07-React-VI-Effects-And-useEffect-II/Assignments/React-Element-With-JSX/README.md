# Create React Element with JSX

## Submission Instructions [Please note]

## Maximum Marks - 5

- The Submission should not contain spaces; for example,/js-101 folder/eval will not work

```
 ✅ Able to submit - 1 mark ( minimum score )
 ✅ The first line should contain "Seize the day" inside 'p' tag - 1 mark
 ✅ The second line should contain "Seize the day" inside 'p' tag - 1 mark
 ✅ The third line should contain "Seize the day" or "Make the most of it" based on "true" or "false" respectively inside 'p' tag - 1 mark

 ```

 <h2 style="color:red">
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
    // Basic  Level

    // Intermidiate Level

    // Advance Level

    // Render all the elements below

  </script>
</html>

 ```

 ## Objectives

- In this assignment, you will explore the power of JSX and Babel in React. JSX allows you to write HTML-like syntax within JavaScript, making your development process more efficient. Babel is a JavaScript compiler that transforms JSX into regular JavaScript, understandable by browsers. This task will enhance your understanding of how JSX and Babel work together in React applications.

 # Task Overview

- Your main task is to create a paragraph `<p>` element using JSX that displays the text "Seize the day". This exercise will be divided into three levels: basic, intermediate, and advanced, each requiring different complexities and implementations.

<h2 style="color:red">Basic Level: Simple JSX Element</h2>

<h4 >Create a simple JSX element displaying the text "Seize the day".</h4>

<p style="font-weight: Bold">Requirements</p>

- Use the provided boilerplate HTML code.
- Inside the `script` tag, create a JSX element that represents a paragraph `p` with className `bl`.

<h2 style="color:red">Intermediate Level: Dynamic Content in JSX</h2>

<h4 >Enhance the paragraph element to include dynamic content.</h4>

<p style="font-weight: Bold">Requirements</p>

- Define a JavaScript variable that holds a string with the text "Seize the day".
- Use this variable within your JSX element that represents a paragraph `p` with className `il` to set the content of the paragraph.

<h2 style="color:red">Advanced Level: Conditional Rendering in JSX</h2>

<h4 >Implement conditional rendering within your JSX element.</h4>

<p style="font-weight: Bold">Requirements</p>

- Create a JavaScript variable that holds a `boolean value`.
- Use this variable to conditionally render one of two different paragraphs:
  - If the variable is `true`, display a paragraph with the text "Seize the day".
  - If the variable is `false`, display a paragraph with the text "Make the most of it".
- Ensure the correct paragraph is rendered with className `al`.

<h3 style="color:red">Important Note</h3>

- Make sure you are wrapping all the 3 separate `p` tags inside one container `div`.
-  Finally you have to render the container `div` inside parent `div` with id `root`.
- Please refer the below image to ensure how you should  display the output.

</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/pX9XRfw6/jsx-vite-2.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>
</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/5yr48yCg/jsx-vite.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>

## Submission
Upon completion, submit your HTML file containing all the JSX and Babel code. Ensure your code is well-commented, especially at the advanced level, to explain your logic.


## Evaluation Criteria
- Correct implementation of JSX syntax.
- Successful rendering of the paragraph element with the specified text.
- Proper use of dynamic content and conditional rendering in the intermediate and advanced levels.
- Code readability and proper commenting.

Good luck, and embrace the power of JSX and Babel in your React applications!
Happy Coding! 🚀
