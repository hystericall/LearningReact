import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import User, {UserInput, UserOutput} from './User/User'

class App extends Component {
  state = {
    persons: [
      { id: 'asf', name: 'Max', age: 28 },
      { id: '12312a', name: 'Manu', age: 29 },
      { id: '1241', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    // const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    // const person = Object.assign({}, ...this.state.persons[personIndex])
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <div className={classes.join(' ')}>Tis is really working</div>
        <button style={style} onClick={this.togglePersonHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
