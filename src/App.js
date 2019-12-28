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
  }

  generateGradient() {
    let gradientVal1 = Math.floor(Math.random() * HEXCODES) // This generates a random decimal number
    gradientVal1 = gradientVal1.toString(16) // Turns the decimal number into a hexadecimal color code

    let gradientVal2 = Math.floor(Math.random() * HEXCODES)
    gradientVal2 = gradientVal2.toString(16)

    this.setState({currentGradient: `linear-gradient(45deg, #${gradientVal1}, #${gradientVal2})`}, () => {
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
