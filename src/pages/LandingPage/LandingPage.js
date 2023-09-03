import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar'
import HomePage from '../../components/HomePage/HomePage'

export class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HomePage/>
      </div>
    )
  }
}

export default LandingPage