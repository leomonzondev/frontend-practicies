import Head from 'next/head'
import Image from 'next/image'

import { Counter } from '../components/counter'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  )
}
