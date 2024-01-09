import React from 'react';
import styles from './WalletCard.module.css';





function WalletCard({data}) {

    return (<>
        <div className={styles.earn} style={{backgroundColor:data.backgroundColor}}>
            <p className={styles.day} ><span className='material-icons' style={{color:data.color,margin:'0px'}}>{data.icon}</span> {data.name}</p>
            <p className={styles.price} style={{color:data.color,margin:'0px'}}>${data.price}</p>
        </div>
    </>);

}


export default WalletCard