import '../styles/output.css'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/index/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <ThemeProvider attribute='class'>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
    )
}

export default MyApp
