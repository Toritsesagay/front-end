import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Tab from '../components/Tab';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import MenuCard from '../components/MenuCard';
import WelcomeModal from '../components/Modal/WelcomeModal';
import PaymentModal from '../components/Modal/PaymentModal';
import { fetchDeposits, fetchAccounts } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';
import Loader from '../components/loader';



let menuData = [
    /*{
        icon: 'payments',
        title: 'Deposit',
        url: 'deposit'
    },
    {
        icon: 'toll',
        title: 'Send Money',
        url: 'send-card'
    },
    {
        icon: 'people',
        title: 'Manage friends',
        url: 'beneficiaries'
    },
    {
        icon: 'add_card',
        title: 'Bill Pay',
        url: 'billpay'
    },
    */


]


function Dashboard() {
    let [isError, setIsError] = useState(false)
    let [isUrl, setIsUrl] = useState(false)
    //initialising reduzx

    let { user } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()
    let [isWelcome, setIsWelcome] = useState(true)
    let [isShow, setIsShow] = useState(true)
    let [isPay, setIsPay] = useState(false)
    let [isDeposits, setIsDeposits] = useState([])
    let [amount, setAmount] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isAccount, setIsAccount] = useState([])

    let dispatch = useDispatch()



    useEffect(() => {
        fetchDeposit()
        fetchAccount()
    }, [])


    let fetchDeposit = async () => {
        setIsLoading(true)
        let res = await dispatch(fetchDeposits())
        if (!res.bool) {
            setIsLoading(false)
            return
        }
        setIsDeposits(res.message)
        setIsLoading(false)
    }

    let fetchAccount = async () => {
        setIsLoading(true)
        let res = await dispatch(fetchAccounts())
        if (!res.bool) {
            setIsLoading(false)
            return
        }
        setIsAccount(res.message)
        setIsLoading(false)
    }




    let navigateHandler = (data) => {
        navigate(`/${data}`)
    }

    let clickHandler = () => {
        setIsErrorInfo('Contact admin to continue')
        setIsError(true)
    }









    let closeWelcomeModal = () => {
        setIsWelcome(false)
    }

    let payHandler = () => {
        setIsPay(true)
    }

    let togglePayModal = () => {
        setIsPay(false)
    }

    let changeHandler = (dataType) => {
        setIsShow(prev => !prev)
    }

    let closeModal = () => {
        setIsError(false)
        setIsErrorInfo('')
    }

    let day = () => {

        var now = new Date(),
            hour = now.getHours();

        var morning = (hour >= 4 && hour <= 11),
            afternoon = (hour >= 12 && hour <= 16),
            evening = (hour >= 17 && hour <= 20),
            night = (hour >= 21 || hour <= 3);

        if (morning) {

            return 'MORNING'

        } else if (afternoon) {

            return 'AFTERNOON';

        } else if (evening) {

            return 'EVENING';

        } else if (night) {

            return 'NIGHT'

        }



    }







    return (<>
        {isLoading && <Loader />}
        {isError && <Modal closeModal={closeModal} content={isErrorInfo} />}
        {isPay ? <PaymentModal closeFun={togglePayModal} /> : ''}
        {isWelcome && <WelcomeModal closeFavorite={closeWelcomeModal} />}
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard}>
                <Header home={true} title={'Dashboard'} />
                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>




                        <div className={styles.greeting}>
                            <h2>GOOD {day()}, {user.firstName}!</h2>

                        </div>




                        {isAccount.map(data => <div className={styles.chartSection}>

                            <div className={styles.bankInfoCon}>
                                <div className={styles.bankInfo} style={{ display: 'flex' }}>
                                    <p className={styles.accountType}>{data.accountType}.........</p>
                                    <p className={styles.accountType}>{data.accountNumber}</p>
                                </div>


                                <div className={styles.bankInfo}>

                                    <p className={styles.accountBalance}>${Intl.NumberFormat().format(data.Balance)}.00</p>
                                </div>
                            </div>
                        </div>)}


                        <div className={styles.buttonCon} >
                            <button className={styles.button}  onClick={clickHandler}><span className='material-icons'>add</span>Add account</button>
                        </div>

                        <div className={styles.summaryContainer}>
                            <div className={styles.passportContainer}>
                                <h4>Account Passport</h4>

                                <div className={styles.imgContainer}>
                                    <img src={user.passportUrl} className={styles.img} />

                                </div>



                            </div>
                            <div className={styles.summary}>
                                <h4>Basic Info</h4>


                                <p><span>Account Name: </span>{user.firstName} {user.lastName}</p>
                                <p><span>Phone Number:</span> {user.phoneNumber}</p>
                                <p><span>Country:</span> {user.country}</p>
                                <p><span>State:</span> {user.state}</p>
                                <p><span>Account status:</span> {user.accountVerified === false ? 'inactive' : 'active'}</p>





                                <div className={styles.buttonCon}>
                                    <button className={styles.button} onClick={clickHandler}>Edit</button>
                                </div>








                            </div>

                        </div>






                        <div className={styles.helpCard}>
                            <div className={styles.header}>
                                <h4 > <span className={styles.block}></span>Recent transactions</h4>
                            </div>




                            <div className={styles.body}>

                                <table style={{ width: '600px' }}>
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
                                                <span className={styles.bullet} style={{ backgroundColor: data.status === 'active' ? 'rgb(76, 149, 76)' : 'rgb(179, 179, 179)' }}></span>{data.status}
                                            </td>
                                            <td>
                                                {data.date.substring(0, 10)}
                                            </td>
                                            <td>
                                                {data.reason}

                                            </td>
                                            <td className={styles.transactionType} >

                                                {data.transactionType}
                                            </td>
                                            <td style={{ color: data.transactionType == 'Deposit' ? 'red' : 'green' }}>

                                                $-{Intl.NumberFormat().format(data.amount)}.00
                                            </td>

                                        </tr>)}


                                    </tbody>


                                </table>



                            </div>

                        </div>



                    </div>

                    <div className={styles.mainscreenright}>
                        <div className={styles.menuContainer}>

                            {menuData.map(data => <MenuCard key={data.icon} data={data} fun={navigateHandler} />)}


                        </div>

                    </div>
                </div>


            </div>
        </div >
        {/* tab sections */}
        < Tab />
    </>);

}


export default Dashboard