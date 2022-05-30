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


export default function Home() {
  // const Ubicacion = dynamic(() => import('../components/index/Ubicacion').then(res => console.log(res)))
  
  return (
    <div>
      <Head>
        <title>Psicoholistica</title>
        <meta name="description" content="Sana tu mente y alma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='px-5 md:px-16 overflow-hidden relative mt-20 md:mt-0'>
        <Hero />
        <Quote />
        <Publicidad />
        <Servicios />
        <Especializaciones />
        <SobreMi />
        <Testimonios />
        <Contacto />

    
        {/* <Ubicacion /> */}
      
        
        
      </div>

    </div>
  )
}
