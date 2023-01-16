import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { JRoutes } from "./router/Routes";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <JRoutes />
      </Layout>
    </Provider>
  );
}

export default App;
