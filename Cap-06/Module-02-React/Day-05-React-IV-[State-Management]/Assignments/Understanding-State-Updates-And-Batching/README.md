# State Management?
Let suppose I have a game where you need to keep track of the score.
That is called `state`. It is like remembering something Important in my game.

# `useState` Hook
`useState` is like a magic tool in React that helps you manage state easily. It's like a box where I can keep my important information, like the score in my game.

## Delayed State Update
{`import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;`}

### When I click the button, the score increases by 1, but the `console.log(count)` shows the old score. That's because React takes a little time to update the score.

### We can use a special trick called `useEffect` to make sure we see the correct score. It's like a helper that tells React to do something after it updates the score.

## Multiple State Updates
``
Multiple State Updates
``