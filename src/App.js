import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       <Home />
      </header>
    </div>
    </Provider>
  );
}

export default App;
