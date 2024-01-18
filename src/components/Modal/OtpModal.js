import React,{useState,useEffect} from 'react'
import styles from './Modal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { sendOtpCode,submitOtpCode } from '../../store/action/userAppStorage';
//algorithm for this
//send the otp as email to user once the modal opens up
//user enters and modify his or herself on correct otp


let OtpModal = ({ content, closeModal,errorHandler }) => {
    let { user, color } = useSelector(state => state.userAuth)
    let [isOtp,setIsOtp] = useState()
    let dispatch = useDispatch()


    useEffect(()=>{
        sendOtpCodeHandler()
    },[])


    let sendOtpCodeHandler =async()=>{
        let res = await dispatch(sendOtpCode())
        if(!res.bool){
            return errorHandler(res.message)
        }
       
    }



    let changeHandler =(e)=>{
        setIsOtp(e.target.value)
    }

    let submitHandler = async(e)=>{
        e.preventDefault()
        let res = await dispatch(submitOtpCode({isOtp}))
        if(!res){
            return errorHandler(res.message)
        }
        closeModal()
    }

    return <div className={styles.modal_screen}>
        <div className={styles.modal_center}>
            <div className={styles.modal_input_card} style={{ backgroundColor: user ? color.fadeColor : '' }}>
                <form className={styles.modal_heading_con} >
                    <label>Enter the OTP sent to your registered Phone</label>

                    <input placeholder='65786' value={isOtp} onChange={changeHandler} required/>
                    <button className={styles.modal_button}  type='submit' onClick={submitHandler}>
                        submit
                    </button>

                </form>


            </div>

        </div>

    </div>
}

export default OtpModal