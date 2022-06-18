import type { NextPage } from 'next'
import { useState } from 'react';
import { ShopLayout } from '../src/components/layouts/ShopLayout';
import { Product } from '../src/ts/types';



const Home: NextPage = () => {


  const [product, setProduct] = useState<Product[]>([])
  const [status, setStatus] = useState<"pending" | "resolve" | "rejected">('pending')


  useEffect(() => {

  },[])
 
  return (
    <div>
      
    </div>
  )
}

export default Home
