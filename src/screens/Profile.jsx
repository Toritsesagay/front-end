import React, { useState } from 'react';
import styles from './Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';



function Profile() {
    let menuData = [
        {
            icon:'credit_card',
            title:'Account',
            url:'settings'
        },
        /*{
            icon:'toll',
            title:'Set Your Budget',
            url:'budget'
        },*/
        {
            icon:'payment',
            title:'Payment Method',
            url:'deposit'
        },
        {
            icon:'notifications',
            title:'Notification',
            url:'notifications'
        },
        /*{
            icon:'explore',
            title:'ATM Search',
            url:'search'
        },*/
        {
            icon:'rule',
            title:'Terms and conditions',
            url:'privacy'
        },
        {
            icon:'chat',
            title:'Support',
            url:'contact'
        },
    ]



    //initialising reduzx
    let dispatch = useDispatch()
    let { user } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()

    //fetch favourite List









    return (<>
        <div className={styles.screenContainer}>
            <SideBar active={'Profile'}/>
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Profile'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.photoContainer}>
                            <div className={styles.imageContainer}>
                                <img src={user.profilePhotoUrl} />

                            </div>
                        </div>

                       {/*<div className={styles.accountContainer}>
                            <div className={styles.account}>
                                <p className={styles.accountname}><span className='material-icons'>person</span> Name:</p>
                                <p className={styles.accountnumber}>{user.firstName} {user.lastName}</p>
                            </div>
                        </div>

                        <div className={styles.accountContainer}>
                            <div className={styles.account}>
                                <p className={styles.accountname}><span className='material-icons'>credit_card</span>A/C:</p>
                                <p className={styles.accountnumber}>{user.acountNumber}</p>
                            </div>
                        </div>

                        <div className={styles.accountContainer}>
                            <div className={styles.account}>
                                <p className={styles.accountname}><span className='material-icons'>credit_card</span>Route/swift:</p>
                                <p className={styles.accountnumber}>{user.swiftNumber}</p>
                            </div>
                        </div>*/}


                        <div className={styles.menuContainer}>
                            {menuData.map(data=><div className={styles.menuCard} onClick={()=>{
                                navigate(`/${data.url}`)

                            }}>
                                <span className='material-icons'>
                                    {data.icon}
                                </span>
                                <p>
                                    {data.title}
                                </p>
                            </div>)}


                           


                        </div>






                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default Profile