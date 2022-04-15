import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../Components/NavBar'
import { store } from '../State/reducers/store';
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store= {store}>
    <NavBar/>
    <Component {...pageProps} />
  </Provider>
    )
}

export default MyApp
