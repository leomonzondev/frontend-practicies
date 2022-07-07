import Head from 'next/head'

import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Suggestions } from '../components/Suggestions'


export default function Home(props) {

  const {data} = props
  const [calls, setCalls] = useState([])

  const [zones, setZones] = useState(data)

  const [inputValue, setInputValue] = useState('')

  const handleCall = async(suggested) => {

    const resp = await fetch('/api/timezones',{method:'PUT',body:suggested})
    const info = await resp.json()
    setCalls([info, ...calls ])

  }




  return (
    <div >
      <Head>
        <title>Coderio challenge</title>
        <meta name="description" content="Leonardo Monzón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col justify-center items-center w-full h-full mt-20'>
        <input type="text" placeholder='asd' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        {
          <Suggestions handleCall={handleCall} zones={zones} inputValue={inputValue} />
        }
    
      </div>

        <div className='flex gap-2 justify-center flex-wrap '>
          {
            calls.map(call => <Card key={Math.random()} country={call} setCalls={setCalls}/>)
          }
        </div>

      {/* <button onClick={() => console.log(calls)} className=''>Show selected</button> */}



    </div>
  )
}


export async function getServerSideProps() {

  const res = await fetch('https://worldtimeapi.org/api/timezones')
  const data = await res.json()

  return {
    props: {data}, // will be passed to the page component as props
  }
}