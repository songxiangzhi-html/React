import React, { Component } from 'react'

export default class list extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
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
