import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SideBarContainer from './containers/SideBarContainer.js'
// import LoginContainer from './containers/LoginContainer.js'
// import MainContainer from './containers/MainContainer.js'
// import HELLOContainer from './containers/HELLOContainer.js'
// import RegistContainer from './containers/RegistContainer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" breadcrumbName="HOME" component={SideBarContainer}>
            {/* <Switch>
                <Route exact path="/" breadcrumbName="MAIN" component={MainContainer} />
                <Route path="/hello" breadcrumbName="HELLO" component={HELLOContainer} />
              </Switch> 
            </Route>
            <Route strict path="/login" render={() => <SideBarContainer />}></Route>
            <Route strict path="/register" render={() => <SideBarContainer />}>*/}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
