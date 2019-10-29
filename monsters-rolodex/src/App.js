import React, { Component } from 'react'
import { CardList } from './components/cardList/cardListComponent'
import { SearchBox } from './components/searchBox/searchBoxComponent'
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
