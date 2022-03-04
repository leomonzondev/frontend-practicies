import { FC } from 'react';

import Head from 'next/head';
import { NavBar } from '../ui';

interface Props {
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Leonardo Monzon" />
            <meta name="description" content={`Info sobre el pokemon${title}`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
        </Head>

        <NavBar/>

        <main style={{
            padding:'0 20px',
        }}>
            
        </main>

    </>
)
}
