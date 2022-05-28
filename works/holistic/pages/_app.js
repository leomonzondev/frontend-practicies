import '../styles/output.css'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/index/Footer'

import { Provider } from 'react-redux'
import { Store, StoreProvider } from '../utils/Store'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <SessionProvider>
      <SnackbarProvider>
        <StoreProvider>
        <ThemeProvider attribute='class'>
          <NavBar  />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
    
        </StoreProvider>
      </SnackbarProvider>

      </SessionProvider>
    </>
    )
}

export default MyApp
