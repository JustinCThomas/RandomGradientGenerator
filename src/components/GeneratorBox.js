import React from "react"

function GeneratorBox(props) {

  return (
    <div className="generator-box">
      <button id="generator-button" onClick={props.generateGradient}>Generate Gradient</button>
    </div>
  )
}

export default GeneratorBox
