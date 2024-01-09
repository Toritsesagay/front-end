import React, { useState, useEffect } from 'react';
import styles from './EmailVerify.module.css';
import { verifying } from "../store/action/userAppStorage";
import { useDispatch } from "react-redux";
//importing modals
import LoadingModal from "../components/Modal/LoadingModal";
import Modal from "../components/Modal/Modal";
//import routers
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css";




function EmailVerification() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isUrl, setIsUrl] = useState('')

    let { id } = useParams()

    //initialising reduzx
    let dispatch = useDispatch()

    //initialise router
    let navigate = useNavigate()

    //method to close handler
    const closeModal = () => {
        setIsError(false)
        if(isUrl){
            navigate(`/${isUrl}`)
        }
    }





    //this handler check if user email has been verified
    const verifyingEmail = async () => {
        let res = await dispatch(verifying(id))
        if (!res.bool) {
            setIsErrorInfo(res.message)
            setIsError(true)
            return
        }
        //navigation on sucessful api call to next page
        setIsErrorInfo(res.message)
        setIsError(true)
        setIsUrl(res.url)
    }



    useEffect(() => {
        verifyingEmail()
    }, [])






    return (<>

        {isLoading && <LoadingModal />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}



        <div className={styles.screenContainer}>
            <div className={styles.innerContainer}>
                <h1 className={styles.verifyHead}>Verification in progress</h1>
                <div className={styles.spinnerContainer}>
                    <p>{isErrorInfo}</p>
                </div>

            </div>



        </div>



    </>

    );
}

export default EmailVerification