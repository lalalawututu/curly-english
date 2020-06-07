import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './common/header';
import Home from './component/home';
import Teacher from './component/teacher';
import { connect } from 'react-redux';
import './App.less';

class App extends PureComponent {
  render() {  
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          {/* {this.props.match.path === this.props.location.path ?<Redirect to="/" /> : ''} */}
          <Redirect to="/" />
          <Route exact path="/" component={(props) => <Home { ...props } />} />
          <Route path="/teacher" component={(props) => <Teacher { ...props } />}></Route>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default connect()(App);