import '../styles/output.css'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/index/Footer'

import { Provider } from 'react-redux'
import { Store, StoreProvider } from '../utils/Store'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>



      <StoreProvider>

      
      <ThemeProvider attribute='class'>
        <NavBar  />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
  
      </StoreProvider>
    </>
    )
}

export default MyApp
