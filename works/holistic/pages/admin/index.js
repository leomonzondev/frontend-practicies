import React from 'react'
import { SessionProvider, useSession } from "next-auth/react"

import { useRouter } from 'next/router'
import { PanelAdmin } from 'components/admin/PanelAdmin'
import client from 'utils/client'
import { DManageStore } from 'components/admin/Store/DManageStore'


const Index = (props) => {

  const {products} = props

  const router = useRouter()

  const { data: session } = useSession()

  const handleSignIn = () => {
    router.push('/api/auth/signin')
  }

  const handleMostrar = () => {
    console.log(products)
  }
    
  const handleSignOut = () => {
    router.push('/api/auth/signout')

    
  }

  return (
    <div >

        <div className='mt-20'>
        {
          session
          ? <>
            
            <DManageStore products={products} />
            <button onClick={handleSignOut}>Desconectarse</button>
          </>
          :<div>

              <button onClick={handleSignIn}>Login Admin</button>
              
          </div>
        }
      
    
    </div>

      
      </div>
  )
}

export default Index


export async function getServerSideProps() {

  try {
  
    const products = await client.fetch(`*[_type == "product"]`)
  
    return {
      props: {products}
    }
  } catch {
    
    return {
      props: {}
    }
  }
}