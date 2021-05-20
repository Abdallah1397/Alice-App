import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import rootSaga from "./store/sagas";
import './assets/css/style.css';
import './assets/css/base.css';
import Footer from "./component/footer/footer";

import All_PAGES from "./pages/allPages";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
        <All_PAGES/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
