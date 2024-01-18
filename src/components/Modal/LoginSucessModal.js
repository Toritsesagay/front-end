import React from 'react'
import styles from './LoginSuccessModal.module.css';
import { useSelector } from "react-redux";

let Modal = ({content,closeModal}) => {
      let { user,color } = useSelector(state => state.userAuth)
    

    return <div className={styles.modal_screen}>
        <div className={styles.modal_center}>
            <div className={styles.modal_input_card}  style={{backgroundColor:user?color.fadeColor:''}}>
                <div className={styles.modal_heading_con}>
                    <div className={styles.gratitude}>
                        <span className='material-icons'>
                            done
                        </span>

                    </div>

                    <p className={styles.modal_heading} >
                        {content}
                    </p>
                    <button className={styles.modal_button} onClick={closeModal}>
                    ok
                </button>

                </div>
               

            </div>

        </div>

    </div>
}

export default Modal