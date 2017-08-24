import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import reducers from './reducers'

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, promise())
);
