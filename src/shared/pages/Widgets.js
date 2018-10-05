import React, { Component } from 'react'

class Widgets extends Component {

  constructor(props) {

    super(props)

    let widgets

    if (__isBrowser__) {
      widgets = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {

      widgets = props.staticContext
    }

    this.state = {
      loading: widgets && widgets.hasOwnProperty('data') ? false : true,
      widgets
    }

    this.fetchWidgets = this.fetchWidgets.bind(this)
  }

  componentDidMount() {

    const { loading, widgets } = this.state

    if (loading) {
      this.fetchWidgets()
    }
  }

  fetchWidgets() {

    const { fetchInitialData } = this.props
    this.setState(() => ({loading: true}))

    fetchInitialData()
    .then(widgets => this.setState({
      loading: false,
      widgets
    }))
  }

  render() {
    const { loading, widgets } = this.state

    if (loading === true) {
      return (<p>'Loading...'</p>)
    }

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {widgets.data.map(({ name }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li>{name}</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Widgets
