import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowToProcess from '../components/HowToProcess'
import Services from '../components/Services'
import AdviseImg from './../assets/imgs/nh46f5g3df.PNG'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive'
import { Redirect, useHistory } from "react-router-dom";




function Home(props) {
    const history = useHistory();
    
    

    return (
        <React.Fragment>
            <MediaQuery maxDeviceWidth={767} >
                return <Redirect to="/home" />
            </MediaQuery>
            <MediaQuery minDeviceWidth={768} >
                <Header show={props.show} />
                <Services />
                <HowToProcess />
                <br />
                <br />
                <br />
                <div hidden className="jumbotron" style={{ backgroundColor: '#29C56B', borderRadius: '0px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-end">
                                <LazyLoadImage
                                    src={AdviseImg}
                                    alt="Pickup"
                                    width="85%"
                                />
                            </div>

                            <div className="col-md-6 d-flex justify-content-start align-items-center">
                                <div style={{ width: '415px' }}>
                                    <h3 className="text-light">Get Clean Your Cloth <br />&amp; Save Your Time</h3>

                                    <p>
                                        Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals &amp; more.
                                </p>

                                    <p>
                                        Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals &amp; more.Pro members enjoy free pickup and delivery.
                                </p>

                                    <div>
                                        <div className="btn btn-lg btn-light mr-3" style={{ borderRadius: '30px', padding: '.375rem 1.0rem' }}>Get Started</div>
                                        <div className="btn btn-lg btn-outline-light" style={{ borderRadius: '30px', padding: '.375rem 1.5rem' }}>Read More</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron" style={{ backgroundImage: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)', borderRadius: '0px', paddingBottom: '0px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div style={{ width: '415px' }}>
                                    <h3 className="text-light">Download the mDhobi App!</h3>

                                    <p>
                                        mDhobi is a professional one stop solutions has been founded on the principal of providing cleaning and quick laundry services for Students, household and commercials.
                                </p>

                                    <div className="d-flex align-items-center mb-3">
                                        <a href="https://apps.apple.com/in/app/pick-my-laundry/id1111296568" target="_blank">
                                            <img className="mr-3" src="http://quickwashapp.com/images/store_badges/appstore-tra-white.png" width="150px" alt="" />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.quickwash.customerapp" target="_blank">
                                            <img src="http://quickwashapp.com/images/store_badges/googleplay-tra-white.png" width="150px" alt="" />
                                        </a>
                                    </div>

                                    <p>
                                        * Available on iPhone, iPad and all Android devices Above 4.4
                                </p>

                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <LazyLoadImage
                                    alt="mDhobi-App"
                                    src="http://quickwashapp.com/images/image-14.png"
                                    width="65%"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <section id="reviews-2" className="bg-fixed bg-map bg-lightgrey reviews-section wide-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 section-title">
                                <h3 className="h3-lg">10k+ Customers Love mDhobi </h3>
                                <p className="p-md">Aliquam a augue suscipit, ______ neque purus ipsum neque _____ primis libero tempus, blandit posuere ______ varius magna congue cursus _____</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">
                                        <div className="review-2 mb-50 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="testimonial-avatar">
                                                <LazyLoadImage
                                                    alt="testimonial-avatar"
                                                    src="https://lh3.googleusercontent.com/a-/AOh14GjLb86guNcB7BHgwS4R3iRqZIkiYnREgHa1HrK5eA=w200-h200-n-rw"
                                                />
                                            </div>
                                            <p>Amazing Design and Easy to use.Easy to Clean Cloths, Iron and Dry Clean.Provide Fast Laundry Services ...</p>
                                            <a href="https://play.google.com/store/apps/details?id=com.quickwash.customerapp&reviewId=gp%3AAOqpTOHCr3qRH928r5LndPtrCOFMxSli99NVvdZBepzyYutvvKxlR9GWZg2VIek20CVB65R55zCltXNf4d2tmIE" target="_blank">@chhotu_singh </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="review-2 wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="testimonial-avatar">
                                                <LazyLoadImage
                                                    alt="testimonial-avatar"
                                                    src="https://lh3.googleusercontent.com/a-/AOh14Gg5aupE64hlZumqC43aRN8_n1g1epTeYTkTcTGzvw=w200-h200-n-rw"
                                                />
                                            </div>
                                            <p>Best Laundry App.Amazing Design and Easy to use.Amazing Service for Cloths cleaning and Iron in 2 Days.</p>
                                            <a href="https://play.google.com/store/apps/details?id=com.quickwash.customerapp&reviewId=gp%3AAOqpTOH4keYpK8KaNelf9JvGSwxXLgC32Tg0Fve2s38mnIiblwAqHDE7ABh9QTnSFwfHBri0Wi6uxVT_FUDGQws" target="_blank">@Lokesh_Ojha </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-2 mt-60 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="testimonial-avatar">
                                                <LazyLoadImage
                                                    alt="testimonial-avatar"
                                                    src="https://lh3.googleusercontent.com/a-/AOh14GjjhGtX7GMVqnhfqbiF2vDkmtLc-W-5qG9N11cPDw=w200-h200-n-rw"
                                                />
                                            </div>
                                            <p>helpful for washing and cleaning. thank you.</p>
                                            <a href="#" target="_blank">@nilesh_kumar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="more-reviews text-center wow fadeInUp mt-5 mb-5" data-wow-delay="0.9s">
                                    <h5 className="h5-xs"><a href="https://play.google.com/store/apps/details?id=com.quickwash.customerapp&amp;hl=en_IN&amp;showAllReviews=true" target="_blank" style={{ textDecoration: 'underline' }}>See what  <span>more people </span> are saying about mDhobi </a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </MediaQuery>

        </React.Fragment>
    )
}

export default Home
