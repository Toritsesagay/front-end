import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch} from "react-redux";
import {useNavigate, useParams } from 'react-router-dom';
import FormInput from '../components/Input';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import { changePassword, checkRecoverTokenValidity } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';



function ResetPassword() {

    let [password, setPassword] = useState("")
    let [passwordError, setPasswordError] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    let [confirmPasswordError, setConfirmPasswordError] = useState("")
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let [isUrl, setIsUrl] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()
    //loaders state

    let { token } = useParams()

    let isFormValid = password && !passwordError && confirmPassword && !confirmPasswordError



    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)
    }, [])


    let checkIfTokenValid = async (token) => {
        let response = await dispatch(checkRecoverTokenValidity(token))
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            //setIsUrl('/forgetpassword')
            return
        }
        setIsLoading(false)
        setIsError(true)
        setIsErrorInfo(response.message)
    }

    useEffect(() => {
        checkIfTokenValid(token)
    }, [token])



    let setFormDetails = useCallback(e => {
        setIsError(false)
        if (e.formName === "password") {
            let formValue = e.value
            setPassword(formValue)
            setPasswordError(e.error)

        } else if (e.formName === "confirmPassword") {
            let formValue = e.value
            setConfirmPassword(formValue)
            setConfirmPasswordError(e.error)
        }
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)

        let data = {
            password:password,
            confirmPassword:confirmPassword,
            token:token
        }

        let response = await dispatch(changePassword(data))

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return

        }
        setIsUrl('/login')
        setIsLoading(false)
        setIsError(true)
        setIsErrorInfo(response.message)
        
    }

    let closeModal = () => {
        setIsError(false)
        if (isUrl) {
            navigate(isUrl)
        }
    }





    return (<>
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        

        <div className={styles.screenContainer}>
        {isLoading && <Loader />}
            <div className={styles.rightContainer}>
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>

                    <div className={styles.navigate}>

                        <h2>update password</h2>
                    </div>



                    <div className={styles.inputcontainer}>
                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='password'
                                types="password"
                                className="formcard"
                                formName="password"
                                placeholder='New password'
                                setFormDetails={setFormDetails}
                            />

                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='password'
                                types='password'
                                className="formcard"
                                setFormDetails={setFormDetails}
                                formName="confirmPassword"
                                placeholder='Confirm new password'
                            />
                        </div>

                    </div>


                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '20px' }} text="Update" />
                        {isError && <p className={styles.errorText} >{isErrorInfo}</p>}
                    </div>



                </form>

            </div>


        </div>
    </>

    );
}

export default ResetPassword