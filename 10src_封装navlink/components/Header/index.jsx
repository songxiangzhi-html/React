import React, { Component } from 'react'

export default class index extends Component {
  render() {
    console.log('Header组件接收的props是', this.props)
    return <h2>React Router Demo</h2>
  }
}
