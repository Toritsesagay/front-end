import React, { useState } from 'react';
import styles from './AddBeneficiaries.module.css';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { addBeneficiaries } from '../store/action/userAppStorage';




function AddBeneficiaries() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isEdit, setIsEdit] = useState(false)
    let [accountName, setAccountName] = useState('')
    let [accountNumber, setAccountNumber] = useState('')
    let [bankName, setBankName] = useState('')
    let [nameOfCountry, setNameOfCountry] = useState('')
    let [routeNumber, setRouteNumber] = useState('')
    let [bankType, setBankType] = useState('otherbank')
    let [isUrl, setIsUrl] = useState('')


    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()

    let onChangeHandler = (name, val) => {
        if (name === 'accountName') {
            setAccountName(val)

        } else if (name === 'accountNumber') {
            setAccountNumber(val)

        } else if (name === 'bankName') {
            setBankName(val)

        } else if (name === 'nameOfCountry') {
            setNameOfCountry(val)

        } else if (name === 'routeNumber') {
            setRouteNumber(val)

        } else if (name === 'bankType') {
            setBankType(val)
        }
    }



    let submitHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault()
    
        let res = await dispatch(addBeneficiaries({
            accountName,
            accountNumber,
            bankName,
            nameOfCountry,
            routeNumber,
            bankType,
        }))
        if (!res.bool) {
            setIsError(true)
            setIsLoading(false)
            setIsErrorInfo(res.message)
            return
        }
        setIsError(true)
        setIsLoading(false)
        setIsErrorInfo(res.message)
        setIsUrl(res.url)


    }

    let changeHandler = () => {
        setIsEdit(prev => !prev)
    }


    let closeModalHandler = ()=>{
        setIsError(false)
        setIsErrorInfo('')
        if(isUrl){
            navigate(`/${isUrl}`)
        }
    }







    return (<>
    
    {isError&& <Modal content={isErrorInfo} closeModal={closeModalHandler}/>}
    {!isError && isLoading&& <Loader/>}
        <div className={styles.screenContainer}>
            <SideBar  />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Beneficiaries'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler('edit')}>
                                <h4>Add beneficiaries</h4>
                                <span className='material-icons'>
                                    {isEdit ? 'expand_more' : 'chevron_right'}

                                </span>

                            </div>

                            {isEdit ? <div className={styles.body}>

                                <p>
                                    You don;t need to provide details of favorite recipient each time you make a local or international transfer</p>
                            </div> : ""}

                        </div>



                        <form className={styles.form} onSubmit={submitHandler}>
                            

                            <div className={styles.formbody}>

                                <div className={styles.options}>
                                    <p>To Card</p>
                                    <p>or</p>
                                    <p>Other bank</p>
                                </div>

                                <input placeholder='Name Of Bank' onChange={(e) => onChangeHandler('bankName', e.target.value)} value={bankName} required />

                                <input placeholder='Account Name' onChange={(e) => onChangeHandler('accountName', e.target.value)} value={accountName} required />

                                <input placeholder='Account Number' onChange={(e) => onChangeHandler('accountNumber', e.target.value)} value={accountNumber} required />

                                <input placeholder='Name Of Country' onChange={(e) => onChangeHandler('nameOfCountry', e.target.value)} value={nameOfCountry} required />

                                <input placeholder='Route Number' onChange={(e) => onChangeHandler('routeNumber', e.target.value)} value={routeNumber} required />


                                <select onChange={(e) => onChangeHandler('bankType', e.target.value)} value={bankType} required>
                                    <option>this bank</option>
                                    <option>other bank</option>
                                </select>



                                <button>Add </button>

                            </div>


                        </form>


                    </div>



                </div>


            </div>
        </div>
    </>);

}


export default AddBeneficiaries