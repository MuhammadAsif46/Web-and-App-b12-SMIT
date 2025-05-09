import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import {firstName,lastName} from "./components/Constants"
import Card from './components/Card'

function App() {

  return (
    <div className=''>
      <h1 className='text-4xl font-bold'>Vite + React + Smit : ({firstName})</h1>
      <About data={lastName}/>
      <Card/>
    </div>
  )
}

export default App
