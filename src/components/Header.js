import React, { useState } from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Header({ home, title }) {
    let [isShowMenu, setIsShowMenu] = useState(false);
    let { user } = useSelector(state => state.userAuth)


    let menuHandler = () => {
        setIsShowMenu(prev => !prev)
    }

    let navigate = useNavigate()

    let navigateBack = () => {
        navigate(-1)
    }


    let navigateHandler = (data) => {
        navigate(`/${data}`)
    }


    let notificationHandler = () => {
        navigate('/notifications')
    }

    return (<div className={styles.header}>
        <div className={styles.innerheader}>
            <div className={styles.innerheaderleft}>
                {!home ? <span className='material-icons' onClick={navigateBack}>arrow_back</span> : ''}
                <h2>{title}</h2>
            </div>

            <div className={styles.innerheaderright}>

                <div className={styles.innerheaderrightbutton}>
                <div className={styles.deposit} onClick={() => navigateHandler('deposit')}>
                        Deposit
                    </div>
            
                </div>
                {home ? <div className={styles.notification}>
                    <span className='material-icons' onClick={notificationHandler}>notifications</span>
                    <div className={styles.indicator}></div>
                </div> : ""}
                
                {/*<div className={styles.headerImage}>
                    <img src={user.profilePhotoUrl} alt='' />
                </div>*/}
                {home ? <span className={`material-icons ${styles.hamburger}`} onClick={menuHandler}>menu</span> : ""}


            </div>
        </div>

        <ul className={`${styles.mobilemenu} ${isShowMenu ? styles.showmenu : ''}`}>
            <li className={styles.item} onClick={() => navigateHandler('dashboard')}>
                Home

            </li>
            <li className={styles.item} onClick={() => navigateHandler('profile')}>
                Profile

            </li>
            <li className={styles.item} onClick={() => navigateHandler('deposit')}>
                Deposit

            </li>
            <li className={styles.item} onClick={() => navigateHandler('withdraw')}>
                Bill Pay

            </li>
            <li className={styles.item} onClick={() => navigateHandler('transfer')}>
                Transfer

            </li>
            <li className={styles.item} onClick={() => navigateHandler('card')}>
                Card

            </li>
            <li className={styles.item} onClick={() => navigateHandler('loan')}>
                Loan

            </li>
            <li className={styles.item} onClick={() => navigateHandler('transaction-history')}>
                History
            </li>


            <li className={styles.item} onClick={() => navigateHandler('settings')}>
                Settings

            </li>

            <li className={styles.item} onClick={() => navigateHandler('login')}>
                Logout

            </li>




        </ul>



    </div>);

}


export default Header