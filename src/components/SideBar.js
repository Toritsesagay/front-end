import React  from 'react';
import styles from './SideBar.module.css';
import { useNavigate } from 'react-router-dom';



function SideBar() {

    let navigate = useNavigate()
    let navigateHandler = (url)=>{
        navigate(`/${url}`)

    }
    

    return (<div className={styles.sideBar}>
        

        <div className={styles.sideBarMenu}>

            <div className={styles.menu} onClick={()=>navigateHandler('home')} >
                <span className='material-icons'>
                    home
                </span>
                <p>Home</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('profile')}>
                <span className='material-icons'>
                    person
                </span>
                <p>Profile</p>
            </div>



            <div className={styles.menu} onClick={()=>navigateHandler('deposit')}>
                <span className='material-icons'>
                    toll
                </span>
                <p>Deposit</p>
            </div>



            <div className={styles.menu} onClick={()=>navigateHandler('withdraw')}>
                <span className='material-icons'>
                    savings
                </span>
                <p>Withdraw</p>
            </div>


            <div className={styles.menu} onClick={()=>navigateHandler('transfer')}>
                <span className='material-icons'>
                    send_to_mobile
                </span>
                <p>Transfer</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('beneficiaries')}>
                <span className='material-icons'>
                    people
                </span>
                <p>People</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('transaction-history')}>
                <span className='material-icons'>
                    history
                </span>
                <p>History</p>
            </div>

            <div className={styles.menu} onClick={()=>navigateHandler('settings')}>
                <span className='material-icons'>
                    settings
                </span>
                <p>Settings</p>
            </div>


        </div>


    </div>);

}


export default SideBar