import React,{useEffect,useState} from 'react'
import styles from './FavouriteCard.module.css';
import { fetchAllBenefeciaries} from '../../store/action/userAppStorage';
import { useDispatch } from 'react-redux';


let FavoriteModal = ({action,closeFavorite,errorHandler }) => {
    let dispatch = useDispatch()
    let [favorite,setFavorite] = useState([])


    useEffect(()=>{
        fetchBeneficiaries()

    },[])

    let fetchBeneficiaries = async()=>{
        let res = await dispatch(fetchAllBenefeciaries())
        if(!res.bool){
            return errorHandler(res.message)
        }
        setFavorite(res.message)
    }

    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>
            <div className={styles.headsection}><h3>Favourite List</h3><span className='material-icons' onClick={closeFavorite}>backspace</span></div>

            <div className={styles.body}>
                {favorite.map(data => <div className={styles.card} key={data.accountNumber}     onClick={()=>action(data)}>
                    <div className={styles.photoContainer} >
                        <img src={'../assets/img/boy-2.png'} alt='' />

                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.accountName}>{data.accountName}</p>
                        <p className={styles.accountNumber}>AC: {data.accountNumber}</p>

                    </div>
                    <div className={styles.toContainer}>
                        <span className='material-icons'>arrow_forward</span>

                    </div>
                </div>)}

            </div>
        </div>

    </div>
}

export default FavoriteModal
