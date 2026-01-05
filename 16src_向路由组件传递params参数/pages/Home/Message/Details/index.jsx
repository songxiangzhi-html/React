import React, { Component } from 'react'

export default class index extends Component {
  render() {
    console.log(this.props)
    const { id, title, content } = this.props.match.params
    return (
      <ul>
        <li>ID：{id}</li>
        <li>标题：{title}</li>
        <li>内容：{content}</li>
      </ul>
    )
  }
}
