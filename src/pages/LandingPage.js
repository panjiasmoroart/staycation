import React, { Component } from 'react'

import Header from 'includes/Header'

export default class LandingPage extends Component {
  render() {
    return <>
      {/* memparsing semua props yang ada */}
      <Header {...this.props}></Header>
    </>
  }
}
