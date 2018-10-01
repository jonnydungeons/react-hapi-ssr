import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import Navbar from './Navbar'


class App extends Component {

  render() {

    return (
      <div>
        <Navbar />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest}) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} data={this.props.data} />
              )}
            />
          ))}
        </Switch>
      </div>
    )
  }
}

export default App
