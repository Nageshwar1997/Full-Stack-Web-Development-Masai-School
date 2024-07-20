import { useRef, useEffect } from 'react'
// Step 1: import useRef

function App() {
  // Step 2: Add useRef OR initialize it
  const inputRef = useRef(null);


  useEffect(() => {
    // document.getElementById('todo_input').focus(); // not a react way or good way of doing things
    inputRef.current.focus(); // this is the right way of catching a DOM note/element
    // console.log(inputRef);
    // console.log(inputRef.current);
  },[])

  return (
    <div>
      {/* Step 3: focus on the input field */}
      <input ref={inputRef} type="text" id="todo_input" placeholder='Add Todo' />
    </div>
  )
}

export default App
