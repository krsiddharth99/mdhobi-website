import { MailOutlined, RoomOutlined,CallOutlined ,PersonOutlined} from '@material-ui/icons';
import React,{useEffect} from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'

function showContact() {
    document.querySelector('.contact-side-bar').style.left = "0px";
    document.querySelector('.contact-side-bar').style.width = "450px";
    document.querySelector('.contact-rotate').style.display = "none";
    document.querySelector('.contact-side-bar p').style.transform = "scale(0) rotate(270deg)";
}
function hideContact() {
    document.querySelector('.contact-side-bar').style.left = "-400px";
    document.querySelector('.contact-side-bar').style.width = "500px";
    document.querySelector('.contact-rotate').style.display = "block";
    document.querySelector('.contact-side-bar p').style.transform = "scale(1) rotate(270deg)";
}

function Contact(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container-fluid" style={{marginTop:'75px'}}>
                <div className="container-fluid row contact-side-bar pt-30 pb-30" onMouseOut={hideContact} onMouseOver={showContact}>
                    <div className="container col-md-10 contact-section">
                        <h5 className="text-white" style={{ fontFamily: 'Montserrat', letterSpacing: '1px', fontSize: '30px' }}>Contact Us</h5>
                        <hr style={{ width: '70px', marginLeft: '6px', marginTop: '10px', borderTop: '2px solid rgba(255,255,255,0.7)' }} />
                        <ul className="mt-30">
                            <li>
                                <RoomOutlined style={{ fontSize:25, color: 'white' }} />
                                <div className="text-white ml-30">&nbsp;&nbsp;LS 2/122 A, Sector-C, Aliganj, Yojana Jankipuram, Sitapur Road, Lucknow, Uttar Pradesh, 226001</div><br />
                            </li>
                            <li>
                                <CallOutlined style={{ fontSize: 25, color: 'white' }} />
                                <div className="text-white ml-25">&nbsp;&nbsp;+91 9076652887</div><br />
                            </li>
                            <li>
                                <PersonOutlined style={{ fontSize: 25, color: 'white' }} />
                                <div className="text-white ml-15">&nbsp;&nbsp;Chetan Nager</div><br />
                            </li>
                            <li>
                                <MailOutlined style={{ fontSize: 25, color: 'white' }} />
                                <div className="text-white ml-20">&nbsp;&nbsp;info@mDhobi.com</div>
                            </li>
                        </ul>
                    </div>
                    <div className="container col-md-2 contact-rotate">
                        <p style={{ fontFamily: 'Montserrat' }}>Contact&nbsp;Us</p>
                    </div>
                </div>
                <section id="contacts-2" class="wide-100 contacts-section division">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 section-title">
                                <h3 class="h3-sm" style={{ fontFamily: 'Montserrat', color: '#12CF69' }}>Want To Get rid of Problem? We’re Listening. </h3>
                                <hr style={{ width: '170px', marginLeft: '60px', marginTop: '6px', borderTop: '2px solid #12CF69' }} />
                                <p class="p-md" style={{fontFamily:'Montserrat'}}>Feel Free to contact us if you need some help, consultation or you have some other question.</p>
                            </div>
                            <img src="imgs/contact.svg" height="210" width="610px" alt="conatct" style={{ marginLeft: '290px', marginBottom: '20px' }} />
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                                <div class="form-holder">
                                    <form name="contactform" class="row contact-form">
                                        <div id="input-subject" class="col-md-12 input-subject">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>This question is about:  </p>
                                            <span>Choose a topic, so we know whom to send the request to:  </span>
                                            <select id="inlineFormCustomSelect1" name="Subject" class="custom-select subject">
                                                <option>This question is about...</option>
                                                <option>Registering/Authorising</option>
                                                <option>Using Application</option>
                                                <option>Troubleshooting</option>
                                                <option>Backup/Restore</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div id="input-name" class="col-lg-12">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Your Name:  </p>
                                            <span>Please enter your real Name:  </span>
                                            <input type="text" name="name" class="form-control name" placeholder="Your Name*" />
                                        </div>
                                        <div id="input-email" class="col-lg-12">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Your Email Address:  </p>
                                            <span>Please carefully check your email address for accuracy. If email address is incorrect, we are not be able to send you proper information regarding issue you are facing. </span>
                                            <input type="text" name="email" class="form-control email" placeholder="Email Address*" />
                                        </div>
                                        <div id="input-message" class="col-lg-12 input-message">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Explain your question in brief:  </p>
                                            <span>Your problem is our first priority to be solved. Please explain the issue in more brief so, we come out with better solution. </span>
                                            <textarea class="form-control message" name="message" rows="6" placeholder="I have a problem with..."></textarea>
                                        </div>
                                        <div class="col-lg-12 mt-15 form-btn text-right">
                                            <button type="submit" class="btn btn-blue black-hover submit" style={{ fontFamily: 'Quicksand', backgroundColor: '#12CF69', border: 'none' }}>Submit Request </button>
                                        </div>
                                        <div class="col-lg-12 contact-form-msg">
                                            <span class="loading"></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="download-1" class="bg-scroll bg-geometric download-section division">
                    <div class="container white-color">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1">
                                <div class="download-txt text-center">
                                    <h3 class="h3-xs" style={{ fontFamily: 'Quicksand' }}>Getting started takes less than 5 minutes </h3>
                                    <p class="p-md">Checkout the perfect mobile app you'll fall in love with.
                                    </p>
                                    <div class="stores-badge">
                                        <a href="#" class="store">
                                            <img class="appstore-white" src="images/store_badges/appstore-tra-white.png" alt="appstore-logo" />
                                        </a>
                                        <a href="#" class="store">
                                            <img class="googleplay-white" src="images/store_badges/googleplay-tra-white.png" alt="googleplay-logo" />
                                        </a>
                                        <span class="os-version">* Available on iPhone, Windows and all Android devices </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact
