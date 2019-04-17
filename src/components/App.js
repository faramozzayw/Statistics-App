import React, { Component } from 'react';
import '../css/App.css';
import Jumbotron from './Jumbotron';
import StaticForm from './StaticForm';
import SelectForm from './SelectForm';

class App extends Component {
  state = {
    select: false,
    DynamicForm: false,
    StaticForm: false
  }

  selectChange = e => {
    e === 'static' ? this.setState({
      StaticForm: true,
      select: true
    }) : this.setState({
      DynamicForm: true,
      select: true
    });
  }

  returnBackClick = e => 
    this.setState({
      select: false,
      DynamicForm: false,
      StaticForm: false
    })

  render() {
    const selectForm = !this.state.select && <SelectForm selectChange={this.selectChange} />
    console.log(this.state);
    const staticFrom = this.state.StaticForm && <StaticForm />;
    return (
      <div className="App">
        <Jumbotron />
        <main className="App-body">
          {staticFrom}
          {/*<Form />
          <Form />*/}
          {selectForm}
        </main>
      </div>
    );
  }
}

export default App;
