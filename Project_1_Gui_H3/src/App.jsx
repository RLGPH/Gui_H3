import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import InfoCard from './components/InfoCard/InfoCard'

function App() {
  return (
    <>
      <Header name="Casper Simon Jensen"/>
      <InfoCard
        hobbyOne="Gaming"
        hobbyTwo="Gå tur med hunde"
        hobbyThree="... jeg er kedelig XD"
        imageSrc={viteLogo}
      />
      <Footer age="21"/>
    </>
  )
}

export default App
