import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './logo.png';
import { Form } from './components/Form';
import { RepoTable } from './components/RepoTable';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-nav">
        </div> */}
        <div className="App-header">
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

// data: image / svg + xml; base64, PHN2ZyB2aWV3Qm94PSIwIDAgMzE2IDMxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDMxNnYzMTZIMFYwem01OCAyMDJ2MjBoMjAwdi0yMEg1OHptMzAgNDB2MjBoMTQwdi0yMEg4OHpNOTggNTR2MTIwaDEyMFY1NEg5OHoiIGZpbGw9IiNGQkZCRkIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg ==

export default App;
