import React, { useState, useEffect } from 'react';
import styles from './CardForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Select from '../components/select';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { createCard, deleteCard, hasCardFun } from '../store/action/userAppStorage';




function CardForm() {
    let [isInfo, setIsInfo] = useState(false)
    let [cardType, setCardType] = useState('Virtual')
    let [isLoading, setIsLoading] = useState(true)
    let [card, setIsCard] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let { user } = useSelector(state => state.userAuth)
    let [nameOnCard, setNameOnCard] = useState(`${user.firstName} ${user.lastName}`)


    let dispatch = useDispatch()


    let onChangeHandler = (name, val) => {
        if (name === 'nameOnCard') {
            setNameOnCard(val)
        }
    }


    let submitHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        let response = await dispatch(createCard({
            nameOnCard,
            cardType
        }))
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return setIsCard(false)
        }
        setIsLoading(false)
        setIsCard(response.message)
    }

    let deleteHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        let response = await dispatch(deleteCard())
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return
        }
        setIsLoading(false)
        setIsCard('')
    }


    let setFormDetails = (data) => {
        setCardType(data.value)
    }


    let changeHandler = () => {
        setIsInfo(prev => !prev)
    }


    let closeModal = () => {
        setIsError(false)
    }

    useEffect(() => {
        checkForCard()
    }, [])

    //method that chaecks for card
    let checkForCard = async () => {
        setIsLoading(true)
        let response = await dispatch(hasCardFun())
        if (!response.bool) {
            setIsLoading(false)
            return setIsCard(false)
        }
        setIsLoading(false)
        setIsCard(response.message)
    }



    return (<>
        {isLoading && <Loader />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Manage Card'} />
                <div className={styles.mainscreen}>

                    {!card ? <div className={styles.mainscreenright}>

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
                                    <option>Virtual Card</option>
                                </Select>

                                <p>Name of Card</p>

                                <input placeholder='' onChange={(e) => onChangeHandler('nameOnCard', e.target.value)} value={nameOnCard} required />

                                <button> Create Card</button>

                            </div>


                        </form>
                    </div> : ''}

                    {card && !card.isVerified && <div className={styles.mainscreenright}>
                        <div className={styles.helpCard}>
                            <div className={styles.header} onClick={() => changeHandler('withdraw')}>
                                <h4>Card Approval</h4>
                                <span className='material-icons'>
                                    {isInfo ? 'expand_more' : 'chevron_right'}
                                </span>
                            </div>

                            {isInfo ? <div className={styles.body}>
                                <p>
                                    Card has not been approved. this can take up to 3 days before it can be approved!

                                </p>
                            </div> : ""}

                        </div></div>}

                    {card && card.isVerified &&<div className={styles.mainscreenright}>

                        <div className={styles.cardContainer}>


                            <div className={styles.creditCard}>
                                <h2>Visa</h2>

                                <div className={styles.circleContainer}>
                                    <div className={styles.circle}>

                                    </div>

                                    <div className={styles.circle}>

                                    </div>

                                </div>



                                <div className={styles.cardInfo}>
                                    <h3>Type</h3>

                                    <p>Business Account</p>

                                </div>

                            </div>



                        </div>




                        <form className={styles.form} onSubmit={deleteHandler}>
                            <div className={styles.formbody}>
                                <p>Card type</p>
                                <Select setFormDetails={setFormDetails} formName="cardType" >
                                    <option>Virtual Card</option>
                                </Select>

                                <p>Name on Card</p>

                                <input  value={card.nameOnCard} required />


                                <p>Card Number</p>
                                <input placeholder=''  value={card.cardNumber} required />

                                <p>Cvv</p>
                                <input  value={card.cvv} required />

                                <p>Expiry</p>
                                <input  value={card.expiry} required />

                                <button>Delete Card</button>



                            </div>
                        </form>
                    </div>}
                </div>
            </div>
        </div>
    </>);

}


export default CardForm