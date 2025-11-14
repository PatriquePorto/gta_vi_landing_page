import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
        <h1 className='text-4xl text-pink'>Welcome to the world of GTA and GSAP!</h1>
    </main>
  )
}

export default App
