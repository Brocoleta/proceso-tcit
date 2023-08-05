import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import "semantic-ui-css/semantic.min.css";

import Container from "./components/Container";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="AppBody">
        <Container></Container>
      </div>
    </Provider>
  );
}

export default App;
