# Q.01 What is React?

- JavaScript Library for UI: React is a JavaScript library developed by Facebook for building user interfaces. It's especially powerful for creating interactive and dynamic web applications.

- Component-Based Architecture: React follows a component-based architecture, where the UI is built using reusable components. Each component represents a part of the user interface and encapsulates its own logic, making it easier to manage and maintain code.

- Virtual DOM and Declarative Syntax: React uses a virtual DOM to optimize performance by minimizing direct manipulations of the actual DOM. Additionally, it employs a declarative syntax, allowing developers to describe the desired UI state, and React takes care of updating the DOM accordingly, enhancing code readability and maintainability.

# Q.02 Who made React?

React was developed by a team of engineers at Facebook. The project was led by Jordan Walke, a software engineer at Facebook. React was first deployed on Facebook's news feed in 2011 and later made open source in May 2013. Since then, it has gained widespread adoption in the developer community for building user interfaces, and its open-source nature has allowed contributions from developers worldwide.

# Q.03 What is Babel?

Babel is a JavaScript compiler. It allows developers to write code using the latest ECMAScript (ES) standards or even future standards, and then transforms (compiles) that code into an older version of JavaScript that is compatible with most browsers and environments.

# Q.04 How does Babel convert html code in React into valid code?

Babel does not directly convert HTML code into React; instead, it transpiles JSX (a syntax extension for JavaScript often used with React) in HTML-like format into standard JavaScript code that React can interpret and render.

# Q.05 What is ReactDOM used for? Write an example?

`ReactDOM` is a JavaScript library used for efficiently rendering React elements into the DOM, enabling the creation of dynamic and interactive UI.
Ex:-
// Create Root
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

    // Render The Element to Root Element
    rootElement.render(<h1 className="quote">Carpe Diem</h1>);

# Q.06 What are the packages that you need to import for react to work with?

    1. `React` for creating components and
    2. `ReactDOM` for rendering those components into the actual web page.

# Q.07 How do you add react to a web application?

To add React to a web application, include the necessary scripts in your HTML file, such as the React and ReactDOM CDN links, and then create and render React components within your JavaScript code.

# Q.08 What is React.createElement?

`React.createElement` is a function in React that helps create and define a React element by specifying its type, properties, and children.

# Q.09 What are the three properties that createElement accept?

1.  The type of the element (e.g., HTML tag or a React component),
2.  Optional properties or attributes for the element,
3.  The element's children, which can include nested elements or text content.

# Q.10 What is the meaning of render and root?

1.  React, "render" refers to the process of converting React components into actual elements in the DOM that are visible on the web page. It involves taking the virtual representation of components and displaying them in the browser.
2.  "Root" usually refers to the root DOM element where the React application is mounted. In the context of the ReactDOM.render method, the "root" is the HTML element in your actual HTML file where you want to render your React application.
