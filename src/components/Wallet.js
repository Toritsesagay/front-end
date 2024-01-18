import React, { useEffect } from 'react';
import styles from './Wallet.module.css';
import { PieChart } from 'react-minimal-pie-chart'
import WalletCard from './WalletCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Wallet() {
    let { user} = useSelector(state => state.userAuth)
    let navigate = useNavigate()
  



    let data =
        [
            {
                icon: 'sync',
                name: 'Upcoming',
                price: '0.00',
                color: 'rgb(75, 187, 75)',
                backgroundColor: 'rgb(241, 255, 241)'
            },
            {
                icon: 'arrow_upward',
                name: 'Earn Today',
                price: user.totalEarn,
                color: 'rgb(253, 185, 57)',
                backgroundColor: 'rgb(255, 248, 236)'
            },
            {
                icon: 'arrow_downward',
                name: 'Spend Today',
                price: user.totalSpent,
                color: 'rgb(255, 129, 80)',
                backgroundColor: 'rgb(255, 242, 236)'
            },

        ]



    return (<>
        <div className={styles.dashboard}>

            <div className={styles.balanceContainer}>
                <div className={styles.balanceSection}>
                    <div className={styles.balance}>
                        <h4>Hello!</h4>
                        <p> {user.firstName}</p>
                        <p>Balance: <span>${user.walletBalance}</span></p>
                    </div>

                    <div className={styles.balanceChart}>
                        <PieChart
                            lineWidth={24}

                            style={{
                                width: '80px',
                            }}

                            data={[
                                {
                                    value: 15,
                                    color: 'rgb(52, 134, 52)',
                                    style: {
                                        strokeWidth: 9,
                                        lineWidth: '10%'
                                    }
                                },
                                {
                                    value: 10,
                                    color: 'orange',
                                    style: {
                                        strokeWidth: 4
                                    }
                                },
                                {
                                    value: 5,
                                    color: 'rgb(84, 64, 84)',
                                    style: {
                                        strokeWidth: 50
                                    }
                                },
                            ]}
                        >


                        </PieChart>
                    </div>

                </div>
            </div>

            <div className={styles.InfoContainer}>

                {data.map(data => <WalletCard data={data} key={data.icon} />)}




                {/*<div className={styles.upcoming}>
                    <p><span className='material-icons'>sync</span> Upcoming</p>
                    <p className={styles.price}>$23,500</p>
                </div>

                <div className={styles.spend}>
                    <p><span className='material-icons'>arrow_downward</span> Spend Today</p>
                    <p className={styles.price}>$13,500</p>
                </div>*/}

            </div>

        </div>



    </>);

}


export default Wallet