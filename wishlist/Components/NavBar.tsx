import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {GrLocation} from 'react-icons/gr'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

import styles from '../styles/NavBar.module.css'
import logo from '../images/logo__large_plus.png'


export const NavBar = () => {
return (
    <nav className={styles.navBar}>
        <div className={styles.wrapper}>

        {/* Seccion Left */}
        <div className={styles.leftContainer}>
            <Link href='/' >
                <div className={styles.logo}><a>Mercado Libre Argentina - Donde comprar y vender de todo</a></div>
            </Link>
            <div className={styles.envio}>
                <GrLocation size={24} />
                <div className={styles.envioText}>
                    <span>Enviar a</span>
                    <p>Capital Federal </p>
                </div>
            </div>
        </div>

        {/* sección Center */}
        <div className={styles.midContainer}>
            <form className={styles.searcher}>
                <input placeholder="Buscar productos, marcas, y más..." />
                <button>
                    <AiOutlineSearch size={20} color="#666" />
                </button>
            </form>

            <ul className={styles.ul_products}>
                <li>
                    <a>Categorías</a>
                    <MdOutlineKeyboardArrowDown size={16} color="#7f782c" />
                </li>
                <li>
                    <Link href="/ofertas">
                        <a>Ofertas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/historial">
                        <a>Historial</a>
                    </Link>
                </li>
                <li>
                    <Link href="/supermercado">
                        <a>Supermercado</a>
                    </Link>
                </li>
                <li>
                    <Link href="/moda">
                        <a>Moda</a>
                    </Link>
                </li>
                <li>
                    <Link href="/vender">
                        <a>Vender</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ayuda">
                        <a>Ayuda</a>
                    </Link>
                </li>
            </ul>
        </div>

        {/* sección Right */}
        <div className={styles.rightContainer}>

            <div className={styles.suscripcion}>
                <p>Suscribite al nivel 6: beneficios exclusivos</p>
            </div>
            <ul className='ul-user'>
                <li>
                    <Link href="/listas">
                        <a>Listas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/registro">
                        <a>Creá tu cuenta</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>Ingresá</a>
                    </Link>
                </li>
                <li>
                    <Link href="/compras">
                        <a>Mis compras</a>
                    </Link>
                </li>
                <BsCart2 size={20} />
            </ul>
        </div>
        </div>
    </nav>
)
}

