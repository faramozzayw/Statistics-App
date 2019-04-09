import React, { Component } from 'react';
import '../css/App.css';
import Jumbotron from './Jumbotron';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <main className="App-body">
          <Form/>
        </main>
      </div>
    );
  }
}

export default App;
