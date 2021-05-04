import React from 'react'
import './Random.scss'

class Random extends React.Component {
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  render() {
    const { min, max } = this.props
    return (
      <div className="Random">
        <p>
          Random value between {min} and {max} =&gt;
          {this.getRandomNumber(min, max)}
        </p>
      </div>
    )
  }
}

export default Random
