import { TaskProvider } from '../context/TaskContext'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  
  return (
  <TaskProvider>
    <Component {...pageProps} />
  </TaskProvider>
  )
}

export default MyApp
