import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  handleCheck = (id) => {
    return (e) => {
      console.log(e.target.checked, id)
      this.props.updateTodo(id, e.target.checked)
    }
  }
  handleDelete = (id) => {
    return () => {
      if (window.confirm('确定删除吗？')) {
        this.props.deleteTodo(id)
      }
    }
  }
  render() {
    const { name, id, done } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button
          onClick={this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    )
  }
}
