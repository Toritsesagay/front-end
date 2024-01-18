import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/Input';
import SubmitBtn from '../components/Submit';
import { login } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';
import Loader from "../components/loader";


function LoginPage() {
    let [userEmail, setUserEmail] = useState("")
    let [userEmailError, setUserEmailError] = useState("")
    let [userPassword, setUserPassword] = useState("")
    let [userPasswordError, setUserPasswordError] = useState("")
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl, setIsUrl] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()
    //loaders state

    const toSignup = () => {
        navigate('/signup')
    }

    const toForget = () => {
        navigate('/forgetpassword')
    }


    let isFormValid = userEmail && !userEmailError && userPassword && !userPasswordError



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

        } else if (e.formName === "userPassword") {
            let formValue = e.value
            setUserPassword(formValue)
            setUserPasswordError(e.error)
        }
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)

        let response = await dispatch(login({
            email: userEmail,
            password: userPassword
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
        if (isUrl) {
            navigate(isUrl)
        }
    }

    let navigateBackward = () => {
        navigate(-1)
    }
    
    return (<>
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}

        <div className={styles.screenContainer}>
        {isLoading && <Loader />}
            <div className={styles.rightContainer}>
             
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>

                    <div className={styles.navigate}>
                        <span className='material-icons' onClick={navigateBackward}>arrow_back</span>
                        <h2>Sign in</h2>
                    </div>

                    <div className={styles.inputcontainer}>
                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='email'
                                types="email"
                                className="formcard"
                                formName="userEmail"
                                placeholder='Email'
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
                                formName="userPassword"
                                placeholder='Password'
                            />
                        </div>

                    </div>


                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '20px' }} text="Login" />
                    </div>

                    <p className={styles.alternative}> Don't have account ? <span onClick={toSignup}>Signup</span> or <br></br><span onClick={toForget}>Forget password</span></p>

                </form>
            </div>
        </div>
    </>);

}


export default LoginPage