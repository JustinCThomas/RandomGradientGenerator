import React from "react"

function GeneratorBox() {

  const HEXCODES = 16777216

  function generateGradient() {
    let gradientVal1 = Math.floor(Math.random() * HEXCODES) // This generates a random decimal number
    gradientVal1 = gradientVal1.toString(16) // Turns the decimal number into a hexadecimal color code

    let gradientVal2 = Math.floor(Math.random() * HEXCODES)
    gradientVal2 = gradientVal2.toString(16)

    document.body.style.backgroundImage = `linear-gradient(45deg, #${gradientVal1}, #${gradientVal2})`
  }

  return (
    <div className="generator-box">
      <button id="generator-button" onClick={generateGradient}>Generate Gradient</button>
    </div>
  )
}

export default GeneratorBox
