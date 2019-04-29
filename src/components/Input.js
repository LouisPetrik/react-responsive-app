import React from "react"
import "../sass/Input.sass"

const Input = () => {
   return (
      <div className="input-wrapper">
         <div className="input-prepend">
            <span className="input-message">Message:</span>
         </div>
         <input type="text"/>
      </div>
   )
}

export default Input