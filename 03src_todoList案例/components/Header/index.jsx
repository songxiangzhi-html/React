import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      let data = e.target.value.trim()
      if (data === '') {
        return alert('输入不能为空')
      }
      console.log(data)
      let toduObj = {
        id: nanoid(),
        name: data,
        done: false
      }
      this.props.addTodo(toduObj)
      e.target.value = ''
    }
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
