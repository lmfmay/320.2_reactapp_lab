import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [name, setName] = useState(prompt('What is your name?'))
  
  
  return (
    <>
      <Header/>
      <Content name = {name} setName={setName}/>
      <Footer/>
    </>
  )
}

export default App
