import React, { Component } from 'react'

export default class about extends Component {
  render() {
    console.log('about组件接收的props是', this.props)
    return <h3>这是About的内容</h3>
  }
}
