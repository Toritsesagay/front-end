import React from 'react'
import styles from './SuccessModal.module.css';



let SuccessModal = ({ data,closeFavorite }) => {

    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>
            <div className={styles.headsection}><h3>${data.amount} transfered</h3><span className='material-icons' onClick={closeFavorite}>backspace</span></div>

            <div className={styles.body}>
                <p>TransferID: {data.transferId}</p>
                <p style={{color:'orangered'}}>Transfer paid out</p>
                <p> The transfer has been credited to {data.accountName} account</p>
                <p>{data.dateOfTransfer}</p>
              

            </div>
            <button onClick={closeFavorite}>got it</button>
        </div>

    </div>
}

export default SuccessModal
