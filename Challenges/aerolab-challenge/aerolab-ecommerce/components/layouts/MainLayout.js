import Head from "next/head";
import Image from "next/image";


import header from '../../assets/header-x2.png'

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";



export const MainLayout = ({ children, title, pageDescription, imageFullUrl }) => {
    
    
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

            <div className="w-full  h-[500px] ">
                <div className="overflow-hidden my-10 mx-10 h-full bg-[url('../assets/header-x2.png')] bg-center bg-cover bg-no-repeat flex items-end">
                    {/* <Image src={header}  /> */}
                <h1 className=" mt-10  p-32  text-7xl font-regular">Electronics</h1>
                </div>

                
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