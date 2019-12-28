import React from "react"

function GeneratorBox() {

  function generateGradient() {
    document.body.style.backgroundImage = "linear-gradient(45deg, navy, orange)"
  }

  return (
    <div className="generator-box">
      <button id="generator-button" onClick={generateGradient}>Generate Gradient</button>
    </div>
  )
}

export default GeneratorBox
