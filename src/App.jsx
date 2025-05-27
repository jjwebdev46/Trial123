// import { useState } from 'react'
import { HStack, Button } from "@chakra-ui/react"
import Navbar from "./components/ui/Navbar"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Footer from "./pages/Footer"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  )
}

export default App