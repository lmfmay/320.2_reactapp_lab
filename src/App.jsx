import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  let name = prompt('What is your name?');
  
  return (
    <>
      <Header/>
      <Content name = {name}/>
      <Footer/>
    </>
  )
}

export default App
