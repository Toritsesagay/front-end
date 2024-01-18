import React, { useState} from 'react';
import styles from './SendToCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import {applyLoan } from '../store/action/userAppStorage';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';




function Loan() {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)

    let [isData,setIsData] = useState({})

    let { user } = useSelector(state => state.userAuth)

    //initialising reduzx
    let dispatch = useDispatch()

    //initialise router

    let submitHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        let data = {
            ...isData,
            fullName:`${user.firstName}   ${user.lastName}`,
            email:user.email,
            phone:user.phoneNumber
        }

        //calling the API
       let res = await dispatch(applyLoan(data))

       if(!res.bool){
        setIsErrorInfo(res.message)
        setIsError(true)
        setIsLoading(false)
        return
       }

       setIsErrorInfo('loan application sent')
       setIsError(true)
       setIsLoading(false)
       
    }


    let closeModal = () => {
        setIsErrorInfo('')
        setIsError(false)
    }
    

    let changeHandler = (name,value)=>{
        if(name == 'marital'){
            setIsData(prev=>{
                return {
                    ...prev,marital:value
                }})
        }else if(name == 'occupation'){
            setIsData(prev=>{
                return {
                    ...prev,occupation:value
                }})
        }else if(name == 'address'){
            setIsData(prev=>{
                return {
                    ...prev,address:value
                }})
        }else if(name == 'amount'){
            setIsData(prev=>{
                return {
                    ...prev,amount:value
                }})
        }else if(name == 'income'){
            setIsData(prev=>{
                return {
                    ...prev,income:value
                }})
        }else if(name == 'purpose'){
            setIsData(prev=>{
                return {
                    ...prev,purpose:value
                }})
        }else if(name == 'duration'){
            setIsData(prev=>{
                return {
                    ...prev,duration:value
                }})
        }
    }


    return (<>
        {isLoading && <Loader />}
        {isError && <Modal closeModal={closeModal} content={isErrorInfo} />}



        <div className={styles.screenContainer}>
            <SideBar active={'Loan'} />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Loan'} />


                <div className={styles.mainscreen}>

                    <div className={styles.mainscreenright}>
                        <div className={styles.summary}>
                            <h4>Loan Application Form</h4>
                            <p>Please fill in all needed information in the loan application form below to request a loan from us. Information regarding income assets are requested for qualification.</p>
                        </div>
                        <form className={styles.form} onSubmit={submitHandler}>


                            <div className={styles.formbody}>

                                <h6>Basic Information</h6>

                                <input placeholder='Full Name' value={`${user.firstName}   ${user.lastName}`} required readOnly />

                                <input placeholder='Email Address' value={user.email} required readOnly />

                               
                                <input placeholder='Telephone Number' value={user.phoneNumber} required readOnly />


                                <h6>Other</h6>

                                <input placeholder='Marital Status' value={isData.marital} required onChange={(e)=>changeHandler('marital',e.target.value)} />

                                <input placeholder='Occupation' value={isData.occupation} required onChange={(e)=>changeHandler('occupation',e.target.value)}/>

                                <input placeholder='Address' value={isData.address} required onChange={(e)=>changeHandler('address',e.target.value)}/>

                                <h6>Loan information</h6>
                                
                                <input placeholder='Desired loan amount in dollars' value={isData.amount} required onChange={(e)=>changeHandler('amount',e.target.value)} type='number'/>

                                <input placeholder='Annual Income in dollars' required value={isData.income} onChange={(e)=>changeHandler('income',e.target.value)} type='Number'/>

                                <input placeholder='Purpose of the loan' value={isData.purpose} required onChange={(e)=>changeHandler('purpose',e.target.value)}/>

                                <input placeholder='Loan Duration(Specify in months)' value={isData.duration} required onChange={(e)=>changeHandler('duration',e.target.value)} type='number'/>

                                <button> Apply</button>

                            </div>


                        </form>
                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default Loan