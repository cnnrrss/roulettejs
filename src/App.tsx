import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// React.lazy and Suspense is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we recommend Loadable Components. 
// import { AppNav } from './components/AppNav';
const AppNav = lazy(() => import('./components/AppNav'));
const About = lazy(() => import('./routes/About'));

import { AppHeaderText } from './components/AppHeaderText';
import { Form } from './components/Form';
import { RepoTable } from './components/RepoTable';
import './App.scss';
import './Header.scss';

// https://reacttraining.com/react-router/web/guides/quick-start
const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <AppNav/>
        </Suspense>
        <div className="App-header">
          <AppHeaderText/>
          <Form />
        </div>
        <div className="App-body">
          <RepoTable query="" order="" />
        </div>
      </div>
    );
  }
}

export default App;
