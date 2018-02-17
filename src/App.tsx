import React, { Component } from 'react';
import { AppNav } from './components/AppNav';
import { AppHeaderText } from './components/AppHeaderText';
import { Form } from './components/Form';
import { RepoTable } from './components/RepoTable';
import './App.scss';
import './Header.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav/>
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
