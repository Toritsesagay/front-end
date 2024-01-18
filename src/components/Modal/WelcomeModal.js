import { useSelector } from "react-redux";
import styles from "./Welcome.module.css";


let WelcomeModal = ({ closeFavorite }) => {
    let { user, color } = useSelector(state => state.userAuth)

    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>

            {/*<div className={styles.headsection}>
                <h3></h3>
                <span className='material-icons' onClick={closeFavorite}>backspace</span>
            </div>*/}

            
            <div className={styles.body}>
                <h4>Welcome Back!</h4>
                <p>
                    Please note that your details and login information are fully secured.Transaction performed are not share with any third parties.
                </p>

                <button onClick={closeFavorite}>click OK! to continue</button>



            </div>



        </div>

    </div>
}

export default WelcomeModal