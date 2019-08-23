import React, { Component } from 'react';
// import logo from './logo.svg'; 
import './App.css';
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ people: users }))
  }

  handleChange = e => this.setState({ searchField: e.target.value })

  render() {
    const { people, searchField } = this.state;
    const filterPeople = people.filter(p =>
      p.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search text"
          handleChange={this.handleChange} />
        <CardList people={filterPeople}></CardList>
      </div>
    );
  }
}

export default App;