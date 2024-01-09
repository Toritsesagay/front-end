import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Tab from '../components/Tab';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Wallet from '../components/Wallet';
import MenuCard from '../components/MenuCard';

let menuData = [
    {
        icon: 'payments',
        title: 'Deposit',
        url: 'deposit'
    },
    {
        icon: 'toll',
        title: 'Send Money',
        url: 'send-card'
    },
    {
        icon: 'people',
        title: 'Manage friends',
        url: 'beneficiaries'
    },
    {
        icon: 'add_card',
        title: 'Bill Pay',
        url: 'billpay'
    },
    {
        icon: 'book',
        title: 'All Budget',
        url: 'dashboard'
    },
    {
        icon: 'settings',
        title: 'Branch Pay',
        url: 'dashboard'
    },
]





function DashboardHome() {

    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl, setIsUrl] = useState(false)


    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()

    //loaders state





    /*useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)
    }, [])*/

    let navigateHandler = (data) => {
        navigate(`/${data}`)
    }











    return (<>
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard}>
                <Header home={true} title={'Home'} />
                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>
                        <Wallet />

                    </div>

                    <div className={styles.mainscreenright}>
                        <div className={styles.menuContainer}>

                            {menuData.map(data => <MenuCard key={data.icon} data={data} fun={navigateHandler} />)}


                        </div>

                    </div>
                </div>


            </div>
        </div >



        {/* tab sections */}
        < Tab />
    </>);

}


export default DashboardHome