import React  from 'react';
import styles from './BillCard.module.css';


function BillCard({data}) {
    return (<div className={styles.menucard}>


        <span className='material-icons'>
            {data.icon}
        </span>

        <p>{data.title}</p>

    </div>);

}


export default BillCard