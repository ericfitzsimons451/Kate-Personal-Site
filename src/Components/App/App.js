import React, { Component } from 'react'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App