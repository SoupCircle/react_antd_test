import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import SideBarContainer from './containers/SideBarContainer.js'
// import LoginContainer from './containers/LoginContainer.js'
// import MainContainer from './containers/MainContainer.js'
// import HELLOContainer from './containers/HELLOContainer.js'
// import RegistContainer from './containers/RegistContainer.js'
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};

const UserRoute = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" breadcrumbName="HOME" component={SideBarContainer}></Route>
        </Switch>
      </Router>
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
})

class App extends Component {
  render() {
    return (
      <Router>
        <UserRoute />
      </Router>
    );
  }
}

export default App;
