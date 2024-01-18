import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import Modal from '../components/Modal/Modal';






function SuccessPage() {
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)

    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl, setIsUrl] = useState('')
    let navigate = useNavigate()


    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])



    const submitHandler = async (e) => {
        navigate('/new-card')
    }


    let closeModal = () => {
        setIsError(false)
        if (isUrl) {
            navigate(`${isUrl}`)
        }
    }







    return (<>
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}

       

        <div className={styles.screenContainer}>
            {isLoading && <Loader />}
            <div className={styles.rightContainer}>

                <form className={styles.rightformcontainer} onSubmit={submitHandler}>




                    <div className={styles.inputcontainer}>

                        <div className={styles.sucessContainer}>
                            <span className='material-icons'>done</span>
                        </div>

                        <h2>Account Created!</h2>
                        <p style={{marginBottom:'0px'}}> Your account has been created successfully </p>
                        <p> Please sign in your account and enjoy </p>
                    </div>




                    {<div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '20px' }} text="Take me to signin" />
                    </div>}



                </form>

            </div>


        </div>
    </>

    );
}

export default SuccessPage