import React from 'react'
import client from 'utils/client'
import { Cursos } from '../components/cursos/Cursos'

const Cursoss = (props) => {
  return (
    <>
      <Cursos props={props} />
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
