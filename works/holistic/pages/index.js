import Head from 'next/head'
import { Contacto } from '../components/index/Contacto'
import { Especializaciones } from '../components/index/Especializaciones'
import { Hero } from '../components/index/Hero'
import { Publicidad } from '../components/index/Publicidad'
import { Quote } from '../components/index/Quote'
import { Servicios } from '../components/index/Servicios'
import { SobreMi } from '../components/index/SobreMi'
import { Testimonios } from '../components/index/Testimonios'
import { Ubicacion } from '../components/index/Ubicacion'


import dynamic from 'next/dynamic'
import client from 'utils/client'


export default function Home({landing, testimonios}) {
  // const Ubicacion = dynamic(() => import('../components/index/Ubicacion').then(res => console.log(res)))
  
  const servicios = landing.filter(info => info.seccion == "servicios" )
  const hero = landing.filter(info => info.seccion === "hero")
  const sobreMi = landing.filter(info => info.seccion === "sobreMi")

  return (
    <div>
      <Head>
        <title>Psicoholistica</title>
        <meta name="description" content="Sana tu mente y alma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='px-5 md:px-16 overflow-hidden relative pt-20 md:mt-0'>
        <Hero hero={hero}/>
        <Quote />
        
        <Publicidad />
        <Servicios servicios={servicios}/>
        <Especializaciones />
        <SobreMi sobreMi={sobreMi}/>
        <Testimonios testimonios={testimonios}/>
        <Contacto />

    
        {/* <Ubicacion /> */}
      
        
        
      </div>

    </div>
  )
}

export async function getServerSideProps() {

  try {
    const landing = await client.fetch(`*[_type == "landing"]`)
    const testimonios = await client.fetch(`*[_type == "testimonios"]`)
    return {
      props: {landing, testimonios}
    }
  } catch {
    
    return {
      props: {}
    }
  }
}