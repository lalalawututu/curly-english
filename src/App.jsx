import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import store from './store';
import './App.less';

function App() {
  return (
    // <Provider store={store}>
    <Provider>
      <BrowserRouter>
        <div>
          123
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
