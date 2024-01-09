import React, { useState} from 'react';
import styles from './CardForm.module.css';
import { useDispatch} from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { submitOtpCode} from '../store/action/userAppStorage';
import { useNavigate } from 'react-router-dom';


function OTP() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [otpCode, setIsOtpCode] = useState('')
    let navigate = useNavigate()


    let dispatch = useDispatch()
    let onChangeHandler = (name, val) => {
        if (name === 'otpCode') {
            setIsOtpCode(val)
        }
    }


    let submitHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let response = await dispatch(submitOtpCode({
            otpCode
        }))



        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return
        }
        setIsLoading(false)
        navigate(`/${response.url}`)
    }



 

    let closeModal = () => {
        setIsError(false)
    }

   


    return (<>
        {isLoading && <Loader />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'OTP'} />
                <div className={styles.mainscreen}>

                    <div className={styles.mainscreenright}>

                        <form className={styles.form} onSubmit={submitHandler}>
                            <div className={styles.formbody}>
                                <p>Please enter the one time password sent to your phone number</p>
                                <input placeholder='Enter OTP' onChange={(e) => onChangeHandler('otpCode', e.target.value)} value={otpCode} required />

                                <button>submit</button>

                            </div>


                        </form>
                    </div>

                 

                   
                </div>
            </div>
        </div>
    </>);

}


export default OTP