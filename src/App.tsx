import React, { Component } from 'react';
import { Form } from './components/Form';
import { RepoTable } from './components/RepoTable';
import './App.scss';
import './Header.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-nav"> Roulette.js </div>
        
          <h2>Have you ever thought to yourself..</h2>
          <h4>
            <div>"I haven't seen a new javascript library in a while. I wish I could be learning a new JS framework."</div>
            <div>"Why aren't there more packages on NPM? Is javascript a dying language?"</div>
            <div>"My Todo app is going to make the world a better place."</div>
          </h4>
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
