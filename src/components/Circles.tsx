import type React from "react";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";

const useTimerRotation = () => {
    const [deg, setDeg] =useState(0);

    useEffect(() => {
        const timer = setInterval(() => setDeg(prev => prev + 3), 12);
        return () => clearInterval(timer)
    }, []);

    return `rotate(${deg}deg)`;
}


export const Circles: React.FC = () => {

    const transform = useTimerRotation()

    return (
        <div className={styles['lds-roller']} style={{ transform }}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
}
