import React from 'react'
import { Server } from '../../types/types';
import styles from "./Task.module.scss";
import serverIMG from "../../assets/pc-off.png"
import startBTN from "../../assets/start-btn.png"

type Props = {
    servers: Server[]
    serverMinimize: (id:number) => void;
}


const Task:React.FC<Props> = ({servers, serverMinimize}) => {

    return (
        <div className={styles.container}>
            <img className={styles.start} src={startBTN} alt="w-98" />
            <div className={styles.grid}>
                {
                    servers.map( server => (
                        <div className={styles.item} key={server.id} onClick={() => serverMinimize(server.id)}>
                            <img src={serverIMG} alt="server"/>
                            <p>Server #{server.id}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Task;