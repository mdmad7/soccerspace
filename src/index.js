import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./layout/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";
import "./stylesheets/main.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
