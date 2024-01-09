import React from 'react';
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css";
import styles from './Fallback.module.css';


const Fallback = () => {
    return (<div className={styles.container}>
        <div>
            <Spinner size={40} className={styles.loader} style={{ color:'rgb(52, 134, 52);' }} />
        </div>

    </div>)
}

export default Fallback