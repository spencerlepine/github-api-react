import './App.css';
import React, { Component } from "react"

import Header from "./components/Header"
import SelectUser from "./components/SelectUser"
import DisplayCards from './components/DisplayCards';
import Loading from "./components/Loading"
import Footer from "./components/Footer"

const fetch = require("node-fetch");

async function fetchGithub(url = '') {
  const response = await fetch(url);
  return response.json()
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      serverData: null,
      isLoading: false
    }
    this.printFetch = this.printFetch.bind(this)
    this.resetResult = this.resetResult.bind(this)
  }

  printFetch(username) {
    let message = {
      'Accept': 'application/vnd.github.v3+json'
    }

    // Fake loading
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false }) 

      fetchGithub(`https://api.github.com/users/${username}/repos?sort=pushed`, message)
      .then(response => {
        // Pass data up to this parent component
        this.setState({ serverData: response })
      })
      .catch(error => { console.log(error)}) 
    }, 1000);
  }

  resetResult() {
    // make the display blank
    this.setState({ serverData: null })
  }

  render() {
    // Only create the Card list after a search
    let searchResult = this.state.serverData ? (<DisplayCards cardData={this.state.serverData}/>) : null

    return (
    <div className="App">
        <Header logo="./assets/GitHub-Mark-64px.png"/>
        <SelectUser githubCall={this.printFetch} resetResult={this.resetResult} />
        <Loading loadingState={this.state.isLoading} />
        {searchResult}
        <Footer />
    </div>
    );
  }
}

export default App;
