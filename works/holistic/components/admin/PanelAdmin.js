import { useRouter } from 'next/router'
import React from 'react'
import { ProductsDash } from './ProductsDash'
import { Sidebar } from './Sidebar'

export const PanelAdmin = ({products}) => {

  const router = useRouter()
  
  const handleSignOut = () => {
    router.push('/api/auth/signout')

    
  }

  return (
    <div>
    
        

            
     
    </div>
  )
}
