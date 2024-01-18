import React, { useState } from 'react';
import styles from './Settings.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Switch from 'react-switch';



function Settings() {
    let [isSwitched, setIsSwitched] = useState(false)



    let settingData = [
        {
            leftIcon: 'lock',
            title: 'Change Password',
            rightIcon: 'arrow_forward_ios',
            url:'forgetpassword'
        },
        {
            leftIcon: 'notifications',
            title: 'Notification',
            rightIcon: 'arrow_forward_ios',
            url:'notifications'
        },
        {
            leftIcon: 'settings',
            title: 'Privacy Settings',
            rightIcon: 'arrow_forward_ios',
            url:'privacy'
        },
        {
            leftIcon: 'payment',
            title: 'Payment',
            rightIcon: 'arrow_forward_ios',
            url:'deposit'
        },
        {
            leftIcon: 'logout',
            title: 'Signout ',
            rightIcon: '',
            url:'home'
        }
    ]



    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()

    //fetch favourite List

    let changeHandler = () => {
        setIsSwitched(false)
    }

    let navigateHandler = (data)=>{
        navigate(`/${data}`)
    }




    return (<>
        <div className={styles.screenContainer}>
            <SideBar active={'Settings'}/>
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Settings'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.accountCard}>
                            <h1 className={styles.accountHeader}>Accounts</h1>

                            <div className={styles.body}>
                                <div className={styles.body}>


                                    {settingData.map(data => <div className={styles.settingCard} key={data.leftIcon} onClick={()=>navigateHandler(data.url)}>
                                        <div className={styles.left}>
                                            <span className='material-icons'>
                                                {data.leftIcon}
                                            </span>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className={styles.right}>
                                            <span className='material-icons'>
                                                {data.rightIcon}
                                            </span>


                                        </div>



                                    </div>)}





                                </div>




                            </div>

                        </div>

                        <h4 className={styles.moreText}>More Options</h4>


                        <div className={styles.accountCard}>



                            <div className={styles.body}>
                                <div className={styles.body}>


                                   <div className={styles.settingCard}>
                                        <div className={styles.left}>
                                            <span className='material-icons'>
                                                email
                                            </span>
                                            <p>Newsletter</p>
                                        </div>
                                        <div className={styles.right}>



                                        <Switch uncheckedIcon={false} checkedIcon={false} checked={isSwitched} onChange={changeHandler}
                                        
                            

                                        
                                        />


                                        </div>



                                    </div>

                                    <div className={styles.settingCard}>
                                        <div className={styles.left}>
                                            <span className='material-icons'>
                                                message
                                            </span>
                                            <p>Text Message</p>
                                        </div>
                                        <div className={styles.right}>



                                        <Switch uncheckedIcon={false} checkedIcon={false} checked={isSwitched} onChange={changeHandler}
                                        
                            

                                        
                                        />


                                        </div>



                                    </div>


                                    <div className={styles.settingCard}>
                                        <div className={styles.left}>
                                            <span className='material-icons'>
                                                call
                                            </span>
                                            <p>Phone Call</p>
                                        </div>
                                        <div className={styles.right}>



                                        <Switch uncheckedIcon={false} checkedIcon={false} checked={isSwitched} onChange={changeHandler}
                                        
                            

                                        
                                        />


                                        </div>



                                    </div>






                                </div>




                            </div>




                        </div>



                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default Settings