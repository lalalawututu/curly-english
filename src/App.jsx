import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import { IntlProvider } from 'react-intl';
import { Button } from 'antd';
// import store from './store';
import './App.less';

function App() {
  return (
    // <Provider store={store}>
    <Provider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
}

export default App;