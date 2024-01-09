import React, { useState, useEffect} from 'react';
import styles from './Login.module.css';
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import { verifyPhone } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';




function PhoneVerification() {
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isNumber_1, setIsNumber_1] = useState('')
    let [isNumber_2, setIsNumber_2] = useState('')
    let [isNumber_3, setIsNumber_3] = useState('')
    let [isNumber_4, setIsNumber_4] = useState('')
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl,setIsUrl] = useState('')
    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()
 




    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])



   


    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)


        let response = await dispatch(verifyPhone({
            code:`${isNumber_1}${isNumber_2}${isNumber_3}${isNumber_4}`
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
            navigate(`/${isUrl}`)
        }
    }


    let changeNumber_1 = (e) =>{
        let val = e.target.value
        if(val.length < 2){
            return setIsNumber_1(val)
        }
    }

    let changeNumber_2 = (e) =>{
        let val = e.target.value
        if(val.length < 2){
            return setIsNumber_2(val)
        }
    }
    let changeNumber_3 = (e) =>{
        let val = e.target.value
        if(val.length < 2){
            return setIsNumber_3(val)
        }
    }
    let changeNumber_4 = (e) =>{
        let val = e.target.value
        if(val.length < 2){
            return setIsNumber_4(val)
        }
    }




    return (<>
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}

        <div className={styles.screenContainer}>
        {isLoading && <Loader />}
            <div className={styles.rightContainer}>
            
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>

                    <div className={styles.navigate}>
                        <span className='material-icons'>arrow_back</span>
                        <h2>Verification</h2>
                    </div>

                    <div className={styles.inputcontainer}>
                        <p> Enter 4 digit pin sent to you</p>

                        <div className={styles.formHorizontalCard}>
                            <input className={styles.numberCard}  value={isNumber_1} onChange={changeNumber_1} maxLength={1} type='number'/>
                            <input className={styles.numberCard}  value={isNumber_2} onChange={changeNumber_2} maxLength={1} type='number'/>
                            <input className={styles.numberCard}  value={isNumber_3} onChange={changeNumber_3} maxLength={1} type='number'/>
                            <input className={styles.numberCard}  value={isNumber_4} onChange={changeNumber_4} maxLength={1} type='number'/>
                        </div>

                    </div>

                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '10px' }} text="Send" />
                    </div>

                    <p className={styles.alternative}><span>Resend code</span></p>



                </form>

            </div>


        </div>
    </>

    );
}

export default PhoneVerification