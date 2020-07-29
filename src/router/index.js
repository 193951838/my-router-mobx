import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Layout from 'pages/index'
import routerData from 'const/routerData/index'

export default class Routers extends React.Component{

  render() {

    return (
      <Router>
        <Layout>
        <Switch>
          {
            routerData.map((item) => { 

              return (
                <Route exact={item.exact} path={item.path} key={item.key} component={item.component} />
                )
            })
          }
            
          </Switch>
          </Layout>
    </Router>
    )
  }
}