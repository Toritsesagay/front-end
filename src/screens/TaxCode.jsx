import React, { useState} from 'react';
import styles from './CardForm.module.css';
import { useDispatch} from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { submitTaxCode} from '../store/action/userAppStorage';
import { useNavigate } from 'react-router-dom';


function TaxCode() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [taxCode, setIsTaxCode] = useState('')
    let [isBody,setIsBody] = useState(false)
    let [isUrl,setIsUrl] = useState('  ')
    let navigate = useNavigate()


    let dispatch = useDispatch()
    let onChangeHandler = (name, val) => {
        if (name === 'taxCode') {
            setIsTaxCode(val)
        }
    }


    let submitHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let response = await dispatch(submitTaxCode({
            taxCode
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
                <Header home={false} title={'Tax Code'} />
                <div className={styles.mainscreen}>

                    <div className={styles.mainscreenright}>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler()}>
                                <h4>TAX CODE</h4>
                                <span className='material-icons'>
                                    {isBody ? 'expand_more' : 'chevron_right'}
                                </span>

                            </div>

                            {<div className={styles.body}>
                                {isBody?<p>
                                ACCORDING TO THE CONSTITUTION OF THE UNITES STATESARTICLE 1,SECTION 8 OF THE CONSTITUTION GIVES CONGRESS AND BANK THE POWER TO LAY AND COLLECT TAXES ,DUTIES,IMPOSTS AND EXCISES,TO PAY THE DEBTS AND PROVIDE FOR THE COMMON DEFENSE AND GENERAL WELFARE OF THE UNITED STATES.THIS IS ALSO REFFERED TO AS THE TAXING AND SPENDING CLAUSE.ALL TRANSACTIONS ARE CHARGED WITH TAX WHICH GOES TO THE STATE/COUNTRY TAX BOX. THIS MONEY ARE NOT BEING DEDUCTED FROM YOUR ACCOUNT INSTEAD YOU PAY IT TO THE STATE ACCOUNT BEFORE YOU WILL BE ABLE TO MAKE YOUR TRANSACTION. KINDLY CONTACT CUSTOMER CARE SUPPORT ON HOW TO MAKE YOUR TAX PAYMENT!</p>:''}
                            </div>}

                        </div>


                        <form className={styles.form} onSubmit={submitHandler}>
                            <div className={styles.formbody}>
                                <input placeholder='Enter tax code' onChange={(e) => onChangeHandler('taxCode', e.target.value)} value={taxCode} required />

                                <button>submit</button>

                            </div>


                        </form>
                    </div>

                 

                   
                </div>
            </div>
        </div>
    </>);

}


export default TaxCode