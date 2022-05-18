import Head from 'next/head'
import Image from 'next/image'
import { Contacto } from '../components/index/Contacto'
import { Especializaciones } from '../components/index/Especializaciones'
import { Footer } from '../components/index/Footer'
import { Hero } from '../components/index/Hero'
import { Quote } from '../components/index/Quote'
import { Servicios } from '../components/index/Servicios'
import { SobreMi } from '../components/index/SobreMi'
import { Testimonios } from '../components/index/Testimonios'
import { Ubicacion } from '../components/index/Ubicacion'
import { NavBar } from '../components/NavBar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Psicoholistica</title>
        <meta name="description" content="Sana tu mente y alma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='px-5 md:px-16 overflow-hidden relative'>
        <Hero />
        <Quote />
        <Servicios />
        <Especializaciones />
        <SobreMi />
        <Testimonios />
        <Contacto />
        <Ubicacion />
        
      </div>

    </div>
  )
}
