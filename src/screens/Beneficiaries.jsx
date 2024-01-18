import React, { useState, useEffect } from 'react';
import styles from './Beneficiaries.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { fetchAllBenefeciaries, deleteBeneficiaries } from '../store/action/userAppStorage';
import Loader from '../components/Modal/LoadingModal';
import Modal from '../components/Modal/Modal';
import FormModal from '../components/Modal/FormModal';


function Beneficiaries() {
    let [isMyBank, setIsMyBank] = useState(false)
    let [HistoryData, setHistoryData] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let [isFilteredData, setIsFiliteredData] = useState([])
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let {user } = useSelector(state => state.userAuth)
    let [isInfoModal, setIsInfoModal] = useState(false)
    let [isData, setIsData] = useState({})

    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()



    useEffect(() => {
        fetchingeneficiaries()
    }, [])


    let fetchingeneficiaries = async () => {
        setIsLoading(true)
        let res = await dispatch(fetchAllBenefeciaries())
        if (!res.bool) {
            setIsLoading(false)
            setIsErrorInfo(res.message)
            return setIsError(true)
        }
        setIsLoading(false)
        setIsFiliteredData(res.message)
        setHistoryData(res.message)
        
        
    }

    //filter function to work on the incoming stream of data
    let myBankHandler = () => {
        setIsMyBank(true)
        //filter all beneficiaries to gt those in similar bank
        let otherBank = isFilteredData.filter(data => data.bankType !== 'otherbank')
        setHistoryData(otherBank)
    }


    let otherBankHandler = () => {
        setIsMyBank(false)
        //filter all beneficiaries to gt those in  bankother
        let myBank = isFilteredData.filter(data => data.bankType === 'otherbank')
        setHistoryData(myBank)
    }

    let addHandler = () => {
        navigate('/add-beneficiaries')
    }
    let closeModal = () => {
        setIsError(false)
        setIsErrorInfo('')
    }

    let deleteHandler = async (data) => {
        setIsLoading(true)
        let res = await dispatch(deleteBeneficiaries(data))
        if (!res.bool) {
            setIsLoading(false)
            setIsErrorInfo(res.message)
            return setIsError(true)
        }
        setIsLoading(false)
        setIsFiliteredData(res.message)
        if (isMyBank) {
            let myBank = isFilteredData.filter(data => data.bankType !== 'otherbank')
            return setHistoryData(myBank)

        }
        let myBank = isFilteredData.filter(data => data.bankType === 'otherbank')
        return setHistoryData(myBank)

    }

    
    let closeFormModal = ()=>{
        setIsInfoModal(false)
        setIsError(false)
    }



    return (<>
        {isLoading && <Loader />}
        {isInfoModal && <FormModal closeModal={closeFormModal} data={isData}/>}
        {isError && <Modal closeModal={closeModal} content={isErrorInfo} />}
        <div className={styles.screenContainer}>
            <SideBar active={'Beneficiaries'}/>
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Beneficiaries'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.buttonHeading}>
                            <button onClick={myBankHandler} style={{ backgroundColor: isMyBank ? 'orange' : ' rgb(246, 237, 224)', color: isMyBank ? '#fff' : 'orange' }}>
                                My Bank

                            </button>

                            <button onClick={otherBankHandler} style={{ backgroundColor: isMyBank ? ' rgb(241, 255, 241)' : 'rgb(109, 156, 109)', color: isMyBank ? 'rgb(109, 156, 109)' : '#fff' }}>
                                Other Bank
                            </button>

                        </div>

                        {HistoryData.map(data => <div className={styles.transactionCard}>
                            <div className={styles.photoContainer}>
                                <img src={'../assets/img/boy-2.png'} alt='' />
                            </div>

                            <div className={styles.infoContainer}>
                                <p className={styles.name}>{data.accountName}</p>
                                <p>AC: {data.accountNumber}</p>
                            </div>

                            <div className={styles.priceContainer}>

                                <span className='material-icons' onClick={() => deleteHandler(data._id)}>
                                    delete
                                </span>
                            </div>
                        </div>)}
                    </div>




                    <span className={` material-icons ${styles.add}`} onClick={addHandler}>
                        chat

                    </span>
                </div>


            </div>
        </div>
    </>);

}


export default Beneficiaries