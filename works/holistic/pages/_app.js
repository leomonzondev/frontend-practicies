import '../styles/output.css'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/index/Footer'

import { Store, StoreProvider } from '../utils/Store'
import { SnackbarProvider } from 'notistack'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loading from 'components/Loading'


export const config = {
  unstable_runtimeJS: false
}

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])


  return (
    <>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}>
        <StoreProvider>

        <ThemeProvider attribute='class'>
          <AnimatePresence exitBeforeEnter>
            <NavBar  />
            <Component {...pageProps} />
            <Footer />
          </AnimatePresence>
        </ThemeProvider>
    
        </StoreProvider>
      </SnackbarProvider>

    </>
    )
}

export default MyApp


