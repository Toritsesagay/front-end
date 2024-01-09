import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/Input';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import { sendRecoverEmail } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';




function ForgetPassword() {

    let [userEmail, setUserEmail] = useState("")
    let [userEmailError, setUserEmailError] = useState("")
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()
    //loaders state




    let isFormValid = userEmail && !userEmailError



    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])



    let setFormDetails = useCallback(e => {
        setIsError(false)
        if (e.formName === "userEmail") {
            let formValue = e.value
            setUserEmail(formValue)
            setUserEmailError(e.error)

        }


    }, [])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)
        let response = await dispatch(sendRecoverEmail({
            email: userEmail
        }))

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
        }

        setIsLoading(false)
        setIsError(true)
        setIsErrorInfo(response.message)

    }


    let closeModal = () => {
        setIsError(false)
    }





    return (<>

        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}

      

        <div className={styles.screenContainer}>
        {isLoading && <Loader />}
            <div className={styles.rightContainer}>
              
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>

                    <div className={styles.navigate} >

                        <h4 style={{textAlign:'center',width:'100%'}}>Change password</h4>
                    </div>

                    <div className={styles.inputcontainer}>

                        <p> We will send a email to the email address you registered to change your password</p>


                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='email'
                                types='email'
                                className="formcard"
                                setFormDetails={setFormDetails}
                                formName="userEmail"
                                placeholder='Email address'
                            />
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

export default ForgetPassword