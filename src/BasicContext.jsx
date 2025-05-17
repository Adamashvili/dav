import { createContext, useState } from "react"

export const BasicProvider = createContext()

export default function BasicContext({children}) {

    const [num, setNum] = useState(0)
    const [text, setText] = useState("")

  return (
    <BasicProvider.Provider value={ {num, setNum, text, setText} }>
        {children}
        </BasicProvider.Provider>
  )
}



// MainChild კომპონენტში შექმენით ინპუთ თეგი, რასაც მასში ჩაწერთ ეგრევე იწერებოდეს
// App ში არსებულ h2 თეგში