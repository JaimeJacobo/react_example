import React from 'react'
import './BoxColor.scss'
import styled from 'styled-components'

class BoxColor extends React.Component {
  //Styled components

  componentToHex(c) {
    let hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  rgbToHex(r, g, b) {
    return (
      '#' +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    )
  }

  render() {
    const { r, g, b } = this.props

    //Styled components
    const BoxColorDiv = styled.div`
      border: 1px solid black;
      margin: 10px;
      background-color: rgb(${r}, ${g}, ${b});
    `
    return (
      <BoxColorDiv>
        <p>
          rgb({r},{g},{b})
        </p>
        <p>{this.rgbToHex(r, g, b)}</p>
      </BoxColorDiv>
    )
  }
}

export default BoxColor
