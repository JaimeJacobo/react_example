import React from 'react'
import './Greetings.scss'

class Greetings extends React.Component {
  renderSalute(lang) {
    return {
      de: 'Hallo',
      fr: 'Bonjour',
      en: 'Hello',
      es: 'Hola',
    }[lang]
  }

  render() {
    return (
      <div className="Greetings">
        <p>
          {this.renderSalute(this.props.lang)} {this.props.children}
        </p>
      </div>
    )
  }
}

export default Greetings
