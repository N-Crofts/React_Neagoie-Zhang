import React, { Component } from 'react'
import { CardList } from './components/cardList/cardListComponent'
import './App.css'


export default class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  

  render() {
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='search monsters' 
          onChange={ e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}
