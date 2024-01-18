import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';


const CurrentPage = () => {
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



        <div className="page-title-area item-bg1 jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
                    <h2>CHECKING ACCOUNTS</h2>
                    <p>Checking that works for you</p>
                </div>
            </div>
        </div>



        <section className="pricing-area ptb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <h3>Easy Checking</h3>
                                <p>Personal checking with basic banking must-haves</p>
                            </div>

                            <div className="price">
                                $6.95<span></span>
                            </div>




                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> MONTHLY MAINTENANCE FEE</li>
                            </ul>


                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <h3>Gold Checking</h3>
                                <p>Extra benefits for U.S. Bank credit card and loan customers</p>
                            </div>

                            <div className="price">
                                $14.95<span></span>
                            </div>




                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> MONTHLY MAINTENANCE FEE</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <h3>Platinum Checking</h3>
                                <p>Top-tier checking with competitive rates and all the perks</p>
                            </div>

                            <div className="price">
                                $24.95<span></span>
                            </div>




                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> MONTHLY MAINTENANCE FEE</li>
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

export default CurrentPage
