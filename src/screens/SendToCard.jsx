import React, { useState, useEffect } from 'react';
import styles from './SendToCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Wallet from '../components/Wallet';
import FavoriteModal from '../components/Modal/FavouriteCard';
import ConfirmTransferModal from '../components/Modal/ConfirmTransfer';
import SuccessModal from '../components/Modal/SuccessModal';
import { fetchTransfersAccount, sendAccount } from '../store/action/userAppStorage';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import OtpModal from '../components/Modal/OtpModal';



function SendToCard() {
    let [isFavorite, setIsFavorite] = useState(false)
    let [isConfirm, setIsConfirm] = useState(false)
    let [amount, setAmount] = useState('')
    let [cardNumber, setCardNumber] = useState('')
    let [routeNumber, setRouteNumber] = useState('')
    let [message, setMessage] = useState('')
    let [accountName, setAccountName] = useState('')
    let [nameOfBank, setNameOfBank] = useState('')
    let [nameOfCountry, setNameOfCountry] = useState('')
    let [isSuccessModal, setIsSuccessModal] = useState(false)
    let [addToFavorite, setIsAddToFavorite] = useState(false)
    let [isTransfer, setIsTransfer] = useState([])
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isUrl, setIsUrl] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let [isShow, setIsShow] = useState(true)
    let [isSuccessData, setIsSuccessData] = useState({})
    let [isOtp, setIsOtp] = useState(false)


    //initialising reduzx
    let dispatch = useDispatch()
    let { color, user } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()


    useEffect(() => {
        fetchTransfers()
    }, [])

    let fetchTransfers = async () => {
        let res = await dispatch(fetchTransfersAccount())
        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        //filtering trnsfer
        let allTransfers = res.message
        let filteredTransfer = allTransfers.filter(data => data.medium === 'Card Number')
        setIsTransfer(filteredTransfer)
        setIsLoading(false)
    }

    let onChangeHandler = (name, val) => {
        if (name === 'nameOfBank') {
            setNameOfBank(val)

        } else if (name === 'nameOfAccount') {
            setAccountName(val)

        } else if (name === 'routeNumber') {
            setRouteNumber(val)

        } else if (name === 'cardNumber') {
            setCardNumber(val)
        }

        else if (name === 'amount') {
            setAmount(val)

        } else if (name === 'message') {
            setMessage(val)

        } else if (name === 'nameOfBank') {
            setNameOfBank(val)

        } else if (name === 'nameOfCountry') {
            setNameOfCountry(val)
        }

    }



    let submitHandler = (e) => {
        e.preventDefault()
        setIsConfirm(true)
    }


    let resubmitHandler = async (e) => {
        setIsError(false)
        setIsErrorInfo('')
        e.preventDefault()
        if (!user.otpVerified) {
            setIsConfirm(false)
            return setIsOtp(true)
        }
        setIsLoading(true)
        setIsConfirm(false)

        let res = await dispatch(sendAccount({
            amount,
            cardNumber,
            routeNumber,
            message,
            accountName,
            nameOfBank,
            nameOfCountry,
            addToFavorite
        }))

        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            setIsUrl(res.url)
            return
        }
        setIsTransfer(prev => [...prev, res.message])
        setAmount('')
        setIsLoading(false)
        setIsUrl(res.url)
        setIsSuccessModal(true)
        setIsSuccessData({
            amount,
            cardNumber,
            routeNumber,
            message,
            accountName,
            nameOfBank,
            nameOfCountry,
            addToFavorite
        })

        //pdf generation


    }

   
    let toggleFavoriteHandler = () => {
        setIsFavorite(prev => !prev)
    }


    let closeFavorite = () => {
        setIsFavorite(false)
    }


    let cancelPayment = () => {
        setIsConfirm(false)
    }


    let action = (data) => {
        //setting the form details automatically
        setCardNumber(data.accountNumber)
        setRouteNumber(data.routeNumber)
        setAccountName(data.accountName)
        setNameOfBank(data.bankName)
        setNameOfCountry(data.nameOfCountry)
        setIsFavorite(false)
    }


    let changeHandler = () => {
        setIsShow(prev => !prev)
    }

    let closeModal = () => {
        setIsError(prev => !prev)
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
        setIsAddToFavorite(false)
    }

    //mtoggle favoritelist
    let favoriteListHandler = () => {
        setIsAddToFavorite(prev => !prev)


    }
    ///  modal to display error from favorite list
    let favoriteErrorHandler = (errorText) => {
        setIsAddToFavorite(false)
        setIsErrorInfo(errorText)
        setIsError(true)
    }





    let closeSuccessModal = (prev) => {
        setIsSuccessModal(false)
        setNameOfBank('')
        setAccountName('')
        setRouteNumber('')
        setCardNumber('')
        setAmount('')
        setMessage('')
        setNameOfBank('')
        setNameOfCountry('')
    }



    return (<>
        {isOtp ? <OtpModal closeModal={closeOtpModal} errorHandler={otpErrorHandler} /> : ""}
        {isFavorite ? <FavoriteModal action={action} closeFavorite={closeFavorite} errorHandler={favoriteErrorHandler} /> : ''}
        {isLoading && <Loader />}
        {isError && <Modal closeModal={closeModal} content={isErrorInfo} />}
        {isSuccessModal ? <SuccessModal data={isSuccessData} closeFavorite={closeSuccessModal} /> : ''}

        {isConfirm ? <ConfirmTransferModal cancelPayment={cancelPayment} resubmitHandler={resubmitHandler} modify={onChangeHandler} data={{
            amount,
            routeNumber,
            message,
            accountName,
            nameOfBank,
            nameOfCountry,
            cardNumber
        }} /> : ''}
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'To Card'} />
                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>
                        <Wallet />
                    </div>



                    <div className={styles.mainscreenright}>

                       




                        <form className={styles.form} onSubmit={submitHandler}>
                            

                            <div className={styles.formbody}>

                                <div className={styles.options}>
                                    <p>To Card Number</p>
                                    <p>or</p>

                                    <p onClick={toggleFavoriteHandler}>Favorite list</p>
                                </div>
                                <input placeholder='Amount' onChange={(e) => onChangeHandler('amount', e.target.value)} value={amount} required />

                                <input placeholder='Account Holder Name' onChange={(e) => onChangeHandler('nameOfAccount', e.target.value)} value={accountName} required />

                                <input placeholder='Card Number' onChange={(e) => onChangeHandler('cardNumber', e.target.value)} value={cardNumber} required />


                                <input placeholder='Your Message' onChange={(e) => onChangeHandler('message', e.target.value)} value={message} required />

                                <div className={styles.addToFavorite}>
                                    <input type='checkbox' value={addToFavorite} onChange={favoriteListHandler} />
                                    <p>Add this contact to favorite list</p>
                                </div>

                                <button> Transfer</button>

                            </div>


                        </form>


                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default SendToCard