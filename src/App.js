import './App.css';
import React, { useState } from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Account from './pages/Account';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Offers from './pages/Offers';
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import Products from './pages/Products';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import axios from 'axios';
import Checkout from './pages/Checkout';
import Premium from './pages/Premium';
import Auth from './pages/Mobile/Auth';
import MyAccount from './pages/Mobile/MyAccount';
import Help from './pages/Help';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import OtpInput from 'react-otp-input';
import { WOW } from 'wowjs';
import { Drawer, Target, Trigger, CloseButton } from "@accessible/drawer";
import { styles } from "@dash-ui/styles";
import { MyLocationOutlined, CloseOutlined, LocationOnOutlined } from '@material-ui/icons';
import { Button, makeStyles } from "@material-ui/core";
import Login from './pages/Login';
import EditProfile from './pages/Mobile/EditProfile';
import MyOrders from './pages/Mobile/MyOrders';
import MyCart from './pages/Mobile/MyCart';
import PageTransition from "react-router-page-transition";
import HomeMobile from './pages/Mobile/Home';
import MReferrals from './pages/Mobile/MReferrals'
import MManageAddress from './pages/Mobile/MManageAddress'
import MLocation from './pages/Mobile/MLocation';
import MRegister from './pages/Mobile/MRegister';
import MLocationMarker from './pages/Mobile/MLocationMarker';
import MOnboarding from './pages/Mobile/MOnboarding';
import MOtpVerify from './pages/Mobile/MOtpVerify';
import Orders from './pages/Orders';
import { FormControlLabel, Checkbox, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import MMCashPlus from './pages/Mobile/MMCashPlus';
import CancellationAndRefund from './pages/CancellationAndRefund';
import Faqs from './pages/Faqs';



const drawer = styles({
  default: `
    z-index:105;
    width: 390px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 32px;
    opacity: 0;
    transition-property: visibility, opacity, transform;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 0px;
  `,
  open: `
    opacity: 1;
  `
});



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


function App() {
  const [visible, setvisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isValidated, setValidated] = useState(true);
  const [loginWithOTP, setLoginWithOTP] = useState(true);
  const [isLocationSearching, setIsLocationSearching] = useState(false);
  const [locations, setLocations] = useState([]);
  const [recentLocations, setRecentLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [OTP, setOTP] = useState('');

  function handleChange(otp) {
    setOTP(otp);
  }

  function show() {
    setMobileNumber("")
    setvisible(true);
  }

  function hide() {
    setvisible(false);
  }

  function formHandler(e) {
    setMobileNumber(e.target.value);
  }

  function getSearchLocation(term) {
    console.log(term);
    if (term != "" &&
      term != " " &&
      term.length >= 1) {
      setIsLocationSearching(true);
      axios.get("https://customer.mdhobi.com/v1/locations/search/" + term, {
        "Content-Type": "application/json"
      }).then(function (response) {
        console.log(response);
        if (response.status == 200) {
          setLocations(response.data.data);
          setIsLocationSearching(false);
          console.log(locations);
        }
      }).catch(function (error) {
        console.log(error);
        setIsLocationSearching(false);
      });
    } else {
      setIsLocationSearching(false);
      setLocations([]);
    }

  }

  function checkCustomerLogin(e) {
    e.preventDefault();
    e.target[0].value != "" ? setValidated(true) : setValidated(false);
    if (isValidated) {
      setLoading(true)
      axios.post("https://webapi.mdhobi.com/dev/signup/status", {
        'loginId': mobileNumber
      }, {
        "Content-Type": "application/json"
      }).then(function (response) {
        console.log(response);
        if (response.status == 200) {
          if (response.data.RESPONSE.isVerified) {
            setLoading(false);
            setLoginWithOTP(true);
            var wow = new WOW(
              {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true,       // act on asynchronously loaded content (default is true)
                callback: function (box) {
                  // the callback is fired every time an animation is started
                  // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null // optional scroll container selector, otherwise use window
              }
            );
            wow.init();
          }
        }
      }).catch(function (error) {
        console.log(error);
        setLoading(false);
      });
    }
  }

  return (
    <React.Fragment>
      <Router>
        <Drawer>
          {/* onUpdate={() => window.scrollTo(0, 0)} */}
          <Route path="/" exact render={(props) => <Home show={show} />} />
          <Route path="/login" render={(props) => <Login show={show} />} />
          <Route path="/account" render={(props) => <Account show={show} />} />
          <Route path="/pricing" render={(props) => <Pricing show={show} />} />
          <Route path="/services" render={(props) => <Services show={show} />} />
          <Route path="/offers" render={(props) => <Offers show={show} />} />
          <Route path="/cart" render={(props) => <Cart show={show} />} />
          <Route path="/checkout" render={(props) => <Checkout show={show} />} />
          <Route path="/about-us" render={(props) => <About show={show} />} />
          <Route path="/privacy-policy" render={(props) => <PrivacyPolicy show={show} />} />
          <Route path="/service/:serviceName" render={(props) => <Products show={show} />} />
          <Route path="/help" exact render={(props) => <Help show={show} />} />
          <Route path="/faqs" exact render={(props) => <Faqs show={show} />} />
          <Route path="/premium" exact render={(props) => <Premium show={show} />} />
          <Route path="/contact-us" exact render={(props) => <Contact show={show} />} />
          <Route path="/terms-and-conditions" exact render={(props) => <TermsAndConditions show={show} />} />
          <Route path="/cancellation-and-refund" exact render={(props)=> <CancellationAndRefund show={show} />} />

          {
            /* Mobile Version Routes */
          }


          <Route path="/welcome" exact render={(props) => <MOnboarding show={show} />} />
          <Route path="/auth" exact render={(props) => <Auth show={show} />} />
          <Route path="/auth/otp-verify" exact render={(props) => <MOtpVerify show={show} />} />
          <Route path="/register" exact render={(props) => <MRegister show={show} />} />
          <Route path="/home" exact render={(props) => <HomeMobile show={show} />} />
          <Route path="/location-autocomplete" exact render={(props) => <MLocation show={show} />} />
          <Route path="/location-marker" exact render={(props) => <MLocationMarker show={show} />} />
          <Route path="/my-account" exact render={(props) => <MyAccount show={show} />} />
          <Route path="/my-cart" exact render={(props) => <MyCart show={show} />} />
          <Route path="/edit-profile" exact render={(props) => <EditProfile show={show} />} />
          <Route path="/my-orders" exact render={(props) => <MyOrders show={show} />} />
          <Route path="/manage-address" exact render={(props) => <MManageAddress show={show} />} />
          <Route path="/mCash+" exact render={(props) => <MMCashPlus show={show} />} />
          <Route path="/referrals" exact render={(props) => <MReferrals show={show} />} />

          {/* <PageTransition timeout={500}>
            
          </PageTransition> */}


          <Target
            placement="left"
            closedClass={drawer()}
            openClass={drawer("open")}
            preventScroll={true}
          >
            <div id="search-location-drawer">
              <div style={{ position: 'absolute', top: '10px', right: '15px', cursor: 'pointer' }}>
                <CloseButton>
                  <CloseOutlined />
                </CloseButton>
              </div>
              <div style={{ position: 'relative' }} className="mb-3 mt-2">
                <input type="text" value={searchTerm} className="shadow-sm form-control" placeholder="Search for area, street name..." style={{ borderRadius: '30px', border: 'none', padding: '0.7rem .75rem', fontSize: '14px' }} onChange={(event) => {
                  setSearchTerm(event.target.value);
                  getSearchLocation(event.target.value);
                }} />
                <div style={{ textAlign: 'center', position: 'absolute', right: '15px', top: '4px', bottom: '4px', color: 'rgb(0 0 0 / 54%)' }} className=" d-flex justify-content-center align-items-center">
                  {
                    isLocationSearching ? (
                      <div class="spinner-border" style={{ width: '1.5rem', height: '1.5rem',color:'rgb(0 0 0 / 54%)' }} role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                        <span className="ml-1 fas fa-lg fa-search"></span>
                      )
                  }
                </div>
              </div>


              {/* <Button className="mt-3" appearance="ghost" style={{ border: '1px solid grey !important' }}>
                  
                </Button> */}
              <div className="d-flex" style={{ backgroundColor: 'oldlace' }}>
                <div>
                  <MyLocationOutlined size="lg" />
                </div>
                <div>
                  <h6 style={{ fontWeight: '500', color: 'rgba(0,0,0,0.9)' }}>
                    Current Location
                      </h6>
                  <p style={{ color: 'rgba(0,0,0,0.4)', fontSize: '14px' }}>Using GPS</p>
                </div>
              </div>

              <div>
                {
                  searchTerm.length != 0 ? (
                    locations.map(location => {
                      return (
                        <React.Fragment>
                          <div className="row">
                            <div className="col-2">
                              <LocationOnOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                            </div>
                            <div className="col-10">
                              <div className="d-flex flex-column ">
                                <h4 className="location-title">{location.structured_formatting.main_text}</h4>
                                <h4 className="location-subtitle">{location.description}</h4>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </React.Fragment>
                      )
                    })
                  ) : (
                      <div>

                      </div>
                    )
                }
              </div>

            </div>
          </Target>
        </Drawer>






        <Rodal visible={visible} onClose={hide.bind(this)} width={800} height={474} showMask={true} closeOnEsc={true}>
          <div className="container-fuild rodal-div" style={{ margin: '0px', padding: '0px' }}>
            <div className="row">
              <div className="col-md-6 col-sm-5 overflow-hidden d-flex align-items-center justify-content-center" style={{ minHeight: '474px', height: '100%', backgroundImage: 'url("https://assets-netstorage.groww.in/website-assets/prod/1.2.3/build/client/images/pattern.c04c3d96.svg")', backgroundSize: 'cover', borderRadius: '18px 0 0 18px' }}>
                <img src="https://studiohakuna.com/images/services/service-1.png" width="100%" className="img-fluid" alt="" />
              </div>
              {
                loginWithOTP ? (
                  // <div className="wow fadeInRight col-md-6 col-sm-7 d-flex flex-column justify-content-center" style={{ position: 'relative' }}>
                  //   <svg style={{ position: 'absolute', top: '15px', left: '10px', cursor: 'pointer' }} onClick={() => {
                  //     setLoginWithOTP(false);
                  //   }} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  //     viewBox="0 0 492 492" width="30" height="16" xmlSpace="preserve">
                  //     <g>
                  //       <g>
                  //         <path fill="#999999" d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
                  //       c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
                  //       L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
                  //       c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
                  //       c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
                  //       C492,219.198,479.172,207.418,464.344,207.418z"/>
                  //       </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                  //   </svg>

                  //   <div className="mb-3">
                  //     <h3 style={{ color: '#011627', fontWeight: '600' }}>OTP Verification</h3>
                  //     <hr hidden className="ml-0 ml-1" style={{ width: '60px', marginTop: '-3px', borderTop: '2px solid #07c092' }} />
                  //     <p style={{ color: 'grey' }}>Enter the OTP sent to +91 - 8209446178</p>
                  //   </div>

                  //   <div className="pt-4 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                  //     <OtpInput
                  //       value={OTP}
                  //       onChange={handleChange}
                  //       numInputs={4}
                  //       separator={<div style={{ marginLeft: '7px' }}>-</div>}
                  //       inputStyle={{
                  //         height: '50px',
                  //         width: '50px',
                  //         outline: 'none',
                  //         border: '2px solid #80808078',
                  //         borderRadius: '3px',
                  //         marginLeft: '7px'
                  //       }}
                  //       focusStyle={{
                  //         outline: 'none',
                  //         borderColor: '#07c092'
                  //       }}
                  //     />
                  //   </div>
                  //   <button className="shadow-sm" style={{ borderRadius: '3px', padding: '.55rem .75rem' }} type="submit">
                  //     {!isLoading ? "VERIFY AND CONTINUE" : (
                  //       <div class="spinner-border text-success" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                  //         <span class="sr-only">Loading...</span>
                  //       </div>
                  //     )}
                  //   </button>

                  //   <p className="text-center mt-3"><span style={{ fontSize: '13px', color: 'grey', letterSpacing: '0.5px' }}>Don't receive the OTP?</span> <span style={{ color: '#07c092', cursor: 'pointer' }}>RESEND OTP</span></p>

                  // </div>
                  <div id="rodal-register-page" className="wow fadeInRight col-md-6 col-sm-7 d-flex flex-column justify-content-center" style={{ position: 'relative' }}>
                    <svg style={{ position: 'absolute', top: '15px', left: '10px', cursor: 'pointer' }} onClick={() => {
                      setLoginWithOTP(false);
                    }} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 492 492" width="30" height="16" xmlSpace="preserve">
                      <g>
                        <g>
                          <path fill="#999999" d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
                        c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
                        L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
                        c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
                        c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
                        C492,219.198,479.172,207.418,464.344,207.418z"/>
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>

                    <div className="mb-3 mt-2">
                      <h3 style={{ color: '#011627', fontWeight: '600' }}>Signup</h3>
                      <hr hidden className="ml-0 ml-1" style={{ width: '60px', marginTop: '-3px', borderTop: '2px solid #07c092' }} />
                      <p className="mb-0" style={{ color: 'grey' }}>Create an account with the new phone number - <b>+918209446178</b></p>
                    </div>

                    <div className="form-col align-items-center mt-0 mb-3">

                      <div className="row-auto mb-2">
                        <input type="text" placeholder="Email Address" value={mobileNumber} onChange={formHandler} {...isLoading ? "readonly" : ""} />
                      </div>

                      <div className="row-auto mb-2">
                        <input type="text" placeholder="Full Name" value={mobileNumber} onChange={formHandler} {...isLoading ? "readonly" : ""} />
                      </div>

                      <div className="row-auto mb-2">
                        <input type="password" placeholder="Password" value={mobileNumber} onChange={formHandler} {...isLoading ? "readonly" : ""} />
                      </div>

                      <FormControlLabel hidden className="mb-0" color="primary" control={<GreenCheckbox name="checkedC" />} label="Have Referral Code?" />

                      <div className="row-auto">
                        <input type="text" placeholder="Referral Code (Optional)" value={mobileNumber} maxLength="10" onChange={formHandler} {...isLoading ? "readonly" : ""} />
                      </div>

                    </div>

                    <p className="mb-0"><span style={{ fontSize: '13px', color: 'grey', letterSpacing: '0.5px' }}>By creating an account, I accept the <a href="https://www.mdhobi.com/terms-and-conditions" target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>Terms and Conditions</a></span></p>

                    <button className="shadow-sm" style={{ borderRadius: '3px', padding: '.55rem .75rem' }} type="submit">
                      {!isLoading ? "SIGNUP" : (
                        <div class="spinner-border text-success" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                    </button>

                  </div>
                ) : (
                    <div className="wow slideInRight col-md-6 col-sm-7 d-flex align-items-center" data-wow-duration="0.1s" data-wow-delay="0s">
                      <div>
                        <div>
                          <h3 style={{ color: '#011627', fontWeight: '600' }}>Get Started</h3>
                          <hr className="ml-0 ml-1" style={{ width: '60px', marginTop: '-3px', borderTop: '2px solid #07c092' }} />
                          <p style={{ color: 'grey' }}>Get a personalised experience, and access all our services</p>
                        </div>


                        <form onSubmit={checkCustomerLogin}>
                          <div className="form-col align-items-center">
                            <div className="row-auto">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <div className="input-group-text">+91</div>
                                </div>
                                <input type="phone" placeholder="Enter your number" value={mobileNumber} maxLength="10" onChange={formHandler} {...isLoading ? "readonly" : ""} />
                              </div>
                              <button style={{ borderRadius: '3px', padding: '.55rem .75rem' }} type="submit">
                                {!isLoading ? "CONTINUE" : (
                                  <div class="spinner-border text-success" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                                    <span class="sr-only">Loading...</span>
                                  </div>
                                )}
                              </button>
                            </div>
                          </div>
                        </form>

                        <br />

                        <h6 className="mt-5 mb-3">For better use of our service <span className="text-dark font-weight-bold">Download the mDhobi app!</span></h6>

                        <div className="d-flex">
                          <a href="https://apps.apple.com/in/app/pick-my-laundry/id1111296568" target="_blank">
                            <img className="mr-3" src="http://quickwashapp.com/images/store_badges/appstore.png" width="150px" alt="" />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.quickwash.customerapp" target="_blank">
                            <img src="http://quickwashapp.com/images/store_badges/googleplay.png" width="150px" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
              }
            </div>
          </div>
        </Rodal>
      </Router>
    </React.Fragment>
  );
}

export default App;
