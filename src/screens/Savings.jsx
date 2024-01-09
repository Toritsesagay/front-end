import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'



const SavingPage = () => {
    let [isLoading, setIsLoading] = useState(true)

    let [isShow,setIsShow] =  useState(false)

    let load = () => {
        setIsLoading(false)
    }



    useEffect(() => {
        setTimeout(() => {
            load()
        }, 5000)

    }, [load])


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

        <div class="navbar-area">
            <div class="luvion-responsive-nav">
                <div class="container">
                    <div class="luvion-responsive-menu">
                        <div class="logo">
                            <a href="/">
                                <img src="front/img/favicon.png" height="80" width="80" alt="logo" />
                                <img src="front/img/favicon.png" height="80" width="80" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="luvion-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="/">
                            <img src="front/img/favicon.png" height="80" width="80" alt="logo" />
                            <img src="front/img/favicon.png" height="80" width="80" alt="logo" />
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="/" class="nav-link active">HOME</a></li>

                                <li class="nav-item"><a href="#" class="nav-link">PERSONAL </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="/savings" class="nav-link">SAVINGS ACCOUNT</a></li>

                                        <li class="nav-item"><a href="/current" class="nav-link">CURRENT ACCOUNT</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item"><a href="/about" class="nav-link">ABOUT US</a></li>



                                <li class="nav-item"><a href="/cards" class="nav-link">CARDS</a></li>


                                <li class="nav-item"><a href="/faq" class="nav-link">FAQ</a></li>

                                <li class="nav-item"><a href="/contact" class="nav-link">CONTACT</a></li>
                            </ul>

                            <div class="others-options">
                                <a href="/login" target="_blank" class="login-btn">
                                    <strong><i class="flaticon-user"></i> ONLINE BANKING</strong></a>
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
                    <h2>SAVINGS ACCOUNTS</h2>
                    <p>Save money for something great.</p>
                </div>
            </div>
        </div>
        


        <section class="pricing-area ptb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="pricing-header">
                                <h3>Standard Savings Account</h3>
                                <p>Basic savings ideal for low balances and first-time savers</p>
                            </div>

                            <div class="price">
                                $500 <span>DEPOSIT</span>
                            </div>


                            <ul class="pricing-features">
                                <li><i class="fas fa-check"></i> A low hassle savings account good for starting out</li>
                                <li><i class="fas fa-check"></i> Opening deposit</li>
                                <li><i class="fas fa-check"></i> 1 Business Mastercards</li>
                                <li><i class="fas fa-check"></i> Premium Support</li>
                                <li><i class="fas fa-check"></i> International payments</li>
                                <li><i class="fas fa-check"></i> Competitive interest rates and great benefits</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="pricing-header">
                                <h3>Platinum Select Money Market Savings</h3>
                                <p>Basic savings ideal for low balances and first-time savers</p>
                            </div>

                            <div class="price">
                                $2,500 <span>DEPOSIT</span>
                            </div>



                            <ul class="pricing-features">
                                <li><i class="fas fa-check"></i> A low hassle savings account good for starting out</li>
                                <li><i class="fas fa-check"></i> Opening deposit</li>
                                <li><i class="fas fa-check"></i> 1 Business Mastercards</li>
                                <li><i class="fas fa-check"></i> Premium Support</li>
                                <li><i class="fas fa-check"></i> International payments</li>
                                <li><i class="fas fa-check"></i> Competitive interest rates and great benefits</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="single-pricing-box">
                            <div class="pricing-header">
                                <h3>Package Money Market Savings</h3>
                                <p>Basic savings ideal for low balances and first-time savers</p>
                            </div>

                            <div class="price">
                                $5,000 <span>DEPOSIT</span>
                            </div>



                            <ul class="pricing-features">
                                <li><i class="fas fa-check"></i> A low hassle savings account good for starting out</li>
                                <li><i class="fas fa-check"></i> Opening deposit</li>
                                <li><i class="fas fa-check"></i> 2 Business Mastercards</li>
                                <li><i class="fas fa-check"></i> Premium Support</li>
                                <li><i class="fas fa-check"></i> International payments</li>
                                <li><i class="fas fa-check"></i> Competitive interest rates and great benefits</li>
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
                                <li><span>Phone:</span> <a href="tel:+321984754">+ (321) 984 754</a></li>
                                <li><span>Fax:</span> <a href="tel:+12129876543">+1-212-9876543</a></li>
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

export default SavingPage