import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'



const ContactPage = () => {
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
                    <h2>CONTACT US</h2>
                </div>
            </div>
        </div>


        <section class="contact-area ptb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Drop us message for any query</h2>
                    <div class="bar"></div>
                </div>

                <div class="row">
                    <div class="col-lg-5 col-md-12">
                        <div class="contact-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <span>Address</span> CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <span>Email</span>
                                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#5139343d3d3e113d2427383e3f7f323e3c"><span class="__cf_email__" data-cfemail="acc4c9c0c0c3ecc0d9dac5c3c282cfc3c1">[email&#160;protected]</span></a>
                                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#472b32312e282907202a262e2b6924282a"><span class="__cf_email__" data-cfemail="6d01181b0402032d0a000c0401430e0200">[email&#160;protected]</span></a>
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <span>Phone</span>
                                    <a href="tel:+44587154756">+44 587 154756</a>
                                    <a href="tel:+55555514574">+55 5555 14574</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-12">
                        <div class="contact-form">
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Phone" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Your Message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="btn btn-primary">Send Message</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-map"><img src="front/img/bg-map.png" alt="image" /></div>
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

export default ContactPage
