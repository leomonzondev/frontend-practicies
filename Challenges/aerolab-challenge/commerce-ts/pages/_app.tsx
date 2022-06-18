import '../styles/output.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SnackbarProvider } from 'notistack'

import { Provider as UserProvider } from '../src/store/userContext'
import { ShopLayout } from '../src/components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ThemeProvider attribute='class'>
          
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
      }}>
        <UserProvider>
          <ShopLayout title={'Aerolab Challenge - Home'} pageDescription={'Leonardo Monzón'}>
            <Component {...pageProps} />
          </ShopLayout>

        </UserProvider>
      </SnackbarProvider>
    </ThemeProvider>
    
    )
}

export default MyApp
