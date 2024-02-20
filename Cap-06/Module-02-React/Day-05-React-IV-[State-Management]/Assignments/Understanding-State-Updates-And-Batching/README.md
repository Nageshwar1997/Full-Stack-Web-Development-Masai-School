# State Management?

Let suppose I have a game where you need to keep track of the score.
That is called `state`. It is like remembering something Important in my game.

# `useState` Hook

`useState` is like a magic tool in React that helps you manage state easily. It's like a box where I can keep my important information, like the score in my game.

## Delayed State Update

```
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // We will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
```

### When I click the button, the score increases by 1, but the `console.log(count)` shows the old score. That's because React takes a little time to update the score.

### We can use a special trick called `useEffect` to make sure we see the correct score. It's like a helper that tells React to do something after it updates the score.

## Multiple State Updates
```
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

```
### Even though we increase the count by 1 three times, the count doesn't become 3. That's because React is smart and it updates things in batches.

### We can tell React to remember the previous count and then add 1 to it. This way, it will count correctly.


# Solution For That
### To achieve the expected behavior of having the count updated to 3, we can use the functional form of setCount, which provides the previous state as an argument

```
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Used functional form of setCount
    setCount(prevCount => prevCount + 1); // Used functional form of setCount
    setCount(prevCount => prevCount + 1); // Used functional form of setCount
    console.log(count); // This will give us updated count correctly --> 3
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

```

## Understanding the asynchronous nature of state updates and how React batches them is crucial for building robust React applications. By utilizing hooks like `useEffect` and the functional form of `setState`, you can handle state updates effectively and achieve the expected behavior in your components.