import React, { useState, useEffect} from 'react';
import styles from './Login.module.css';
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import { phoneSignup } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';




function PhoneSignupPage() {
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isCode, setIsCode] = useState('')
    let [isNumber, setIsNumber] = useState('')
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl, setIsUrl] = useState(false)
    let navigate = useNavigate()

    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
  
 

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])



   


    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)


        let response = await dispatch(phoneSignup({
            countryCode:isCode,
            phoneNumber:isNumber
        }))


        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            setIsUrl(response.url)
        }

        setIsLoading(false)
        setIsError(true)
        setIsErrorInfo(response.message)
        setIsUrl(response.url)

    }


    let closeModal = () => {
        setIsError(false)
        if(isUrl){
            navigate(`${isUrl}`)
        }
    }

    let changePhone = (e) =>{
        let val = e.target.value
        setIsNumber(val)
    }

    let changeCode = (e) =>{
        let val = e.target.value
        setIsCode(val)
    }




    return (<>
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}

       

        <div className={styles.screenContainer}>
        {isLoading && <Loader />}
            <div className={styles.rightContainer}>
               
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>

                    <div className={styles.navigate}>
                        <span className='material-icons'>arrow_back</span>
                        <h2>Enter Phone</h2>
                    </div>

                    <div className={styles.inputcontainer}>
                        <p> By continuing you will receive an SMS to verify your phone number </p>

                        <div className={styles.formHorizontalCard}>
                            <input className={styles.phoneNumberPrefix} placeholder='+44' value={isCode} onChange={changeCode}/>

                            <input className={styles.phoneNumber} placeholder='5658897766' value={isNumber} onChange={changePhone}/>
                        </div>

                    </div>

                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '20px' }} text="Send" />
                    </div>



                </form>

            </div>


        </div>
    </>

    );
}

export default PhoneSignupPage