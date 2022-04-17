import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainApp } from '../components/MainApp'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <MainApp />
    </div>
  )
}

export default Home
