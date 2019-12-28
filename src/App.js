import React from "react"
import GeneratorBox from "./components/GeneratorBox"
import GradientDisplayBox from "./components/GradientDisplayBox"

const HEXCODES = 16777216

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentGradient: ""
    }
    this.generateGradient = this.generateGradient.bind(this)
    setInterval(this.generateGradient, 1000 * 15)
  }

  componentDidMount() {
    this.generateGradient()
  }

  // Formats incoming hexadecimal values that are shorter than 6 digits
  hexFormat(hexCode) {
    let difference = 6 - hexCode.length

    if (difference) {
      for (; difference > 0; difference--) {
        hexCode = "0" + hexCode
      }
    }
    return hexCode
  }

  generateHexCode() {
    let gradientVal = Math.floor(Math.random() * HEXCODES) // This generates a random decimal number
    gradientVal = this.hexFormat(gradientVal.toString(16)) // Turns the decimal number into a hexadecimal color code
    return gradientVal
  }

  generateGradient() {
    let gradientVal1 = this.generateHexCode()
    let gradientVal2 = this.generateHexCode()

    this.setState({currentGradient: `linear-gradient(45deg, #${gradientVal1}, #${gradientVal2})`}, () => {
      console.log(gradientVal1, gradientVal2)
      document.body.style.backgroundImage = this.state.currentGradient
    })
  }

  render() {
    return (
      <div>
      <GeneratorBox generateGradient={this.generateGradient}/>
      <GradientDisplayBox hexValue={this.state.currentGradient} />
      </div>
    )
  }
}

export default App
