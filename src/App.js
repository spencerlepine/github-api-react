import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"

import Header from "./components/Header"
import SelectUser from "./components/SelectUser"
import DisplayCards from './components/DisplayCards';

const fetch = require("node-fetch");

async function fetchGithub(url = '') {
  const response = await fetch(url);
  return response.json()
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      serverData: null
    }
    this.printFetch = this.printFetch.bind(this)
  }

  printFetch(username) {
    fetchGithub(`https://api.github.com/users/${username}/repos?sort=pushed`)
    .then(response => {
      // Pass data up to this parent component
      this.setState({ serverData: response })
    })
    .catch(error => { console.log(error)})  
  }

  render() {
    // Only create the Card list after a search
    let searchResult = this.state.serverData ? (<DisplayCards cardData={this.state.serverData}/>) : null

    return (
    <div className="App">
        <Header />
        <SelectUser githubCall={this.printFetch}/>
        <br/>
        {searchResult}
    </div>
    );
  }
}

export default App;
