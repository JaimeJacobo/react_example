import React from 'react'
import './App.scss'

//Components
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import State from './components/State/State'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <State />
      </div>
    )
  }
}

export default App
