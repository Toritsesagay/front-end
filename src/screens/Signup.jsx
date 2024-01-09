import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/Input';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import Modal from '../components/Modal/Modal';
import { signup } from '../store/action/userAppStorage';




function SignupPage() {
    let [preloader, setPreloader] = useState(true)
    let [userEmail, setUserEmail] = useState("")
    let [userEmailError, setUserEmailError] = useState("")
    let [isConfirm, setIsConfirm] = useState(false)

    let [userFirstName, setUserFirstName] = useState("")
    let [userFirstNameError, setUserFirstNameError] = useState("")
    let [userLastName, setUserLastName] = useState("")
    let [userLastNameError, setUserLastNameError] = useState("")


    let [userConfirmPassword, setUserConfirmPassword] = useState("")
    let [userConfirmPasswordError, setUserConfirmPasswordError] = useState("")

    let [userPassword, setUserPassword] = useState("")
    let [userPasswordError, setUserPasswordError] = useState("")


    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()
    //loaders state

    const toSignup = () => {
        navigate('/login')
    }

    let confirmHandler = (e) => {
        setIsConfirm(prev => !prev)
    }


    let isFormValid = userEmail && !userEmailError && userFirstName && !userFirstNameError && userLastName && !userLastNameError && userPassword && !userPasswordError && userConfirmPassword && !userConfirmPasswordError && isConfirm



    let setFormDetails = useCallback(e => {
        setIsError(false)
        if (e.formName === "userEmail") {
            let formValue = e.value
            setUserEmail(formValue)
            setUserEmailError(e.error)

        } else if (e.formName === "userFirstName") {
            let formValue = e.value
            setUserFirstName(formValue)
            setUserFirstNameError(e.error)

        } else if (e.formName === "userLastName") {
            let formValue = e.value
            setUserLastName(formValue)
            setUserLastNameError(e.error)

        } else if (e.formName === "userConfirmPassword") {
            let formValue = e.value
            setUserConfirmPassword(formValue)
            setUserConfirmPasswordError(e.error)

        } else if (e.formName === "userPassword") {
            let formValue = e.value
            setUserPassword(formValue)
            setUserPasswordError(e.error)
        }


    }, [])


    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        let data = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            confirmPassword: userConfirmPassword,
            password: userConfirmPassword
        }


        setIsLoading(true)


        let response = await dispatch(signup(data))

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)

        } else {
            setIsLoading(false)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)
        }
    }


    let navigateBackward = () => {
        navigate(-1)
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

                    <div className={styles.navigate}>
                        <span className='material-icons' onClick={navigateBackward}>arrow_back</span>
                        <h2>Signup</h2>
                    </div>

                    <div className={styles.inputcontainer}>
                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="userFirstName"
                                placeholder='First Name'
                                setFormDetails={setFormDetails}
                            />
                        </div>


                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="userLastName"
                                placeholder='Last Name'
                                setFormDetails={setFormDetails}
                            />

                        </div>

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
                                types="password"
                                className="formcard"
                                formName="userPassword"
                                placeholder='Password'
                                setFormDetails={setFormDetails}
                            />

                        </div>


                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='password'
                                types="password"
                                className="formcard"
                                formName="userConfirmPassword"
                                placeholder='Confirm Password'
                                setFormDetails={setFormDetails}
                            />

                        </div>



                        <div className={styles.termscard}>
                            <input type='checkbox' value={isConfirm} onChange={confirmHandler} />


                            <p>By creating an acount,You agree to our Terms of service and Privacy Policy </p>

                        </div>







                    </div>



                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '20px' }} text="Continue" />
                        {isError && <p className={styles.errorText} >{isErrorInfo}</p>}
                    </div>

                    <p className={styles.alternative}> Already registered ? <span onClick={toSignup}>Login</span></p>



                </form>

            </div>


        </div>
    </>

    );
}

export default SignupPage