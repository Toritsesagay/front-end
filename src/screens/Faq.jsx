import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'


const FaqPage = () => {
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



        <div class="page-title-area item-bg1 jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="container">
                <div class="page-title-content">
                    <h2>FAQ</h2>
                    <p>Frequently Asked Questions</p>
                </div>
            </div>
        </div>



        <section class="faq-area ptb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-12">
                        <div class="faq-content">
                            <h2>Frequently Asked Questions</h2>
                            <div class="bar"></div>
                            <p>Find answers to questions about your credit card account, billing statements, payments, managing your account online, and contacting us.</p>

                            <div class="faq-image">
                                <img src="front/img/faq.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-12">
                        <div class="faq-accordion">
                            <ul class="accordion">
                                <li class="accordion-item">
                                    <a class="accordion-title active" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i> How can I avoid incurring the monthly service fees on a checking or savings account?
                                    </a>

                                    <p class="accordion-content show">If you maintain minimum or average balance requirements and don’t exceed account transaction limits, it is possible to avoid paying certain fees on some of our business checking and savings accounts. Please see individual product
                                        pages for more information.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>How do I replace a lost ATM card?
                                    </a>

                                    <p class="accordion-content">To replace an ATM card, please sign on to Online® to request your new replacement card online. You can also visit a branch or call our National Business Banking Center at 1-440-941-4254.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i> How do I send or receive a wire?

                                    </a>

                                    <p class="accordion-content">Send domestic and international wires to personal or business accounts quickly and securely with Online® Wires.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i> How do I reactivate my inactive account?

                                    </a>

                                    <p class="accordion-content">go to Account Summary, and select the option to reactivate your account that is displayed next to the inactive account.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i> How do I change my name on my business checking or savings account?

                                    </a>

                                    <p class="accordion-content">In order to change a name on your account, you need to complete a new signature card.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i> How do I make a change of address?

                                    </a>

                                    <p class="accordion-content">To make a change of address and order new checks you may log into a secured Online session and submit a request.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>Can I stop receiving paper statements in the mail?

                                    </a>

                                    <p class="accordion-content">Absolutely. You can choose Online Statements1 through Online. We'll even send you email notifications when your statements are available.</p>
                                </li>
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

        <div class="go-top"><i class="fas fa-arrow-up"></i></div>



        <div className="go-top"><i className="fas fa-arrow-up"></i></div>

    </>)


}

export default FaqPage































