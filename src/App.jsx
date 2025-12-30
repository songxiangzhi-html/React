import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: '吃饭', done: true },
      { id: 2, name: '睡觉', done: false },
      { id: 3, name: '打豆豆', done: false }
    ]
  }
  addTodo = 1
  //   (todoObj) => {
  //   this.setState({
  //     todos: [todoObj, ...this.state.todos]
  //   })
  // }
  updateTodo = (id, done) => {
    const { todos } = this.state
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.done = done
        this.setState({
          todos
        })
      }
    })
  }

  checkAllTodo = (done) => {
    const { todos } = this.state
    todos.forEach((todo) => {
      todo.done = done
    })
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  clearAllDone = () => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter((todo) => {
        return !todo.done
      })
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} todos={todos} />
        </div>
      </div>
    )
  }
}
