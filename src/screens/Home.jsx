import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';



const HomePage = () => {
    let [isLoading, setIsLoading] = useState(true)

    let [isShow, setIsShow] = useState(false)

    let load = () => {
        setIsLoading(false)
    }



    useEffect(() => {
        setTimeout(() => {
            load()
        }, 5000)

    }, [load])


    let togglemenu = () => {
        setIsShow(prev => !prev)

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


            <div className={isShow ? `${styles.show}` : `${styles.menu_1}`}>
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


        <div class="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="main-banner-content">
                            <h1>Smart-free banking for everybody</h1>
                            <p>Bank smarter with us now and browse personal and consumer banking services</p>
                            <a href="/login" class="btn btn-primary">ONLINE BANKING</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <section class="featured-boxes-area">
            <div class="container">
                <div class="featured-boxes-inner">
                    <div class="row m-0">
                        <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div class="single-featured-box">
                                <div class="icon color-fb7756">
                                    <i class="flaticon-piggy-bank"></i>
                                </div>

                                <h3>Credit Cards</h3>


                                <a href="/cards" class="read-more-btn">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div class="single-featured-box">
                                <div class="icon color-facd60">
                                    <i class="flaticon-data-encryption"></i>
                                </div>

                                <h3>Savings</h3>


                                <a href="/savings" class="read-more-btn">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div class="single-featured-box">
                                <div class="icon color-1ac0c6">
                                    <i class="flaticon-wallet"></i>
                                </div>

                                <h3>Checking</h3>


                                <a href="checkings.html" class="read-more-btn">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div class="single-featured-box">
                                <div class="icon">
                                    <i class="flaticon-shield"></i>
                                </div>

                                <h3>Safe and Secure</h3>


                                <a href="/faq" class="read-more-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="services-area ptb-70">
            <div class="container-fluid p-0">
                <div class="overview-box">
                    <div class="overview-content">
                        <div class="content left-content">
                            <h2>Invest in your future.</h2>
                            <div class="bar"></div>
                            <p>Wherever you are in planning for your future, we’re here to help you evaluate investment and retirement options as you work toward your goals.</p>

                            <ul class="services-list">
                                <li><span><i class="flaticon-check-mark"></i> Retirement</span></li>
                                <li><span><i class="flaticon-check-mark"></i> International Payments</span></li>
                                <li><span><i class="flaticon-check-mark"></i> Funding an Education</span></li>
                                <li><span><i class="flaticon-check-mark"></i> Major Purchases</span></li>
                                <li><span><i class="flaticon-check-mark"></i> Premium Support</span></li>
                                <li><span><i class="flaticon-check-mark"></i> Direct Debit</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="overview-image">
                        <div class="image">
                            <img src="front/img/3.png" alt="image" />

                            <div class="circle-img">
                                <img src="front/img/circle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="invoicing-area ptb-70">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="invoicing-content">
                            <h2>Bank where life takes you...</h2>
                            <div class="bar"></div>
                            <p>It doesn't happen with one transaction, in one day on the job, or in one quarter. It's earned relationship by relationship.</p>
                            <a href="/contact" class="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="invoicing-image">
                            <div class="main-image">
                                <img src="front/img/invoicing-image/1.png" class="wow animate__animated animate__zoomIn" alt="image" />
                                <img src="front/img/invoicing-image/2.png" class="wow animate__animated animate__fadeInLeft" alt="image" />
                                <img src="front/img/invoicing-image/3.png" class="wow animate__animated animate__fadeInLeft" alt="image" />
                                <img src="front/img/invoicing-image/4.png" class="wow animate__animated animate__fadeInRight" alt="image" />
                            </div>
                            <div class="main-mobile-image">
                                <img src="front/img/invoicing-image/main-pic.png" class="wow animate__animated animate__zoomIn" alt="image" />
                            </div>
                            <div class="circle-image">
                                <img src="front/img/invoicing-image/circle1.png" alt="image" />
                                <img src="front/img/invoicing-image/circle2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="funfacts-area ptb-70 pt-0">
            <div class="container">
                <div class="section-title">
                    <h2>We always try to understand customers expectation</h2>
                    <div class="bar"></div>
                    <p>Explore stories about how we are helping customers succeed and communities thrive..</p>
                </div>

                <div class="row">


                    <div class="col-lg-4 col-sm-4 col-md-4 col-8">
                        <div class="funfact">
                            <h3><span class="odometer" data-count="20">00</span>K</h3>
                            <p>Feedback</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-4 col-md-4 col-8">
                        <div class="funfact">
                            <h3><span class="odometer" data-count="500">00</span>+</h3>
                            <p>Workers</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-4 col-md-4 col-8">
                        <div class="funfact">
                            <h3><span class="odometer" data-count="70">00</span>+</h3>
                            <p>Contrubutors</p>
                        </div>
                    </div>
                </div>

                <div class="contact-cta-box">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us</p>
                    <a href="/contact" class="btn btn-primary">Contact Us</a>
                </div>

                <div class="map-bg">
                    <img src="front/img/bg-map.png" alt="map" />
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


        <div class="go-top"><i class="fas fa-arrow-up"></i></div>




    </>)
}

export default HomePage

