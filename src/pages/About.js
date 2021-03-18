import React, { useEffect } from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'
import FoundImg from '../assets/imgs/found.png';
import CompaniesImg from '../assets/imgs/companies.png';
import RevenueImg from '../assets/imgs/revenue.png';
import AboutteamImg from '../assets/imgs/aboutteam.svg';
import WashImg from '../assets/imgs/6b6gf56d.PNG';
import DrycleanImg from '../assets/imgs/98gfv5d.PNG';
import DeliveryImg from '../assets/imgs/n5h5fbgf.PNG';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="mb-30" style={{ backgroundColor: '#29C56B', padding: '30px', marginTop: '75px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={AboutteamImg} height="300px" alt="" />
                        </div>
                        <div className="col-md-6 ">
                            <h2 className="text-white">About us</h2>
                            <div>
                                <hr className="mt-0" style={{ borderTop: '2px solid white', width: '90px' }} />
                            </div>
                            <p className="mt-10" style={{ color: 'white', fontWeight: '500', fontFamily: 'Montserrat', textAlign: 'justify' }}>mDhobi is an On-Demand Laundry and Dry-Cleaning service company, presently operating in Kota, Rajasthan. We provide an affordable and convenient way of getting your laundry done right at your finger-tips. We offer the best online laundry service in Kota and help you get rid of those extra pile of dirty clothes and deliver you fresh clothes.</p>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '500', fontSize: '14px' }}>Fusce felis nisl, dignissim et sollicitudin vitae, sollicitudin eget leo. Quisque in tellus quis lectus facilisis facilisis vel quis nibh. Nunc sagittis at est vitae laoreet. Nullam ac lobortis elit. Ut a pharetra justo, ac cursus tortor. Vestibulum dolor urna, porta eget orci sed, elementum bibendum diam. Nulla scelerisque a dui non iaculis. Donec non tortor imperdiet, porttitor lorem quis, tincidunt ex.Aenean vitae augu</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="row justify-content-between">
                    <div className="col-md-3.5 shadow-sm" style={{ padding: '20px' }}>
                        <div className="row align-items-center">
                            <div className="col-md-4 align-items-center">
                                <img src={FoundImg} alt="error" />
                            </div>
                            <div className="col-md-8 pl-20">
                                <h6 style={{ color: 'rgba(0,0,0,0.5)' }}>Founded In</h6>
                                <h4>October, 2018</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3.5 shadow-sm" style={{ padding: '20px' }}>
                        <div className="row align-items-center">
                            <div className="col-md-4 align-items-center">
                                <img src={RevenueImg} alt="error" />
                            </div>
                            <div className="col-md-8 pl-20">
                                <h6 style={{ color: 'rgba(0,0,0,0.5)' }}>Estimated Revenue</h6>
                                <h4>$20000 / Yearly</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3.5 shadow-sm" style={{ padding: '20px' }}>
                        <div className="row align-items-center">
                            <div className="col-md-4 align-items-center">
                                <img src={CompaniesImg} alt="error" />
                            </div>
                            <div className="col-md-8 pl-20">
                                <h6 style={{ color: 'rgba(0,0,0,0.5)' }}>Companies we work</h6>
                                <h4>1+</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '50px', marginBottom: '30px' }}>
                <h2 style={{ color: '#585985' }}>Our Services</h2>
                <hr className="mt-0" style={{ borderTop: '2px solid #585985', width: '90px' }} />
                <p className="mt-10" style={{ color: 'rgba(0,0,0,0.4)', fontWeight: '600' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. massa pellentesque. Aenean id turpis nibh. Praesent blandit a nibh in efficitur. Etiam a scelerisque nunc. Sed fermentum efficitur ante, et accumsan tellus. Vivamus ultrices, sem ut aliquet gravida, tellus risus scelerisque velit, aliquet elementum massa massa ut augue. Nam a magna tempor nulla tincidunt suscipit. Donec at tincidunt nunc.Quisque bibendum vel enim a maximus.</p>
                <div className="mb-10 d-flex justify-content-center align-items-center" style={{ marginTop: '30px' }}>
                    <p className="shadow-sm" style={{ borderRadius: '50px', textAlign: 'center', padding: '9px', backgroundImage: 'linear-gradient(to bottom right,#7BF2E9,#B65EBA)', height: '49px', width: '210px', fontSize: '20px', color: 'white', fontWeight: '600' }}> Top Services &nbsp;&nbsp;</p>
                </div>
                <div className="row align-items-center justify-content-center" style={{ marginTop: '40px' }}>
                    <div className="col-md-3 shadow-sm pb-10" style={{ marginRight: '40px' }}>
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={WashImg} height="100px" alt="error" />
                            <h4>Washing</h4>
                        </div>
                        <ul className="ml-20 aboutlist">
                            {
                                [
                                    'Remove Strains',
                                    'Keep Cloth safe',
                                    'Excellent outcome',
                                    'Good quality detergent',
                                    'No spots'
                                ].map((value) => {
                                    return <li>{value}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-3 shadow-sm pb-10" style={{ marginRight: '40px' }}>
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={DrycleanImg} height="100px" alt="error" />
                            <h4>Dry Cleaning</h4>
                        </div>
                        <ul className="ml-20 aboutlist">
                            {
                                [
                                    'Remove Strains',
                                    'Keep Cloth safe',
                                    'Excellent outcome',
                                    'Good quality detergent',
                                    'No spots'
                                ].map((value) => {
                                    return <li>{value}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-3 shadow-sm pb-10" style={{ marginRight: '40px' }}>
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={DeliveryImg} height="100px" alt="error" />
                            <h4>Delivery</h4>
                        </div>
                        <ul className="ml-20 aboutlist">
                            {
                                [
                                    'Remove Strains',
                                    'Keep Cloth safe',
                                    'Excellent outcome',
                                    'Good quality detergent',
                                    'No spots'
                                ].map((value) => {
                                    return <li>{value}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <hr style={{ marginTop: '60px', borderTop: '1px dashed rgba(0,0,0,0.1)' }} />
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="col-md-4">
                        <h2 style={{ color: '#585985', fontFamily: 'Montserrat' }}>Meet innovative minds behind</h2>
                        <hr className="mt-0" style={{ borderTop: '2px solid #585985', width: '90px' }} />
                        <p className="mt-20" style={{ color: 'rgba(0,0,0,0.4)', fontWeight: '600', fontFamily: 'Montserrat' }}>Apprinventiv has got the  support of brillant minds working continually to widen its global image. These creative intellectuals have travelled the success journey full of inspiration, challenges and emotion to form one the world's leading app development company.</p>
                    </div>
                    <div className="col-md-8 align-items-center">
                        <OwlCarousel className='owl-theme' loop={false} margin={16} nav={false} items={3}>
                            <div className='shadow-sm d-flex flex-column align-items-center justify-content-center' style={{ padding: '20px', marginTop: '20px', marginBottom: '5px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                <img src="https://cdn.mdhobi.com/profile_picture/1610586230290.jfif" style={{ height: '130px', width: '130px', borderRadius: '50%' }} alt="" />
                                <h5 className="text-light">Chetan Nager</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Chief Executive Officer)</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                {/* <p style={{color:'white'}}>CEO &amp; Founder</p> */}
                                {/* <div className="d-flex mt-20">
                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                </div> */}
                            </div>
                            <div className='shadow-sm d-flex flex-column align-items-center justify-content-center' style={{ padding: '20px', marginTop: '20px', marginBottom: '5px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                <img src="https://mdhobi.s3.ap-south-1.amazonaws.com/profile_picture/sid.jpg" style={{ height: '130px', width: '130px', borderRadius: '50%' }} alt="" />
                                <h5 className="text-light">Siddharth Kumar</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Chief Technology Officer)</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                {/* <p style={{color:'white'}}>CTO</p> */}
                                {/* <div className="d-flex mt-20">
                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                </div> */}
                            </div>

                            <div className='shadow-sm d-flex flex-column align-items-center justify-content-center' style={{ padding: '20px', marginTop: '20px', marginBottom: '5px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                <img src="https://cdn.mdhobi.com/profile_picture/819767533091685.jpg" style={{ height: '130px', width: '130px', borderRadius: '50%' }} alt="" />
                                <h5 className="text-light">Avinay Mehta</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Chief Financial Officer)</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                {/* <p style={{color:'white'}}>CTO</p> */}
                                {/* <div className="d-flex mt-20">
                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                </div> */}
                            </div>

                            <div className='shadow-sm d-flex flex-column align-items-center justify-content-center' style={{ padding: '20px', marginTop: '20px', marginBottom: '5px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                <img src="https://cdn.mdhobi.com/profile_picture/818493132748997.jpg" style={{ height: '130px', width: '130px', borderRadius: '50%' }} alt="" />
                                <h5 className="text-light">Gunjan Budhkar</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Chief Administrative Officer)</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                {/* <p style={{color:'white'}}>CTO</p> */}
                                {/* <div className="d-flex mt-20">
                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                </div> */}
                            </div>

                            <div className='shadow-sm d-flex flex-column align-items-center justify-content-center' style={{ padding: '20px', marginTop: '20px', marginBottom: '5px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                <img src="https://media-exp1.licdn.com/dms/image/C5103AQH8iOpywG-R7g/profile-displayphoto-shrink_800_800/0/1546974810249?e=1617235200&v=beta&t=0Rv0zKyODbu0_JXUDw5m_41AZyTgmomdOBlkhUGPP64" style={{ height: '130px', width: '130px', borderRadius: '50%' }} alt="" />
                                <h5 className="text-light">Sayan Chakraborty</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Database Administrator)</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                {/* <p style={{color:'white'}}>CTO</p> */}
                                {/* <div className="d-flex mt-20">
                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                </div> */}
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default About
