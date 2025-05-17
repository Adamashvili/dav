import { useContext } from "react"
import { BasicProvider } from "./BasicContext"

export default function Other() {

    const {setNum} = useContext(BasicProvider)

  return (
    <div>

    <button onClick={() => setNum( (prev) => prev + 1)}>CLICK ME</button>

    </div>
  )
}