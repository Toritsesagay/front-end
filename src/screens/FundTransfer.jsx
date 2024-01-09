import React, { useState} from 'react';
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
        title: 'To Bank Account',
        url:'send-account'
    },
    {
        icon: 'toll',
        title: 'Local transfer',
        url:'send-card'
    },
   
    {
        icon: 'add_card',
        title: 'billpay',
        url:'billpay'
    },
   
]


function FundTransfer() {

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









    let closeModal = () => {
        setIsError(false)
        if (isUrl) {
            navigate(isUrl)
        }
    }

    let funHandler = (data)=>{
        navigate(`/${data}`)
    }




    return (<>
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{height:'100vh'}} >
                <Header  home={false} title={'Transfer'}/>


                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>
                        <Wallet />

                       

                    </div>

                    <div className={styles.mainscreenright}>
                        <div className={styles.menuContainer}>
                            
                          {menuData.map(data=><MenuCard  key ={data.icon} data={data} fun={funHandler}/>)} 


                        </div>

                    </div>
                </div>


            </div>
        </div >

     
    </>);

}


export default FundTransfer