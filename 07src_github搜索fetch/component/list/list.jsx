import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class list extends Component {
  state = {
    users: [],
    isFirst: true, //是否第一次打开页面
    isLoading: false,
    err: ''
  }
  componentDidMount() {
    this.token = PubSub.subscribe('userList', (msg, data) => {
      this.setState(data)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用，输入关键字，随后点击搜索</h2>
        ) : isLoading ? (
          <h2>正在加载中...</h2>
        ) : err ? (
          <h2>加载失败，请稍后再试</h2>
        ) : (
          users.map((user) => (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img alt="headImg" src={user.avatar_url} style={{ width: '100px' }} />
                <p className="card-text">{user.login}</p>
              </a>
            </div>
          ))
        )}
      </div>
    )
  }
}
