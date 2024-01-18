import React, { useState, useEffect } from 'react';
import styles from './Deposit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Wallet from '../components/Wallet';
import PaymentModal from '../components/Modal/PaymentModal';
import { createDeposits } from '../store/action/userAppStorage';
import Loader from '../components/loader';
import Modal from '../components/Modal/Modal';




function Deposit() {
    let [isDeposits, setIsDeposits] = useState(false)
    let [amount, setAmount] = useState('')
    let [reason, setReason] = useState('')
    let [isShow, setIsShow] = useState(false)
    let [isPay, setIsPay] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')





    let [sourceAccountNumber, setSourceAccountNumber] = useState('')
    let [sourceAccount, setSourceAccount] = useState('')

    //initialising reduzx
    let dispatch = useDispatch()
    let { color, accounts } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()






    let onChangeHandler = (name, val) => {
        if (name === 'amount') {
            setAmount(val)
        } else if (name === 'reason') {
            setReason(val)
        }
    }






    let changeHandler = (dataType) => {
        setIsShow(prev => !prev)
    }

    let togglePayModal = () => {
        setIsPay(false)
    }



    let submitHandler = async (e) => {
        e.preventDefault()
      
        if(!sourceAccount){
            return
        }
        setIsLoading(true)

        let res = await dispatch(createDeposits({
            amount,
            reason,
            sourceAccount
        }))

        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        setIsDeposits(res.message)
        setAmount('')
        setIsLoading(false)

        setIsError(true)
        setIsErrorInfo('Deposit was sucessful')
        setIsLoading(false)

    }

    let payHandler = () => {
        setIsPay(true)
    }

    let closeModal = () => {
        setIsError(false)
        setIsErrorInfo('')
    }


    let selectAccountHandler = (e) => {
        setSourceAccountNumber(e.target.value)
        let foundAccount = accounts.find(data => data.accountNumber === e.target.value)
        setSourceAccount(foundAccount)

    }


    useEffect(() => {
        if(accounts.length > 0){
            setSourceAccount(accounts[0])
            setSourceAccountNumber(accounts[0].accountNumber)
        }
       
    }, [])



    return (<>
        {isPay ? <PaymentModal closeFun={togglePayModal} /> : ''}
        {isLoading && <Loader />}
        {isError && <Modal closeModal={closeModal} content={isErrorInfo} />}

        <div className={styles.screenContainer}>
            <SideBar active='Deposit'/>
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Deposit Fund'} />


                <div className={styles.mainscreen}>
                    {/*<div className={styles.mainscreenleft}>
                        <Wallet />
                    </div>*/}

                    <div className={styles.mainscreenright}>

                        <form className={styles.form} onSubmit={submitHandler}>

                            <h6 > Source Account </h6>

                            <select value={sourceAccountNumber} onChange={selectAccountHandler}>
                                {accounts.length > 0 && accounts.map(data => <option>{data?.accountNumber}</option>)}
                            </select>


                            <input value={sourceAccount.accountType} readOnly />

                            <input value={sourceAccount.accountNumber} readOnly />

                            <h6 > Deposit information </h6>


                            <div className={styles.formbody}>

                                <input placeholder='Enter Amount ' onChange={(e) => onChangeHandler('amount', e.target.value)} value={amount} required type='number' />

                                <input placeholder='Reason For Deposit ' onChange={(e) => onChangeHandler('reason', e.target.value)} value={reason} required />


                                <button> Deposit</button>

                            </div>


                        </form>


                    </div>
                </div>


            </div>
        </div >


    </>);

}


export default Deposit