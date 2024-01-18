import React, { useState,useEffect} from 'react';
import styles from './CardForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Select from '../components/select';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { createCard,} from '../store/action/userAppStorage';
import { useNavigate } from 'react-router-dom';


function CardForm() {
    let [isInfo, setIsInfo] = useState(false)
    let [cardType, setCardType] = useState('Debit Card')
    let [isCardNetwork, setIsCardNetwork] = useState('Visa Card')
    let [isLoading, setIsLoading] = useState(false)
    let [card, setIsCard] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isConfirm, setIsConfirm] = useState(false)
    let [isUnverified, setIsUnverified] = useState(false)
    let { user, accounts,cards } = useSelector(state => state.userAuth)
    let [nameOnCard, setNameOnCard] = useState(`${user.firstName} ${user.lastName}`)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(()=>{
        //find if any card exist that has not been approved
        let unverified = cards.find(data=>data.isVerified == false)
        if(!unverified){
            return setIsUnverified(false)
        }
        return setIsUnverified(true)
    },[])



    let onChangeHandler = (name, val) => {
        if (name === 'nameOnCard') {
            setNameOnCard(val)
        }
    }


    let submitHandler = async (e) => {
        e.preventDefault()
        if (!isConfirm) {
            setIsErrorInfo('Creating a card requires an available balance of $500 on your savings account')
            setIsError(true)
            setIsConfirm(true)
            setIsLoading(false)
            return
        }

        if (accounts.length === 0) {
            setIsErrorInfo('No account found! contact customer care support to create an account')
            setIsError(true)
            setIsLoading(false)
            return

        }

        setIsLoading(true)

        let response = await dispatch(createCard({
            nameOnCard,
            cardType,
            cardNetwork:isCardNetwork
        }))

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return setIsCard(false)
        }
        ///// go back to card page
        navigate('/card')
    }


    let setFormDetails = (data) => {
        setCardType(data.value)
    }

    let setCardNetwork = (data) => {
      
        setIsCardNetwork(data.value)
    }


    let changeHandler = () => {
        setIsInfo(prev => !prev)
    }


    let closeModal = () => {
        setIsError(false)
    }



    return (<>
        {isLoading && <Loader />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        <div className={styles.screenContainer}>
            <SideBar active='Card' />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'New Card'} />
                <div className={styles.mainscreen}>

                    {!isUnverified ? <div className={styles.mainscreenright}>

                        <div className={styles.helpCard}>
                            <div className={styles.header} onClick={() => changeHandler('withdraw')}>
                                <h4>Why create a card</h4>
                                <span className='material-icons'>
                                    {isInfo ? 'expand_more' : 'chevron_right'}
                                </span>

                            </div>

                            {isInfo ? <div className={styles.body}>
                                <p>
                                    An online card can be created and used without the need to visit a bank or other financial institution and you can easily make or recieve payment anywhere on the web with ease!</p>
                            </div> : ""}

                        </div>


                        <form className={styles.form} onSubmit={submitHandler}>
                            <h4 className={styles.headsection}>Card Information</h4>

                            <div className={styles.formbody}>
                                <p>Select card type</p>
                                <Select setFormDetails={setFormDetails} formName="cardType" >
                                    <option>Debit Card</option>
                                    <option>Credit Card</option>
                                </Select>


                                <p>Card network</p>

                                <Select setFormDetails={setCardNetwork} formName="cardNetwork" >
                                    <option>Visa Card</option>
                                    <option>Master Card</option>
                                </Select>

                                <p>Name of Card</p>

                                <input placeholder='' onChange={(e) => onChangeHandler('nameOnCard', e.target.value)} value={nameOnCard} required />




                                <button> Create Card</button>

                            </div>


                        </form>
                    </div> : ''}


                    {isUnverified && <div className={styles.mainscreenright}>
                        <div className={styles.helpCard}>
                            <div className={styles.header} onClick={() => changeHandler('withdraw')}>
                                <h4>Card Approval</h4>
                                <span className='material-icons'>
                                    {isInfo ? 'expand_more' : 'chevron_right'}
                                </span>
                            </div>

                            {isInfo ? <div className={styles.body}>
                                <p>
                                    A Card has not been approved. New card creation can only commence if all card request has been approved!

                                </p>
                            </div> : ""}

                        </div></div>}

                </div>
            </div>
        </div>
    </>);

}


export default CardForm