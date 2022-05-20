import '../styles/output.css'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/index/Footer'
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}

      
      <ThemeProvider attribute='class'>
        <NavBar  />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      {/* </Provider> */}
    </>
    )
}

export default MyApp
