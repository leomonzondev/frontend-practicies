import React, { useEffect, useRef, useState } from 'react'
import styles from "./ServerItem.module.scss";
import serverOffIMG from "../../assets/pc-off.png"
import serverOnIMG from "../../assets/pc-on.gif"
import { getUsageCPU } from '../../services/getUsageCPU';
import { Server } from '../../types/types';

type Props = {
    server: Server;
    serverMinimize: (id:number) => void;
    setInverseState: (server:Server) => void;
    serverClosed: (id:number) => void;
}

const ServerItem:React.FC <Props> = ({ server, serverMinimize, setInverseState, serverClosed }) => {

    const [usageCPU, setUsageCPU] = useState<number>(0)

    const ref = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        if(server.state && server.visible){
            ref.current = setInterval( () => {
                getUsageCPU(server.id).then((res: any) => setUsageCPU(res.load))
            }, 5000)
        }else{
            setUsageCPU(0)
        }
        return () => {
            clearInterval(ref.current)
        }
    }, [server.state, server.visible])

    return (
        <main>
            <div className="window" style={{width: 320, margin: "auto", display: server.visible ? "block" : "none"}}>
                <div className="title-bar">
                    <div className="title-bar-text">
                        Server #{server.id}
                    </div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={() => serverMinimize(server.id)} style={{cursor: "pointer"}}/>
                        <button aria-label="Maximize" />
                        <button aria-label="Close" onClick={() => serverClosed(server.id)} style={{cursor: "pointer"}}/>
                    </div>
                </div>
                <div className={styles.server}>
                    <img src={server.state ? serverOnIMG : serverOffIMG} alt=""/>
                </div>
                <div className="status-bar">
                    <p className={`status-bar-field`}>Status: {server.state ? "ON" : "OFF"}</p>
                    <p className={`status-bar-field ${styles.status_field}`} onClick={() => setInverseState(server)}>{server.state ? "shut down" : "turn on"}</p>
                    <p className={`status-bar-field`}>CPU Usage: {usageCPU}%</p>
                </div>
            </div>
        </main>
    )
}

export default ServerItem;