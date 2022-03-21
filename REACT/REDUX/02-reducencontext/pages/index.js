
import { MainApp } from '../Components/MainApp'
import CartState from '../Context/cartState'


export default function Home() {
  return (
    <CartState>
      <MainApp />
    </CartState>
  )
}
