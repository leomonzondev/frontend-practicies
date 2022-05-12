import { TaskProvider } from '../context/TaskContext'
import '../styles/output.css'



function MyApp({ Component, pageProps }) {

  
  return (
  <TaskProvider>
    <Component {...pageProps} />
  </TaskProvider>
  )
}

export default MyApp
