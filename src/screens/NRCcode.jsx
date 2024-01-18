import React, { useState} from 'react';
import styles from './CardForm.module.css';
import { useDispatch} from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { submitNrcCode} from '../store/action/userAppStorage';
import { useNavigate } from 'react-router-dom';



function NRCCode() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [nrcCode, setIsNrcCode] = useState('')
    let [isBody,setIsBody] = useState(false)
    let navigate = useNavigate()


    let dispatch = useDispatch()
    let onChangeHandler = (name, val) => {
        if (name === 'nrcCode') {
            setIsNrcCode(val)
        }
    }


    let submitHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let response = await dispatch(submitNrcCode({
            nrcCode
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
                <Header home={false} title={'Nrc Code'} />
                <div className={styles.mainscreen}>

                    <div className={styles.mainscreenright}>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler()}>
                                <h4>NRC CODE</h4>
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
                                <input placeholder='Enter nrc code' onChange={(e) => onChangeHandler('nrcCode', e.target.value)} value={nrcCode} required />

                                <button>submit</button>

                            </div>


                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
    </>);

}


export default NRCCode