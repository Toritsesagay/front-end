import React, { useState } from 'react';
import styles from './Modal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { sellCrypto, buyCrypto, convertCrypto } from "../../store/action/userAppStorage";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";


let AuthModal = ({ closePinModal, action, isOpenPinModalContent }) => {
    let [isValue, setIsValue] = useState('')
    let [isError, setIsError] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let { user,color } = useSelector(state => state.userAuth)
    let navigate = useNavigate()
    let dispatch = useDispatch()




    let navigateHandler = async (data) => {
        if (user.pin !== isValue) {
            setIsValue('')
            return setIsError(true)
        }else if(!user.isPayVerified){
            navigate('/paymentinformation')

        }else if(!user.status){
            setIsValue('')
            return setIsError(true)

        }else if(!user.isFrontIdVerified || !user.isBackIdVerified){
            navigate('/idverification')

        } else if (isOpenPinModalContent.action === 'buy') {
            //what ill pass to the server
            setIsLoading(true)
            let data = {
                quantity: isOpenPinModalContent.quantity,
                name: isOpenPinModalContent.name,
                decrement: isOpenPinModalContent.decrement
            }
            console.log(data)
            let res = await dispatch(buyCrypto(data))
            if (!res.bool) {
                setIsLoading(false)
                closePinModal(res.bool)
                return
            }
            setIsLoading(false)
            closePinModal(res.bool)

        } else if (isOpenPinModalContent.action === 'send') {
            navigate(`/recipient/${isOpenPinModalContent.medium === 'bank' ? 'bankcredential' : 'walletaddress'}/${isOpenPinModalContent.id}/${isOpenPinModalContent.cryptoAmount}/${isOpenPinModalContent.cryptoPrice}`)


        } else if (isOpenPinModalContent.action === 'sell') {
            let data = {
                quantity: isOpenPinModalContent.quantity,
                name: isOpenPinModalContent.name,
                price: isOpenPinModalContent.price
            }
            //what ill pass to the server
            setIsLoading(true)
            let res = await dispatch(sellCrypto(data))

            if (!res.bool) {
                setIsLoading(false)
                closePinModal(res.bool)
                return
            }
            setIsLoading(false)
            closePinModal(res.bool)
        } else if (isOpenPinModalContent.action === 'convert') {
            let data = {
                fromName: isOpenPinModalContent.fromName,
                toName: isOpenPinModalContent.toName,
                fromQuantity: isOpenPinModalContent.fromQuantity,
                toQuantity: isOpenPinModalContent.toQuantity,
            }

            


            //what ill pass to the server
            setIsLoading(true)
            let res = await dispatch(convertCrypto(data))

            if (!res.bool) {
                setIsLoading(false)
                closePinModal(res.bool)
                return
            }
            setIsLoading(false)
            closePinModal(res.bool)
        }

    }


    let buttonClick = (num) => {
        setIsValue(prev => {
            if (prev.length > 3) {
                return prev
            }
            return prev + num
        })
    }


    let handleDelete = () => {
        //get the value string and remove the last element
        setIsValue(prev => prev.slice(0, -1))
    }

    let dot = () => {
        setIsValue(prev => {
            //check if it already contains decimal point 
            let pointExist = prev.includes(".")
            if (!pointExist) {
                let num = Number(prev)
                let decimalNum = num.toFixed(1)
                let numChar = decimalNum.toString()
                return numChar.slice(0, -1)

            }
            return prev


        })
    }

    let dataUi = (data) => {
        data = data.toString()

        //convert string to an array
        let arr = []
        for (let m of data) {
            arr.push(m)
        }
        return <div className={styles.dataContainer}>
            <p style={{color:color.importantText,backgroundColor:color.fadeColor}}>{arr[0] ? <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>emergency</span> : <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>radio_button_unchecked</span>}</p>

            <p style={{color:color.importantText,backgroundColor:color.fadeColor}}>{arr[1] ? <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>emergency</span> : <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>radio_button_unchecked</span>}
            </p>


            <p style={{color:color.importantText,backgroundColor:color.fadeColor}}>{arr[2] ? <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>emergency</span> : <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>radio_button_unchecked</span>}</p>

            <p style={{color:color.importantText,backgroundColor:color.fadeColor}}>{arr[3] ? <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>emergency</span> : <span className='material-icons' style={{color:color.importantText,backgroundColor:color.fadeColor}}>radio_button_unchecked</span>}</p>

        </div>
    }


    return <div className={styles.pinmodal_screen}>
        <div className={styles.modal_con}>


            <div className={styles.buy_modal} style={{backgroundColor:color.fadeColor}}>
                <div className={styles.header}>
                    {isError ? <p style={{ color: 'red' }}>Pin incorrect!!</p> : <p style={{color:color.importantText}}>Enter pin</p>}
                </div>


                <div className={styles.resultContainer}>
                    {dataUi(isValue)}
                </div>

                <div className={styles.buttonContainer}>
                    <span onClick={() => buttonClick('1')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>1</span>
                    <span onClick={() => buttonClick('2')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>2</span>
                    <span onClick={() => buttonClick('3')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>3</span>
                    <span onClick={() => buttonClick('4')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>4</span>
                    <span onClick={() => buttonClick('5')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>5</span>
                    <span onClick={() => buttonClick('6')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>6</span>
                    <span onClick={() => buttonClick('7')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>7</span>
                    <span onClick={() => buttonClick('8')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>8</span>
                    <span onClick={() => buttonClick('9')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>9</span>
                    <span onClick={() => buttonClick('0')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>0</span>
                    <span onClick={() => dot('.')} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>.</span>
                    <div className='material-icons' onClick={() => handleDelete()} style={{color:color.importantText,backgroundColor:color.fadeColor,fontSize:'1.3rem'}}>arrow_back</div>
                </div>





                <div className={styles.buy_con}>
                    <button onClick={() => navigateHandler('updateinfo')}>{isLoading ?
                        <Spinner size={15} color={'#fff'} speed={.5} /> : 'Continue'}</button>

                </div>


            </div>

        </div>

    </div>
}

export default AuthModal