import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Details from './Details/index'

export default class index extends Component {
  state = {
    messageArr: [
      { id: '01', title: 'message01', content: 'message01的内容' },
      { id: '02', title: 'message02', content: 'message02的内容' },
      { id: '03', title: 'message03', content: 'message03的内容' }
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/*向路由组件传递params参数*/}
                <NavLink to={`/home/message/details/${item.id}/${item.title}/${item.content}`}> {item.title}</NavLink>
              </li>
            )
          })}
        </ul>
        <hr />
        <Route path="/home/message/details/:id/:title/:content" component={Details} />
      </div>
    )
  }
}
