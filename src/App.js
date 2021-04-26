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
import NavBar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Home from "./pages/home";
import About from "./pages/about";
import OurWork from './pages/ourWork';

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
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={OurWork} />
          <Route exact path="/about" component={About} />

          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
