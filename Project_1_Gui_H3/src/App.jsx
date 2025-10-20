import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import InfoCard from './components/InfoCard/InfoCard'

function App() {
  return (
    <>
      <Header />
      <InfoCard />
      <Footer />
    </>
  )
}

export default App
