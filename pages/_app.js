import Head from 'next/head'
import { MainLayout } from '../src/components/layout/MainLayout'
import '../styles/globals.css'
// import { AuthProvider } from '@/src/Providers'

function MyApp({ Component, pageProps }) {
  return (
    html lang="en">
    <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

    </head>
    <body>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>

    </body>
  </html>
  )
}

export default MyApp
