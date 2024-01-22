import React,{useEffect,useState} from 'react';
import styles from './Home.module.css'


const CardPage = () => {
    let [isLoading,setIsLoading] = useState(true)
    let [isShow,setIsShow] =  useState(false)
    let load = ()=>{
        setIsLoading(false)
    }
    useEffect(()=>{
        setTimeout(()=>{
            load()
        },5000)
        
    },[load])


    let togglemenu = ()=>{
        setIsShow(prev=>!prev)
        
    }


  

    return (<>



{isLoading ? <div className="preloader">
            <div className="loader">
                <div className="shadow"></div>
                <div className="box"></div>
            </div>
        </div> : ""}


        <div className='navbar-area'>
            <div className="luvion-responsive-nav">
                <div className="container">
                    <div className="luvion-responsive-menu">
                        <div className="logo">
                            <a href="/">
                                <img src="front/img/favicon.png" alt="logo" />
                                <img src="front/img/favicon.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="luvion-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="/">
                            <img src="front/img/favicon.png" alt="logo" />
                            <img src="front/img/favicon.png" alt="logo" />
                        </a>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="/" className="nav-link active">HOME</a></li>

                                <li className="nav-item"><a href="#" className="nav-link">PERSONAL </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a href="/savings" className="nav-link">SAVINGS ACCOUNT</a></li>

                                        <li className="nav-item"><a href="/current" className="nav-link">CURRENT ACCOUNT</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><a href="/about" className="nav-link">ABOUT US</a></li>



                                <li className="nav-item"><a href="/cards" className="nav-link">CARDS</a></li>


                                <li className="nav-item"><a href="/faq" className="nav-link">FAQ</a></li>

                                <li className="nav-item"><a href="/contact" className="nav-link">CONTACT</a></li>
                            </ul>

                            <div className="others-options">
                                <a href="/login" target="_blank" className="login-btn">
                                    <strong><i className="flaticon-user"></i> ONLINE BANKING</strong></a>
                            </div>
                        </div>





                    </nav>
                </div>
            </div>

            <div className={styles.togglebtn} onClick={togglemenu}>
            <i class="fas fa-bars"></i>
            </div>


            <div className={isShow?`${styles.show}`:`${styles.menu_1}`}>
                <ul className={styles.listcontainer}>
                    <li className={styles.listitem}><a href="/" >HOME</a></li>

                    <li className={styles.listitemexpand}><a href="/savings" >SAVINGS ACCOUNT</a>
                        
                    </li>
                    <li className={styles.listitemexpand}><a href="/current" >CURRENT ACCOUNT </a>
                        
                    </li>

                    <li className={styles.listitem}><a href="/about" >ABOUT US</a></li>



                    <li className={styles.listitem}><a href="/cards" >CARDS</a></li>


                    

                    <li className={styles.listitem}><a href="/contact" >CONTACT</a></li>
                    <li className={styles.listitemlast}><a href="/login" >LOGIN</a><a href="/signup" >SIGNUP</a></li>
                </ul>

                
            </div>
        </div>


<div class="page-title-area item-bg1 jarallax" data-jarallax='{"speed": 0.3}'>
    <div class="container">
        <div class="page-title-content">
            <h2>CREDIT CARDS</h2>
            <p>Find a credit card that fits your lifestyle.</p>
        </div>
    </div>
</div>



<section class="pricing-area ptb-70">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-pricing-box">
                    <div class="pricing-header">
                        <h3>Earn 20,000 bonus points worth $200.</h3>
                        <p>GO VISA SIGNATURE® CARD</p>
                    </div>

                  

                    

                    <ul class="pricing-features">
                        <li><i class="fas fa-check"></i> 4X points on dining, takeout and restaurant delivery</li>
                        <li><i class="fas fa-check"></i> 2X points at grocery stores, grocery delivery, streaming services, gas stations and EV charging stations </li>
                        <li><i class="fas fa-check"></i> 1X point on all other eligible purchases</li>
                        <li><i class="fas fa-check"></i> Plus, a $15 credit for annual streaming service purchases such as Netflix and Spotify®.</li>
                        <li><i class="fas fa-check"></i> Enjoy a on purchases and balance transfers for the first 12 billing cycles. After that the APR is variable, currently</li>
                        <li><i class="fas fa-check"></i> APR</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-pricing-box">
                    <div class="pricing-header">
                        <h3>Earn 50,000 bonus points worth $500.</h3>
                        <p>CONNECT VISA SIGNATURE® CARD</p>
                    </div>

                   

                    <ul class="pricing-features">
                        <li><i class="fas fa-check"></i> 5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center</li>
                        <li><i class="fas fa-check"></i> 4X points on travel, gas stations and EV charging stations </li>
                        <li><i class="fas fa-check"></i> 2X points at grocery stores, grocery delivery, dining and streaming services</li>
                        <li><i class="fas fa-check"></i> 1X point on all other eligible purchases</li>
                        <li><i class="fas fa-check"></i> Plus, a $30 credit for annual streaming service purchases such as Netflix and Spotify®.</li>
                        <li><i class="fas fa-check"></i> APR</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div class="single-pricing-box">
                    <div class="pricing-header">
                        <h3>Earn 50,000 bonus points worth $750 in travel.</h3>
                        <p>RESERVE VISA INFINITE® CARD</p>
                    </div>

                   

                    <ul class="pricing-features">
                        <li><i class="fas fa-check"></i> 5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center</li>
                        <li><i class="fas fa-check"></i> 3X points on travel and mobile wallet purchases </li>
                        <li><i class="fas fa-check"></i> 1X point on all other eligible purchases</li>
                        <li><i class="fas fa-check"></i> APR</li>
                        <li><i class="fas fa-check"></i> Annual fee: $60</li>
                        <li><i class="fas fa-check"></i> $300 intro for the first year, 50/year thereafter</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <a href="/" className="black-logo"><img src="front/img/favicon.png" alt="logo" /></a>
                                
                                <p>Our response by the end of 2020 included a $20 million premium pay program for our employees.</p>
                            </div>

                            <ul className="social-links">
                                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Company</h3>

                            <ul className="list">
                                <li><a href="/about">About Us</a></li>
                                <li>
                                    <a href="/savings">Savings</a>
                                </li>
                                <li><a href="checking.html">Checking</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>

                            <ul className="list">
                                <li><a href="/faq">FAQ's</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li><span>Location:</span> 27 Division St, NY 10002, USA</li>
                                <li><span>Phone:</span> <a href="tel:+321984754">+1 (956) 429-2899</a></li>
                                <li><span>Fax:</span> <a href="tel:+12129876543">+1 (956) 429-2899</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <p>Copyright
                        <script>
                            document.write(new Date().getFullYear())
                        </script> | <a href="/" target="_blank">Smarter Banking</a></p>
                </div>
            </div>


        </footer>





    

        <div className="go-top"><i className="fas fa-arrow-up"></i></div>

    </>)


}

export default CardPage