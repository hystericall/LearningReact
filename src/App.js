import React, { Component } from 'react';
import './App.css';
import User, {UserInput, UserOutput} from './User/User'

class App extends Component {
  state = {
    userName: 'somethingsomething',
    moreName: 'moreNameplz'
  }

  changedNameHandler = (event) => {
    this.setState( {
      userName: event.target.value,
      moreName: 'what actually happen man',
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.userName} />
        <UserOutput name={this.state.moreName} />
        <UserInput changed={this.changedNameHandler} name={this.state.userName} />
      </div>
    );
  }
}

export default App;
