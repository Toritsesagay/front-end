import React  from 'react';
import styles from './SideBar.module.css';
import { useNavigate } from 'react-router-dom';



function SideBar({active}) {

    let navigate = useNavigate()
    let navigateHandler = (url)=>{
        navigate(`/${url}`)
    }


    return (<div className={styles.sideBar}>

        <div className={styles.sideBarMenu}>

            <div className={styles.menu} onClick={()=>navigateHandler('home')} style={{backgroundColor:active=== 'home'?'rgb(250,250,250)':''}} >
                <span className='material-icons'>
                    home
                </span>
                <p>Home</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('profile')} style={{backgroundColor:active=== 'Profile'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    person
                </span>
                <p>Profile</p>
            </div>



            <div className={styles.menu} onClick={()=>navigateHandler('deposit')} style={{backgroundColor:active=== 'Deposit'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    toll
                </span>
                <p>Deposit</p>
            </div>



            <div className={styles.menu} onClick={()=>navigateHandler('withdraw')} style={{backgroundColor:active=== 'Withdraw'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    savings
                </span>
                <p>Bill Pay</p>
            </div>


            <div className={styles.menu} onClick={()=>navigateHandler('transfer')} style={{backgroundColor:active=== 'Transfer'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    send_to_mobile
                </span>
                <p>Transfer</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('card')} style={{backgroundColor:active=== 'Card'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                   payments
                </span>
                <p>Card</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('loan')} style={{backgroundColor:active=== 'Loan'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    credit_score
                </span>
                <p>Loan</p>
            </div>



            <div className={styles.menu} onClick={()=>navigateHandler('beneficiaries')} style={{backgroundColor:active=== 'Beneficiaries'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    people
                </span>
                <p>People</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('transaction-history')} style={{backgroundColor:active=== 'History'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    history
                </span>
                <p>History</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('settings')} style={{backgroundColor:active=== 'Settings'?'rgb(250,250,250)':''}}>
                <span className='material-icons'>
                    settings
                </span>
                <p>Settings</p>
            </div>


        </div>


    </div>);

}


export default SideBar