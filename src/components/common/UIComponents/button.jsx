import React from 'react'

const Button = ({children}) => {
  return (
    <button className = "bg-blue-700 text-white px-3 py-1 rounded-md transition-all border-blue-700 border hover:bg-transparent hover:text-blue-700"> {children} </button>
  )
}

export default Button