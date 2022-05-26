import React from 'react'
import { SessionProvider } from "next-auth/react"
import { DashboardAdmin } from 'components/admin/DashboardAdmin'


const index = () => {


    

  return (
    <div >

   
      <SessionProvider>
        <DashboardAdmin />
      </SessionProvider>
      </div>
  )
}

export default index