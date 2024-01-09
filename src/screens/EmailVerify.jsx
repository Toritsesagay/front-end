import React, { useState, useEffect } from 'react';
import styles from './EmailVerify.module.css';
import { checkverification} from "../store/action/userAppStorage";
import { useDispatch } from "react-redux";
//importing modals
import LoadingModal from "../components/Modal/LoadingModal";
import Modal from "../components/Modal/Modal";
//import routers
import { useNavigate, useParams } from 'react-router-dom';
import SubmitBtn from "../components/Submit";




function EmailVerify() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isSignout, setIsSignout] = useState(false)
    let [preloader, setPreloader] = useState(true)

    let { id } = useParams()
    //initialising reduzx
    let dispatch = useDispatch()

    //initialise router
    let navigate = useNavigate()

    //method to close handler
    const closeModal = () => {
        setIsError(false)
        setIsSignout(false)
    }

    useEffect(() => {
        if (!id) {
            navigate('/signup')
        }
    })


    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)
    }, [])



    //this handler check if user email has been verified
    const continueHandler = async () => {
        let res = await dispatch(checkverification(id))
        if (!res.bool) {
            console.log(res)
            return
        }
        //navigation on sucessful api call to next page
        
        //navigate to phone number set-up
        

    }



    useEffect(() => {
        let interval = setInterval(continueHandler, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    let submitHandler = () => {
        navigate('/signup')
    }



    return (<>

        
        

        {isLoading && <LoadingModal />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}



        <div className={styles.screenContainer}>
            <div className={styles.innerContainer}>

                <h1 className={styles.verifyHead}>Verify your email</h1>

                <p className={styles.verifyParagraph}>We sent a verification email to <span> {id}</span>. Click the link inside to get started!</p>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    submitHandler()

                }}>
                    <SubmitBtn text='Email didnt arrive ?' style={{ borderRadius: '8px', marginBottom: '20px', marginBottom: '15px', marginTop: '15px' }} />

                </form>

            </div>



        </div>



    </>

    );
}

export default EmailVerify;