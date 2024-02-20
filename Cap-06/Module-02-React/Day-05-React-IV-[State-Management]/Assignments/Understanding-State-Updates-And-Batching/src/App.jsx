import "./App.css";
import DelayedStateUpdate from "./Components/DelayedStateUpdate";
import DelayedStateUpdateSolution from "./Components/DelayedStateUpdateSolution";

import MultipleStateUpdates from "./Components/MultipleStateUpdates";
import MultipleStateUpdatesSolution from "./Components/MultipleStateUpdatesSolution";

function App() {
  return (
    <div id="container">
      <div>
        <h3>Delayed State Update</h3>
        <DelayedStateUpdate />
      </div>
      <div>
        <h3>Delayed State Update Solution</h3>
        <DelayedStateUpdateSolution />
      </div>
      <div>
        <h3>Multiple State Updates</h3>
        <MultipleStateUpdates />
      </div>
      <div>
        <h3>Multiple State Updates Solution</h3>
        <MultipleStateUpdatesSolution />
      </div>
    </div>
  );
}

export default App;
