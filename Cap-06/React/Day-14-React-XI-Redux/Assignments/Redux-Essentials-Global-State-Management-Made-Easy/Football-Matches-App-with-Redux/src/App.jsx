import "./App.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchMatches } from "./api";
import FootballMatchList from "./components/FootballMatchList";

function App() {
  useEffect(() => {
    store.dispatch(fetchMatches());
  }, []);

  return (
    <Provider store={store}>
      <FootballMatchList />
    </Provider>
  );
}

export default App;
