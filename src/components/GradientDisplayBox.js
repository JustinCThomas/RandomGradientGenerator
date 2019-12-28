import React from "react"

function GradientDisplayBox(props) {

  return (
    <div>
      <span id="gradient-display-box">{props.hexValue}</span>
    </div>
  )
}

export default GradientDisplayBox
