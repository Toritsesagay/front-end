import React, { useState } from 'react';
import styles from './Help.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';



function Help() {
  
    let [isWithdraw, setIsWithdraw] = useState(false)
    let [isEdit, setIsEdit] = useState(false)
    let [isDeposit, setIsDeposit] = useState(false)






    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()

    //fetch favourite List

    let changeHandler = (dataType) => {
        if (dataType === 'withdraw') {
            setIsWithdraw(prev => !prev)
        }else if (dataType === 'edit') {
            setIsEdit(prev => !prev)
        }else if (dataType === 'deposit') {
            setIsDeposit(prev => !prev)
        }
    }









    return (<>
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Help'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler('withdraw')}>
                                <h4>How to withdraw money</h4>
                                <span className='material-icons'>
                                    {isWithdraw ? 'expand_more' : 'chevron_right'}

                                </span>

                            </div>

                            {isWithdraw ? <div className={styles.body}>

                                <p>
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acatLores Ipsom testing acat</p>
                            </div> : ""}

                        </div>


                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler('edit')}>
                                <h4>How to edit profile</h4>
                                <span className='material-icons'>
                                    {isEdit ? 'expand_more' : 'chevron_right'}

                                </span>

                            </div>

                            {isEdit ? <div className={styles.body}>

                                <p>
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acatLores Ipsom testing acat</p>
                            </div> : ""}

                        </div>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler('deposit')}>
                                <h4>How to Deposit</h4>
                                <span className='material-icons'>
                                    {isDeposit ? 'expand_more' : 'chevron_right'}

                                </span>

                            </div>

                            {isDeposit ? <div className={styles.body}>

                                <p>
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acat
                                    Lores Ipsom testing acatLores Ipsom testing acat</p>
                            </div> : ""}

                        </div>


                        <p className={styles.question}>Do you still need help?</p>


                        <button>
                            <span className='material-icons'>
                                forum
                            </span>
                            Live chat

                        </button>








                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default Help