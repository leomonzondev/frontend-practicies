import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

import header from '../../assets/header-x2.png'
import { Footer } from "../../ui/Footer";
import { Navbar } from "../../ui/Navbar";

interface Props {
    title: string
    pageDescription: string
    imageFullUrl?: string
    children: React.ReactNode
}

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={ pageDescription } />

                <meta name="og:title" content={ title } />
                <meta name="og:description" content={ pageDescription } />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={ imageFullUrl } />
                    )
                }

            </Head>

            <nav>
                <Navbar />
            </nav>

            <div className="    ">
                <div className="overflow-hidden h-[600px] relative">
                    <Image src={header}  />
                </div>

                <h1 className=" absolute -mt-44 ml-40  text-7xl font-regular">Electronics</h1>
                
            </div>


            <main className="my-[80px] mx-auto max-w-[1440px] py-0 px-8">
                { children }
            </main>

            <footer>
                <Footer />
            </footer>


        </>
    )
}