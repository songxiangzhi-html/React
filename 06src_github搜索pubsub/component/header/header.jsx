import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class header extends Component {
  // http://192.168.1.10:3000/api/search/users?q=${keyWordNode.value}
  // https://github.com/search/users?q=
  search = () => {
    PubSub.publish('userList', { name: 'search', age: 18 })
    const { keyWordNode } = this
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    PubSub.publish('userList', { isFirst: false, isLoading: true })

    axios
      .get(`http://192.168.1.10:3000/api/search/github?q=${keyWordNode.value}`)
      .then((res) => {
        console.log(res)
        // this.props.updateAppState({ isLoading: false, users: res.data.items })
        PubSub.publish('userList', { isLoading: false, users: res.data.items })
      })
      .catch((err) => {
        // this.props.updateAppState({ isLoading: false, err: err })
        PubSub.publish('userList', { isLoading: false, err: err })

        console.log(err)
      })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
          <input ref={(e) => (this.keyWordNode = e)} type="text" placeholder="输入关键词进行搜索" />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
