import React, { Component } from 'react'
import { MockApi as mockApi } from '../apis/mock'

class Account extends Component {

  constructor(props) {

    super(props)

    let data

    if (__isBrowser__) {
      data = window.__INITIAL_DATA__
      //delete window.__INITIAL_DATA__ // SHOULD I STORE IN REDUX THEN DELETE THIS GLOBAL VARIABLE?
    } else {
      data = props.staticContext.data
    }

    this.state = { data }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {

    const { data } = this.state

    if (Object.keys(data).length === 0) {
      this.fetchData()
    }
  }

  fetchData() {

    const { fetchInitialData } = this.props

    fetchInitialData()
      .then(data => this.setState({data}))
  }

  render() {
    const { data } = this.state

    return (
      <div>
        Hello {data.first_name}!<br /><br />
        Username: {data.username}<br />
        Email: {data.email}<br />
      </div>
    )
  }
}

export default Account
