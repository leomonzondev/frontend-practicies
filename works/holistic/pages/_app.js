import '../styles/output.css'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/index/Footer'

import { Provider } from 'react-redux'
import { Store, StoreProvider } from '../utils/Store'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }) {
  return (
    <>


      <SnackbarProvider>
        <StoreProvider>
        <ThemeProvider attribute='class'>
          <NavBar  />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
    
        </StoreProvider>
      </SnackbarProvider>
    </>
    )
}

export default MyApp
