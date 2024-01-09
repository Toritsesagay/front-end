import React from 'react'
import styles from './ConfirmTransfer.module.css';


let ConfirmTransferModal = ({ data, modify, cancelPayment, resubmitHandler }) => {

    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>
            <div className={styles.headsection}><h3>Transaction Details</h3><span className='material-icons' onClick={cancelPayment}>backspace</span></div>

            <form className={styles.body} onSubmit={resubmitHandler}>

                <div className={styles.inputCard}>
                    <label>
                        Amount
                    </label>
                    <input onChange={(e) => modify('amount', e.target.value)} value={data.amount} />
                </div>


                <div className={styles.inputCard}>
                    <label>
                        To Name
                    </label>

                    <input onChange={(e) => modify('accountName', e.target.value)} value={data.accountName} />
                </div>


                <div className={styles.inputCard}>
                    <label>
                    Account Number
                    </label>

                    <input onChange={(e) => modify('accountNumber', e.target.value)} value={data.accountNumber} />
                </div>


                <div className={styles.inputCard}>
                    <label>
                   Route Number
                    </label>

                    <input onChange={(e) => modify('routeNumber', e.target.value)} value={data.routeNumber} />
                </div>



                <div className={styles.inputCard}>
                    <label>
                        Reason
                    </label>

                    <input onChange={(e) => modify('message', e.target.value)} value={data.message} />
                </div>

                <div className={styles.inputCard}>
                    <label>
                    Name Of Bank
                    </label>
                    <input onChange={(e) => modify('nameOfBank', e.target.value)} value={data.nameOfBank} />
                </div>

                <div className={styles.inputCard}>
                    <label>
                    Name Of Country
                    </label>
                    <input onChange={(e) => modify('nameOfCountry', e.target.value)} value={data.nameOfCountry} />
                </div>




                <button>confirm payment</button>

            </form>
        </div>

    </div>
}

export default ConfirmTransferModal
