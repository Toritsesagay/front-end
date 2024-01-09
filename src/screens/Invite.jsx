import React, { useState } from 'react';
import styles from './Invite.module.css';
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function Invite() {
    let [isEdit,setIsEdit] = useState(false)

    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()



    let onChangeHandler = () => {

    }

    let submitHandler = (e) => {
        e.preventDefault()
        alert('refferal link copied')

    }

    let changeHandler = ()=>{
        setIsEdit(prev=>!prev)
    }



    return (<>
        <div className={styles.screenContainer}>
            <SideBar />
            <div className={styles.maindashboard} style={{ height: '100vh' }} >
                <Header home={false} title={'Invite'} />

                <div className={styles.mainscreen}>
                    <div className={styles.mainscreenleft}>

                        <div className={styles.helpCard}>

                            <div className={styles.header} onClick={() => changeHandler('edit')}>
                                <h4>Get $10 referral bonus</h4>
                                <span className='material-icons'>
                                    {isEdit ? 'expand_more' : 'chevron_right'}

                                </span>

                            </div>

                            {isEdit ? <div className={styles.body}>

                                <p>
                                    Get free $10 when you refer a friend or family members</p>
                            </div> : ""}

                        </div>



                        <form className={styles.form} onSubmit={submitHandler}>
                            <h4 className={styles.headsection}>Copy link</h4>

                            <div className={styles.formbody}>

                                <input value='X1gH20000ASD12'  required readOnly/>
                                <button>Copy</button>

                            </div>


                        </form>


                    </div>



                </div>


            </div>
        </div>
    </>);

}


export default Invite