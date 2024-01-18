import React, { useState} from 'react';
import styles from './CardForm.module.css';
import { useDispatch} from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { submitCotCode} from '../store/action/userAppStorage';
import { useNavigate } from 'react-router-dom';


function COTCode() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [cotCode, setIsCotCode] = useState('')
    let [isBody,setIsBody] = useState(false)
    let [isUrl,setIsUrl] = useState('  ')
    let navigate = useNavigate()


    let dispatch = useDispatch()
    let onChangeHandler = (name, val) => {
        if (name === 'cotCode') {
            setIsCotCode(val)
        }
    }


    let submitHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let response = await dispatch(submitCotCode({
            cotCode
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



    let changeHandler = () => {
        setIsBody(prev => !prev)
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
                <Header home={false} title={'Cot Code'} />
                <div className={styles.mainscreen}>

                    <div className={styles.mainscreenright}>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler()}>
                                <h4>COT CODE</h4>
                                <span className='material-icons'>
                                    {isBody ? 'expand_more' : 'chevron_right'}
                                </span>

                            </div>

                            {<div className={styles.body}>
                                {isBody?<p>
                                    Enter code to continue! If you do not have this contact customer care support!</p>:''}
                            </div>}

                        </div>


                        <form className={styles.form} onSubmit={submitHandler}>
                            <div className={styles.formbody}>
                                <input placeholder='Enter cot code' onChange={(e) => onChangeHandler('cotCode', e.target.value)} value={cotCode} required />

                                <button>submit</button>

                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);

}


export default COTCode