import React from 'react'


import {IoIosArrowDown, IoIosMenu} from 'react-icons/io'

import {BsCardList} from 'react-icons/bs'

import styles from '../../styles/Regalitos/Sidebar.module.css'

export const Sidebar = () => {






    
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <IoIosMenu size={26} color="#666" />
            <h2>Mis Listas</h2>
        </div>
        <ul className={styles.ul}>
            <li>
                <span className={styles.selector}></span>
                <div className={styles.liWrapper}>
                    <BsCardList size={26} color="#666" />
                    <h3>Creadas</h3>
                    <IoIosArrowDown size={20} color="#666" />

                </div>
            </li>
            <li>
                
                <h3></h3>
            </li>
        </ul>
    </div>
  )
}
