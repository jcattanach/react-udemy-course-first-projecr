import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Jack', age: 24},
      {name: 'John', age: 26},
      {name: 'Max', age: 28}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Jack', age: 24},
      {name: 'John', age: 27},
      {name: event.target.value, age: 28}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index )=> {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} />
        })}
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
