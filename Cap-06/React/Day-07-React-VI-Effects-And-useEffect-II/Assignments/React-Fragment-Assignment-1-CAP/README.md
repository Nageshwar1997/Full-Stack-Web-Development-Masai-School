# React Fragment

## Submission Instructions [Please note]

## Maximum Marks - 5

- The Submission should not contain spaces; for example,/js-101 folder/eval will not work

```
 ✅ Able to submit - 1 mark ( minimum score )
 ✅ The first line should contain "React is a javascript library" inside 'p' tag and it should  come before the div with class "main" - 1 mark
 ✅ The second line should present inside the div with class "main" and should contain "Click the below button to alert 'Hello'" inside 'p' tag - 1 mark
 ✅ A Button should present below to the second line with button-text "Alert Hello"  - 1 mark
 ✅ On Click the button should trigger the onClick event and an alert with text "Hello" should be visible - 1 mark

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


  </script>
</html>

 ```



 # Task Overview

- Create a React element using JSX with specific requirements. Your task is to demonstrate understanding of React Fragments, JSX syntax, class handling, and event handling in React.

<h2 style="color:red">Follow the Task Instructions</h2>
<p style="font-weight: Bold">Requirements</p>

#### Setting Up Your React Component:
- Create a functional component named `MyComponent`.
- This component should return a react fragment wrapped with the below elements.

<h4 >React Fragment Wrapper:.</h4>

- The entire structure should be wrapped within a React Fragment `<React.Fragment> or <>`.
- It should be returned by the functional component `<MyComponent/>`

#### First Paragraph Element: 
- Include a paragraph `<p>` element with the text `React is a javascript library`.

#### Div Element with Class main:
- This div should have the class name `main`.

#### It should contain the following elements:
- A paragraph `<p>` element with the text `Click the below button to alert 'Hello'`.
- A button element with the text `Alert Hello`.

####  Button Functionality:
- Clicking the button should trigger an `alert` with the message `Hello`.
- Define a function inside your component that triggers an alert `Hello` when called.
- Attach this function to the `onClick` event of the button.

#### Rendering Your Component:
- Ensure your component is correctly rendered within the parent `div` with id `root`.

#### Optional Styling : 
- Apply inline styles to make it visually appealing.

### Refer the below image for the output result



</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/FspHtR7b/jsx-1.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>
</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/qv7MpT3P/jsx-2.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>

## Submission
- Upon completion, ensure that your HTML file containing all the JSX and Babel code. 
- Ensure your code is well-commented to explain your logic.


## Evaluation Criteria
- Correct implementation of JSX syntax.
- Successful rendering of the all the element with the specified text.
- Proper working of OnClick function when the button is clicked.
- Code readability and proper commenting.

Good luck, and embrace the power of JSX and Babel with react fragment in your React applications!
Happy Coding! 🚀
