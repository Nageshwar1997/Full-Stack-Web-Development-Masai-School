import AppWithBonus from "./UpdatedApp";
// User Component
// const User = (props) => (
//   <div>
//     <h2>User Information</h2>
//     <p>Name: {props.name}</p>
//     <p>Age: {props.age}</p>
//     <p>Email: {props.email}</p>
//   </div>
// );

// // ScoreCard Component
// const ScoreCard = () => (
//   <div>
//     <h2>Score Card</h2>
//     <p>Score: 95</p>
//   </div>
// );

// // ContainerWithBlueBorder Component
// const ContainerWithBlueBorder = ({ children }) => (
//   <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
//     {children}
//   </div>
// );

// App Component
const App = () => (
  <div>
    <AppWithBonus />
  </div>
);

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));
