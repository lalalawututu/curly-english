import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './component/home';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Button } from 'antd';
// import store from './store';
import './App.less';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={(props) => <Home { ...props }/>}></Route>
      </div>
    </BrowserRouter>
  );
}

export default connect()(App);