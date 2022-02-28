import React from 'react'

export const Button = ( { clicked } ) => {
  return (
    <div>
        <button className="btn btn-primary m-5" onClick={clicked}>New Rumor</button>
    </div>
  )
}

export default Button;