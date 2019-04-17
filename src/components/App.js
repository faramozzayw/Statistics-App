import React, { Component } from 'react';
import '../css/App.css';
import Jumbotron from './Jumbotron';
import StaticForm from './StaticForm';
import SelectForm from './SelectForm';
import DynamicForm from './DynamicForm';

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
    const staticFrom = this.state.StaticForm && <StaticForm />;
    const dynamicForm = this.state.DynamicForm && <DynamicForm />;
    const returnButton =  this.state.select && (
      <div className="uk-container uk-width-large uk-flex uk-flex-center">
        <button 
            className="uk-button uk-button-danger  uk-margin-small-bottom" 
            onClick={this.returnBackClick.bind(this)}
            name="static"
         >Return back!</button>
      </div>
    );

    return (
      <div className="App">
        <Jumbotron />
        <main className="App-body">
          {returnButton}
          {staticFrom}
          {dynamicForm}
          {selectForm}
        </main>
      </div>
    );
  }
}

export default App;
