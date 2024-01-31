// Import the Container component
import Container from "./Container.jsx";

// App Component with Bonus
const AppWithBonus = () => (
  <div>
    <Container borderColor="red">
      <User name="Alice" age={30} email="alice@example.com" />
    </Container>

    <Container borderColor="green">
      <ScoreCard />
    </Container>

    <Container borderColor="blue">
      <p>Some text content</p>
    </Container>

    <Container borderColor="purple">
      <h3>Another Component</h3>
    </Container>
  </div>
);

// Render the App with Bonus component
// ReactDOM.render(<AppWithBonus />, document.getElementById("root"));
export default AppWithBonus;
