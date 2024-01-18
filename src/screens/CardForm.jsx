import React, { useState, useEffect } from 'react';
import styles from './CardForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Select from '../components/select';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import { createCard, hasCardFun } from '../store/action/userAppStorage';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { useNavigate } from 'react-router-dom';


function CardForm() {
    let [isInfo, setIsInfo] = useState(false)
    let [cardType, setCardType] = useState('Debit Card')
    let [isCardNetwork, setIsCardNetwork] = useState('Visa Card')
    let [isLoading, setIsLoading] = useState(true)
    let [card, setIsCard] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isConfirm, setIsConfirm] = useState(false)
    let { user, accounts } = useSelector(state => state.userAuth)
    let [nameOnCard, setNameOnCard] = useState(`${user.firstName} ${user.lastName}`)
    let [cardlist, setCardList] = useState([])
    let [count, setCount] = useState(0)
    let [lengthOfcount, setLengthOfCount] = useState(0)

    let navigate = useNavigate()
    let dispatch = useDispatch()


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
        setIsLoading(false)

        let allCards = response.message.filter(data => data.isVerified == true)
        setIsCard(response.message[count])
        setCardList(allCards)
        setLengthOfCount(allCards.length)
    }

    let detailHandler = async (id) => {
        navigate(`/card-details/${id}`)
    }

    let newCardHandler = () => {
        navigate('/new-card-form')
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

    useEffect(() => {
        checkForCard()
    }, [count])

    //method that chaecks for card
    let checkForCard = async () => {
        setIsLoading(true)
        let response = await dispatch(hasCardFun())
        if (!response.bool) {
            setIsLoading(false)
            return setIsCard(false)
        }
        setIsLoading(false)
        ///////////////////
        let allCards = response.message.filter(data => data.isVerified == true)
        setIsCard(response.message[count])
        setCardList(allCards)
        setLengthOfCount(allCards.length)
    }


    let decreaseCountHandler = () => {
        let currentCount = count
        if (currentCount === 0) {
            return setCount(lengthOfcount - 1)
        }
        setCount(currentCount - 1)

    }

    let increaseCountHandler = () => {
        let currentCount = count
        if (currentCount === lengthOfcount - 1) {
            return setCount(0)
        }
        setCount(currentCount + 1)
    }



    return (<>
        {isLoading && <Loader />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        <div className={styles.screenContainer}>
            <SideBar active='Card' />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Card'} />
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

                        <form className={styles.form} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>

                            <div className={styles.formbody}>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    detailHandler(card._id)
                                }}
                                    style={{ backgroundColor: 'rgb(241, 255, 241)', color: 'rgb(109, 156, 109)' }}>Card details</button>

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    newCardHandler()
                                }}>New Card</button>

                            </div>
                        </form>

                        {cardlist.length > 1 && <div className={styles.paginateContainer}>
                            {count > 0 && <p className={styles.paginate} onClick={decreaseCountHandler}>Prev</p>}

                            {count !== lengthOfcount - 1 && <p className={styles.paginate} onClick={increaseCountHandler}>Next</p>}
                        </div>}

                    </div>}
                </div>
            </div>
        </div>
    </>);

}


export default CardForm