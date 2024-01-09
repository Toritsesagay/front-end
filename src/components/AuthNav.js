import React from 'react';
import styles from './AuthNav.module.css';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


function AuthNav() {
  let { user,color } = useSelector(state => state.userAuth)
  let { id } = useParams()

  return (<div className={styles.navHeader} style={{backgroundColor:!id?color.background:''}}>

    <div className={styles.headerLeft}>
        <p className={styles.logo}>Coincap</p>
    </div>

</div>
  );
}

export default AuthNav;