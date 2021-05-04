import React from 'react'
import './IdCard.scss'

class IdCard extends React.Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props
    const arrayBirth = birth.toDateString()

    return (
      <div className="IdCard">
        <div className="image">
          <img src={picture} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="text">
          <p>First name: <span>{firstName}</span></p>
          <p>Last name: <span>{lastName}</span></p>
          <p>Gender: <span>{gender}</span></p>
          <p>Height: <span>{height}</span></p>
          <p>Birth: <span>{arrayBirth}</span></p>
        </div>
      </div>
    )
  }
}

export default IdCard
