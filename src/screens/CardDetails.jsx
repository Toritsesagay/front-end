import React, { useState, useEffect } from 'react';
import styles from './CardForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { deleteCard, } from '../store/action/userAppStorage';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { useNavigate, useParams } from 'react-router-dom';


function CardDetails() {
    let [isInfo, setIsInfo] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [card, setIsCard] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isConfirm, setIsConfirm] = useState(false)
    let { user, accounts, cards } = useSelector(state => state.userAuth)
    let [nameOnCard, setNameOnCard] = useState(`${user.firstName} ${user.lastName}`)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { id } = useParams()



    useEffect(() => {
        let foundCard = cards.find(data => data._id == id)
        setIsCard(foundCard)
    }, [])


    let deleteHandler = async (id) => {
        setIsLoading(true)
        let response = await dispatch(deleteCard(id))
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return
        }
        setIsLoading(false)
        navigate('/card')
    }

    let newCardHandler = () => {
        navigate('/new-card-form')
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
                <Header home={false} title={'Detail'} />
                <div className={styles.mainscreen}>

                    {card && card.isVerified && <div className={styles.mainscreenright}>

                        <div className={styles.cardContainer}>
                            <Cards
                                number={card.cardNumber}
                                expiry={card.expiry}
                                cvc={card.cvv}
                                name={card.nameOnCard}
                                className={styles.card}
                            />
                        </div>




                        <form className={styles.form}>
                            <div className={styles.formbody}>
                                <p>Card type</p>
                                <input value={card.cardType} required />

                                <p>Name on Card</p>

                                <input value={card.nameOnCard} required readOnly />


                                <p>Card Number</p>
                                <input placeholder='' value={card.cardNumber} required readOnly />

                                <p>Cvv</p>
                                <input value={card.cvv} required readOnly />

                                <p>Expiry</p>
                                <input value={card.expiry} required readOnly />

                                <p>Balance</p>
                                <input value={card.Balance} required readOnly />

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    deleteHandler(card._id)
                                }}>Delete Card</button>

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    newCardHandler()
                                }}>new card</button>
                            </div>
                        </form>
                    </div>}
                </div>
            </div>
        </div>
    </>);

}


export default CardDetails