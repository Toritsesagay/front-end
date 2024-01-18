import React, { useState, useEffect,useRef } from 'react';
import styles from './TransactionHistory.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { fetchTransfersAccount, fetchDeposits } from '../store/action/userAppStorage';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import FormModal from '../components/Modal/FormModal';
import { useReactToPrint } from 'react-to-print';






function TransactionHistory() {
    let [isSpend, setIsSpend] = useState(false)
    let [isTransferData, setIsTransferData] = useState([])
    let [isDeposits, setIsDepositData] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let { user } = useSelector(state => state.userAuth)
    let [isInfoModal, setIsInfoModal] = useState(false)
    let [isData, setIsData] = useState({})



    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()

    //fetch favourite List

    useEffect(() => {
        fetchTransfer()
        fetchAllDeposit()

    }, [])



    let fetchTransfer = async () => {
        let res = await dispatch(fetchTransfersAccount())
        if (!res.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(res.message)
            return
        }
        setIsTransferData(res.message)
        setIsLoading(false)
    }


    let fetchAllDeposit = async () => {
        let res = await dispatch(fetchDeposits())
        if (!res.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(res.message)
            return
        }
        setIsDepositData(res.message)
        setIsLoading(false)
    }


    let closeModal = () => {
        setIsError(false)
    }






    let closeFormModal = () => {
        setIsInfoModal(false)
        setIsError(false)
    }

    const componentRef = useRef();


    const handlePrint = useReactToPrint({
         content: () => componentRef.current,
         documentTitle: 'Visitor Pass',
         onAfterPrint: () => console.log('Printed PDF successfully!'),
        });



    let colorFun = (data)=>{
        if(data === 'Transfer'){
            return 'red'
        }else if( data === 'Debit'){
            return 'red'

        }else if( data === 'withdraw'){
            return 'red'

        }else{
            return 'green'
        }


    }


    return (<>
        {isLoading && <Loader />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}
        {isInfoModal && <FormModal closeModal={closeFormModal} data={isData} status={isSpend} />}

        <div className={styles.screenContainer}>
            <SideBar active={'History'}/>
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'History'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>


                        <div className={styles.helpCard} style={{ paddingTop: '40px' }} ref={componentRef}>

                            <div className={styles.header}>
                                <h6> <span className={styles.block}></span>RECENT TRANSACTIONS</h6>
                            </div>



                            <div className={styles.body}>

                                <table style={{ width: '600px' }} >
                                    <thead>
                                        <tr>
                                            <th>
                                                Status
                                            </th>

                                            <th>
                                                Date
                                            </th>
                                            <th>

                                                Description


                                            </th>
                                            <th>

                                                Category


                                            </th>
                                            <th>

                                                Amount


                                            </th>

                                        </tr>

                                    </thead>
                                    <tbody>

                                        {isDeposits && isDeposits.map(data => <tr>
                                            <td>
                                                <span className={styles.bullet} style={{ backgroundColor: data.status === 'active' ? 'rgb(76, 149, 76)' : 'rgb(179, 179, 179)' }}></span>{data.status === 'active'?'complete':'Pending'}
                                            </td>
                                            <td>
                                                {data.date.substring(0, 10)}
                                            </td>
                                            <td>
                                                {data.reason}

                                            </td>
                                            <td className={styles.transactionType} style={{ color: colorFun(data.transactionType) }}>

                                                {data.transactionType}
                                            </td>
                                            <td style={{ color: colorFun(data.transactionType) }}>

                                                $-{Intl.NumberFormat().format(data.amount)}.00
                                            </td>

                                        </tr>)}


                                    </tbody>


                                </table>

                               

                            </div>
                        </div>

                        <button onClick={handlePrint } className={styles.button}>print statement</button>


                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default TransactionHistory