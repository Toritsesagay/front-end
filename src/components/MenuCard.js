import React  from 'react';
import styles from './MenuCard.module.css';


function MenuCard({data,fun}) {
    return (<div className={styles.menucard} onClick={()=>fun(data.url)}>
        <span className='material-icons'>
            {data.icon}
        </span>

        <p>{data.title}</p>

    </div>);

}


export default MenuCard