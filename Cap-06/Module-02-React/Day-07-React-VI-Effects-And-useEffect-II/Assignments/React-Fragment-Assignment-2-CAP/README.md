# React Fragment-2

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces; for example,/js-101 folder/eval will not work

```
 ✅ Able to submit - 1 mark ( minimum score )
 ✅ Should get a div with id "jsi" which contains three "p" tags - 1 mark
 ✅ The first line present inside the div with id "jsi" should contain "Hello, World!" inside 'p' tag - 1 mark
 ✅ The second line present inside the div with id "jsi" should contain "Numbers: 1, 2, 3, 4, 5" inside 'p' tag - 1 mark
 ✅ The third line present inside the div with id "jsi" should contain "Doubled Numbers: 2, 4, 6, 8, 10" inside 'p' tag - 1 mark
 ✅ Should get a first "p" tag outside of the  div with id "jsi" which contains "LogIn Status: 1" or "LogIn Status: 0" - 1 mark
 ✅ Should get a div with id "cr" which contains one "p" tags and one "button" - 1 mark
 ✅ The "p" tag and the "button" tag present inside the div with id "cr" should be rendered conditionally based on the boolean value - 3 marks (the following condition is expected)
       - If the LogIn Status is "1" 
          - "p" should show "Welcome back, user!"
          - "button" should show "Logout"

          OR

       - If the LogIn Status is "0" 
          - "p" should show "Please log in."
          - "button" should show "Login"

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
		function JSXShowcase() {
			// JavaScript Integration Example
			const greeting = "Hello, World!";
			const numbers = [1, 2, 3, 4, 5];
			let doubleNumbers; // Use map method here to get  double of each elements of the array

			// Conditional Rendering Example

			let isLoggedIn;
			// Assign it value 1 or 0 to see different rendering
			// 1 means "true" and 0 means "false"

			return (
				<div>
					{/* Element Rendering */}
					<h1>JSX Showcase</h1>
					<p>This component demonstrates various JSX capabilities.</p>

					{/* Write code here for JavaScript Integration in JSX */}
					{/* 3  p tag should be here inside a div to render greeting, numbers and doubleNumbers*/}

					{/* Conditional Rendering */}
				</div>
			);
		}

		// Render Your JSXShowcase Component here

		
        
        
        // Refer to the image given in the problem statement
	</script>
</html>

 ```



 # Task Overview

- Create a React element using JSX with specific requirements. Your task is to demonstrate understanding of React Fragments, JSX syntax, class handling, and event handling in React.

<h2 style="color:red">Follow the Task Instructions</h2>
<p style="font-weight: Bold">Requirements</p>

- Use the boiler  plate provided
- Please be careful and focused as the test cases are case sensitive.

#### Boilerplate Explanation

- The boilerplate already has a functional component `JSXShowcase` given.
- The component has 4 variables declared such as `greeting`, `numbers`, `dooubleNumbers` and `isLoggedIn`.
- Out of 4, two variables `greeting` and `numbers` are already declared.

#### Assign Values to Variables
- Use `map function` on the assigned value of `numbers` to get the values for `doubleNumbers`.
- `doubleNumbers` should be an array of containing double value of each elements present in variable `numbers`.
- Assign only `1` or `0` to the `isLoggedIn`.

#### JavaScript Integration in JSX
- Create a `div` with id `jsi` below to the 
paragraph `This component demonstrates various JSX capabilities.` which is already given in the boilerplate.
- The first `p` tag should display the greeting.
- The second `p` tag should display the numbers by joining the numbers array with `,`. Use `.join()` method  to achieve this.
- The third `p` tag should display the doubleNumbers by joining the array with `,`. Use `.join()` method  to achieve this.


** Please refer to the images to get clarity.

#### Conditional rendering
- Create a `p` after the div wih id `jsi` which will display the `LoggedIn Status` as `1 or 0`. i.e 1 is considered as true and 0 is considered as false.
- Create a `div` with id `cr` which will contain 1 `p` tag and 1 `button` tag.
- The content of the `p` tag and `button` tag will be rendered based on the value you have assigned to the variable `isLoggedIn`.
    - If the LogIn Status is "1" 
          - "p" should show "Welcome back, user!"
          - "button" should show "Logout"

    - If the LogIn Status is "0" 
          - "p" should show "Please log in."
          - "button" should show "Login"


#### Rendering Your Component:
- Ensure your component is correctly rendered within the parent `div` with id `root`.

#### Optional Styling : 
- Apply inline styles to make it visually appealing.

### Refer the below image for the output result



</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/vZ6wtjQp/jsx-2-1.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>
</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/YSKKn30j/jsx-2-2.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>

## Submission
- Upon completion, ensure that your HTML file containing all the JSX and Babel code. 
- Ensure your code is well-commented to explain your logic.


## Evaluation Criteria
- Correct implementation of JSX syntax.
- Successful rendering of the all the element with the specified text.
- Apply all the given functions and methods in correct way wherever is asked.
- Proper working of conditional rendering based on the conditions assigned.
- Code readability and proper commenting.

Good luck 🤞
Happy Coding! 🚀
