import React, { useState} from 'react';
import styles from './BillPay.module.css';
import {useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Modal from '../components/Modal/Modal';

function BillPay() {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let { user } = useSelector(state => state.userAuth)
    
    //
    let navigateHandler = ()=>{
        if(!user.accountVerified){
            setIsErrorInfo('Account has not been approved')
        }else{
            setIsErrorInfo('Contact  customer care support to continue')
        }
        setIsError(true)
    }


    let closeModal = () => {
        setIsError(false)
        
    }




    return (<>
    {isError && <Modal content={isErrorInfo} closeModal={closeModal}/>}
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{height:'100vh'}} >
                <Header  home={false} title={'Bill Pay'}/>


                <div className={styles.mainscreen}>

                    {[{
                        icon:'electric_bolt',
                        title:'Electricity'
                    },{
                        icon:'shower',
                        title:'Water Bill'
                    },{
                        icon:'propane',
                        title:'Gas Bill'
                    },{
                        icon:'lunch_dining',
                        title:'Food Order'
                    },
                    {
                        icon:'airplane_ticket',
                        title:'Airfare'
                    },{
                        icon:'cable',
                        title:'Cable'
                    },{
                        icon:'wifi',
                        title:'Internet'
                    },{
                        icon:'hotel',
                        title:'Hotel Booking'
                    },{
                        icon:'train',
                        title:'Trains Tickets'
                    },{
                        icon:'local_taxi',
                        title:'Bus Ticket'
                    },{
                        icon:'movie',
                        title:'Movie Ticket'
                    },{
                        icon:'store',
                        title:'Other Bills'
                    },].map(data=><div className={styles.billcard} key={data.title} onClick={navigateHandler}>
                        <span className='material-icons'>{data.icon}</span>

                        <p>{data.title}</p>
                        
                    </div>)}

                    

                    


                    
                </div>


            </div>
        </div >

     
    </>);

}


export default BillPay