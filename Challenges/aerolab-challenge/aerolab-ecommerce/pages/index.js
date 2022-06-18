import { useContext } from "react"
import { Products } from "../components/Products"
import { Store, UserContext } from "../context/Context"



export default function Home() {

 const {state} = useContext(UserContext)

  return (
    <>
      <button onClick={() => console.log(state)}>MOSTRAR</button>
    <Products />
    </>
  )
}
