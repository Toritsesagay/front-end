import React, { useState } from 'react';
import styles from './Privacy.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';



function Profile() {
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl, setIsUrl] = useState(false)
    let [isFavorite, setIsFavorite] = useState(false)
    let [isSpend, setIsSpend] = useState(false)




    let privacyData = [


        {
            title: 'Bank Terms and Conditions',
            content:'These Terms and Conditions (the "Terms") apply to all accounts and services offered by this Bank. By opening an account or using any of the Banks services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not open an account or use the Banks services. The Bank reserves the right to amend these Terms at any time, without prior notice.These Terms apply to all accounts and services offered by the Bank, including, but not limited to, checking and savings accounts, loans e.t.c'
        },
        {
            title: 'Bank Refund Policy',
            content:'In the event that you are not satisfied with any services provided by the Bank, please contact Customer Service at (phone number) to discuss your concerns. If we are unable to resolve your concerns, you may request a refund of any fees paid for the services in question. Refunds will be processed within 30 days of your request. If you have any questions about our refund policy, please contact Customer Service.It is important to note that this is just a template and not legal advice. If you need legal advice, please consult with a lawyer.'
        },
        {
            title: 'Money Delivery',
            content:'The Bank offers various methods for delivering money to its customers, including ACH, wire transfer, and check. Delivery times vary depending on the method chosen. ACH transfers typically take 3-5 business days to complete, while wire transfers are typically completed within 24 hours. Checks may take longer to process, depending on the recipients bank. The Bank cannot guarantee delivery times, and is not responsible for delays caused by third parties.'
        },
        {
            title: '24/7 Hours online Support',
            content:'We understand that our customers may need assistance at any time, day or night. Thats why we offer 24/7 online support through our website and mobile app. You can chat with a live agent or submit a support ticket at any time. We strive to respond to all inquiries within 24 hours'
        },
    ]



    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()

    //fetch favourite List


    let receiveFundHandler = () => {
        setIsSpend(false)
    }


    let spendMoneyHandler = () => {
        setIsSpend(true)
    }






    return (<>
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Privacy Policy'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.body}>



                            

                            {privacyData.map(data=><div className={styles.card} key={data.title}>
                                <h4 className={styles.head}> <span className='material-icons'>
                                    done</span>{data.title}</h4>
                                <p>
                                   {data.content}
                                </p>

                            </div>)}

                        </div>









                    </div>
                </div>


            </div>
        </div>
    </>);

}


export default Profile