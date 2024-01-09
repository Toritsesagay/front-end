import React, { useState, useEffect } from 'react';
import styles from './Notifications.module.css';
import { useDispatch } from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { fetchAllNotifications, deleteNotification } from '../store/action/userAppStorage';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';



function Notification() {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let [notifications, setIsNotifications] = useState([])
   


    //initialising reduzx
    let dispatch = useDispatch()


    useEffect(() => {
        fetchNotifications()
    }, [])


    let fetchNotifications = async () => {
        let res = await dispatch(fetchAllNotifications())
        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        setIsNotifications(res.message)
        setIsLoading(false)


    }


    let deleteHandler = async (id) => {
        setIsLoading(true)
        let res = await dispatch(deleteNotification(id))
        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        setIsNotifications(res.message)
        setIsLoading(false)
    }

    let closeModal = () => {
        setIsError(false)
    }


    //fetch favourite List

    return (<>
        {isLoading && <Loader />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Notifications'} />
               

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>
                        {notifications.map(data => {
                       
                            return <div className={styles.notificationCard}>
                            
                            <div className={styles.infoContainer}>
                                <p className={styles.info}><span>{data.name} </span>{data.text}</p>
                                <div className={styles.dateContainer}>
                                   
                                    <p><span className='material-icons'>schedule</span>{data.date} </p>

                                </div>
                            </div>

                            <div className={styles.iconContainer} onClick={()=>deleteHandler(data)}>
                                <span className='material-icons'>backspace</span>
                            </div>

                        </div>

                        
                        })}



                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default Notification