import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About/about'
import Home from './pages/Home/home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test/index'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 路由链接 */}
              <MyNavLink to="/about" a={1} b={2}>
                About
              </MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Switch的用法：只匹配其中一个*/}
                <Switch>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
