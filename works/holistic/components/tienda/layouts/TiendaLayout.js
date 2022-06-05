import React from 'react'
import Head from 'next/head'

export const TiendaLayout = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={title} />

            {
              imageFullUrl && (
                <meta name="og:image" content={imageFullUrl} />
              )
            }

        </Head>

        <nav>
          
        </nav>

        <main className=''>
            { children }
        </main>
        
    </div>
  )
}
