import "./styles/App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
