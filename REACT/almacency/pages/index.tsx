import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

interface Props {
  products: Product[]
}


const IndexRoute: NextPage = () => {
  return (
    <div>A</div>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: [],
    },
  }
}

export default IndexRoute
