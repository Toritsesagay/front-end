import React  from 'react';
import styles from './Tab.module.css';
import { useNavigate } from 'react-router-dom';




function Tab() {
    let navigate = useNavigate()

    let navigateHandler = (data)=>{
        navigate(`/${data}`)

    }



    return (< div className={styles.tab} >
        <div className={styles.tabsection}>
            <span className='material-icons' onClick={()=>navigateHandler('dashboard')}>home</span>
            <p>Home</p>

        </div>
        <div className={styles.tabsection} onClick={()=>navigateHandler('deposit')}>
            <span className='material-icons'>credit_card</span>
            <p>Deposit</p>
        </div>

        <div className={styles.tabsectionMiddle} onClick={()=>navigateHandler('beneficiaries')}>
            <span className='material-icons'>add</span>
        </div>

        <div className={styles.tabsection} onClick={()=>navigateHandler('transfer')}>
            <span className='material-icons'>trending_up</span>
            <p>transfer</p>
        </div>
        <div className={styles.tabsection}>
            <span className='material-icons' onClick={()=>navigateHandler('settings')}>explore</span>
            <p>Explore</p>
        </div>

    </div >);
}


export default Tab