import React, { Component } from 'react'
import List from './component/list/list'
import Header from './component/header/header'
import './App.css'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true, //是否第一次打开页面
    isLoading: false,
    err: ''
  }
  saveUsers = (users) => {
    this.setState({ users })
  }
  updateAppState = (state) => {
    this.setState(state)
  }
  render() {
    return (
      <div className="container">
        <Header updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
