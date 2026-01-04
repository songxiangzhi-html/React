import React, { Component } from 'react'
import List from './component/list/list'
import Header from './component/header/header'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <List />
      </div>
    )
  }
}
