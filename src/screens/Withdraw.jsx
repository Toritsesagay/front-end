import React, { useState } from 'react';
import styles from './Deposit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { withdraws } from '../store/action/userAppStorage';
import Loader from '../components/loader';
import Modal from '../components/Modal/Modal';
import OtpModal from '../components/Modal/OtpModal';
import { useEffect } from 'react';



function Withdraw() {
    let [isWithdraw, setIsWithdraw] = useState(false)
    let [amount, setAmount] = useState('')
    let [isUrl, setIsUrl] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isBody, setIsbody] = useState('')
    let [isOtp, setIsOtp] = useState(false)
    let { color, user, accounts } = useSelector(state => state.userAuth)
    let [country, setIsCountry] = useState('')
    let [nameOfBank, setIsNameOfBank] = useState('')
    let [accountName, setIsAccountName] = useState('')
    let [accountNumber, setIsAccountNumber] = useState('')
    let [stateName, setIsStateName] = useState('')
    let [bankAddress, setIsBankAddress] = useState('')
    let [routeNumber, setIsRouteNumber] = useState('')

    let [sourceAccountNumber, setSourceAccountNumber] = useState('')
    let [sourceAccount, setSourceAccount] = useState('')

    //initialising reduzx
    let dispatch = useDispatch()
    let navigate = useNavigate()
    //loaders state


    let onChangeHandler = (name, val) => {
        if (name === 'amount') {
            setAmount(val)
        } else if (name == 'country') {
            setIsCountry(val)

        } else if (name == 'nameOfBank') {
            setIsNameOfBank(val)

        } else if (name == 'accountName') {
            setIsAccountName(val)

        } else if (name == 'accountNumber') {
            setIsAccountNumber(val)

        } else if (name == 'stateName') {
            setIsStateName(val)

        } else if (name == 'bankAddress') {
            setIsBankAddress(val)

        } else if (name == 'routeNumber') {
            setIsRouteNumber(val)
        }
    }

   

    let closeModal = () => {
        setIsError(false)
        setIsErrorInfo('')
        if (isUrl) {
            navigate(`/${isUrl}`)
        }
    }

    let closeOtpModal = () => {
        setIsOtp(false)

    }

    let otpErrorHandler = (errorText) => {
        setIsOtp(false)
        setIsErrorInfo(errorText)
        setIsError(true)
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


    let submitHandler = async (e) => {
        e.preventDefault()
        if(!sourceAccount){
            alert('account has not been created for this user.contact customer care support')
            return
        }
        setIsLoading(true)
        if (!user.otpVerified) {
            setIsLoading(false)
            return setIsOtp(true)
        }

        let res = await dispatch(withdraws({
            amount,
            country,
            nameOfBank,
            accountName,
            accountNumber,
            stateName,
            bankAddress,
            routeNumber,
            sourceAccount
        }))
        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            setIsUrl(res.url)
            return
        }
      
        setAmount('')
        setIsLoading(false)
        setIsUrl(res.url)
        setIsError(true)
        setIsErrorInfo('withdrawal success')
    }







    return (<>
        {isLoading && <Loader />}
        {isOtp ? <OtpModal closeModal={closeOtpModal} errorHandler={otpErrorHandler} /> : ""}

        {isError && <Modal closeModal={closeModal} content={isErrorInfo} />}

        <div className={styles.screenContainer}>
            <SideBar active={'Bill Pay'} />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Bill Pay'} />

                <div className={styles.mainscreen}>
                  
                    <div className={styles.mainscreenright}>

                        <form className={styles.form} onSubmit={submitHandler}>
                            

                            <div className={styles.formbody}>

                                <h6 > Source Account </h6>

                                <select value={sourceAccountNumber} onChange={selectAccountHandler}>
                                    {accounts.map(data => <option>{data.accountNumber}</option>)}
                                </select>


                                <input value={sourceAccount.accountType}  readOnly/>

                                <input   value={sourceAccount.accountNumber}  readOnly/>







                                <h6 > Withdraw information </h6>


                                <input placeholder='Enter Amount ' onChange={(e) => onChangeHandler('amount', e.target.value)} value={amount} required />

                                <input placeholder='Country ' onChange={(e) => onChangeHandler('country', e.target.value)} value={country} required />

                                <input placeholder='Name Of Bank ' onChange={(e) => onChangeHandler('nameOfBank', e.target.value)} value={nameOfBank} required />

                                <input placeholder='Account Name ' onChange={(e) => onChangeHandler('accountName', e.target.value)} value={accountName} required />


                                <input placeholder='Account Number ' onChange={(e) => onChangeHandler('accountNumber', e.target.value)} value={accountNumber} required />

                                <input placeholder='State Name' onChange={(e) => onChangeHandler('stateName', e.target.value)} value={stateName} required />


                                <input placeholder='Bank Address' onChange={(e) => onChangeHandler('bankAddress', e.target.value)} value={bankAddress} required />


                                <input placeholder='Route Number' onChange={(e) => onChangeHandler('routeNumber', e.target.value)} value={routeNumber} required />


                                <button> Withdraw</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    </>);

}


export default Withdraw