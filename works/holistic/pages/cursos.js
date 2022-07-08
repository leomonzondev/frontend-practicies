import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import client from 'utils/client'
import { Cursos } from '../components/cursos/Cursos'

const Cursoss = (props) => {
  return (<>
      <Head>
        <title>Psicoholistica - Cursos</title>
        <meta name="description" content="Sana tu mente y alma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{duration: 0.5}}>

      <Cursos props={props} />
    </motion.div>
  </>
  )
}

export default Cursoss

export async function getServerSideProps() {

  try {
    const faq = await client.fetch(`*[_type == "faq"]`)
    const infoCursos = await client.fetch(`*[_type == "infoCursos"]`)

    return {
      props: {faq, infoCursos}
    }
  } catch {
    
    return {
      props: {}
    }
  }
}
