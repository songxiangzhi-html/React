import React, { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import News from './News/index'
import Message from './Message/index'
export default class home extends Component {
  render() {
    return (
      <div>
        <h3>这是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="/home/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="/home/message">
                Message
              </NavLink>
            </li>
          </ul>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </div>
      </div>
    )
  }
}
