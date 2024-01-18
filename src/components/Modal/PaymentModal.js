import React from 'react'
import styles from './SuccessModal.module.css';

let PaymentModal = ({ amount,closeFun}) => {

    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>
            <div className={styles.headsection}><h3>Make payment</h3><span className='material-icons' onClick={closeFun}>backspace</span></div>

            <div className={styles.body}>
                <p>Please contact contact customer care support to make your payment</p>
                
            </div>
            <button onClick={closeFun}>got it</button>
        </div>

    </div>
}

export default PaymentModal