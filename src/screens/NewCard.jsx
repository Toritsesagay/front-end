import React,{useEffect} from 'react';
import styles from './NewCard.module.css';
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Wallet from '../components/Wallet';
import Loader from '../components/loader';




function NewCard() {
    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()
    let { user} = useSelector(state => state.userAuth)

    


    useEffect(()=>{
        if(user?.card){
            navigate('/dashboard')
        }

    },[])




    //loaders state
    let newCardHandler = ()=>{
        navigate('/card-form')
    }
    let continueHandler = ()=>{
        navigate('/home')
    }

    

    



    return (<>
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Card'} />
                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>
                       
                    </div>

                    <div className={styles.mainscreenright}>

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

                            <div className={styles.yellowcreditCard}>

                                <h2>Visa</h2>

                                <div className={styles.circleContainer}>
                                    <div className={styles.circle}>

                                    </div>

                                    <div className={styles.circle}>

                                    </div>

                                </div>



                                



                            </div>

                        </div>


                        <div className={styles.buttonContainer}>
                            {/*<button onClick={newCardHandler}>Add new</button>*/}
                            <button onClick={continueHandler}>Continue</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>);

}


export default NewCard