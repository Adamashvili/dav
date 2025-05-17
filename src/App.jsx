
import { useContext } from 'react'
import './App.css'
import MainChild from './MainChild'
import { BasicProvider } from './BasicContext'


function App() {
  // const {myName} = useContext(BasicProvider)

  // console.log(myName);
  const {num} = useContext(BasicProvider)
  const {text} = useContext(BasicProvider)

  return (
    <>
     <h1>MAIN PAGE</h1>
     <h1>{num}</h1>
     <h2>{text}</h2>
     <MainChild />
    </>
  )
}

export default App
