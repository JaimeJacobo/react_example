import React from 'react'

class State extends React.Component {
  state = {
    counter: 0,
    user: {
      name: 'Jaime',
      lastName: 'Jacobo',
      age: 26,
    },
    gifNumber: 1,
  }

  changeName() {
    if (this.state.user.name === 'Jaime') {
      this.setState({ user: { name: 'Pedro' } })
    } else {
      this.setState({ user: { name: 'Jaime' } })
    }
  }

  changeGif() {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    if (randomNumber === this.state.gifNumber) {
      this.changeGif()
    } else {
      this.setState({ ...this.state, gifNumber: randomNumber })
    }
  }

  render() {
    return (
      <div className="State">
        <h1>Hola, {this.state.user.name}!</h1>

        <button onClick={() => this.changeName()}>Change name</button>

        <button
          onClick={() =>
            this.setState({ user: { ...this.state.user, name: 'Arturo' } })
          }
        >
          Add property
        </button>

        <div>
          <button
            onClick={() =>
              this.setState({ ...this.state, counter: this.state.counter - 1 })
            }
          >
            -1
          </button>
          <p>{this.state.counter}</p>
          <button
            onClick={() =>
              this.setState({ ...this.state, counter: this.state.counter + 1 })
            }
          >
            +1
          </button>
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + `/img/gif${this.state.gifNumber}.gif`}
            alt="gif"
          />
          <button onClick={() => this.changeGif()}>Cambiar gif</button>
        </div>
      </div>
    )
  }
}

export default State

//El estado es INMUTABLE

//this.setState({}) --> Función que React te da para que puedas "modificar" el estado

//Todos los cambios en el estado son detectados por React. Y, cuando este detecta un cambio, re-renderiza la pagina

//Solo puede haber un estado por componente
