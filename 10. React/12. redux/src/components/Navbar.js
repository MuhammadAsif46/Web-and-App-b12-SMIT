import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector((e)=> e.counter.value)
  return (
    <div>Navbar Component: {count}</div>
  )
}

export default Navbar