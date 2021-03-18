import React, {useState} from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'
import FirstImg from '../assets/imgs/13nf6fd5412.png';
import SecondImg from '../assets/imgs/22gf54f5d.png';
import ThirdImg from '../assets/imgs/24df46sd5s.png';
import FourthImg from '../assets/imgs/5f7g1df5d.png';
import ContentLoader from 'react-content-loader';
import Tabs from '../components/Tabs';

function Offers(props) {

    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container wrapper">
                <div className="text-center mb-5">
                    <h2>Offers for You</h2>
                    <p>Explore top deals and offers exclusively for you!</p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 15% discount using SBI Credit Cards</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px'}}>Use code SBI75 and get 15% discount up to Rs.75 on orders above Rs.400</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src="http://www.wisshwash.com/images/dryclean.png" alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 15% discount using HDFC Bank PayZapp Card</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px'}}>Use code PAYZAPP50 & get 15% discount up to Rs.50 on orders above Rs.250</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src={FirstImg} alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage:'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 20% discount using Axis Bank Net Banking</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px',height: '3em',overflow:'hidden',whiteSpace:'normal',textOverflow:'ellipsis'}}>Use code AXISNB75 and get 20% discount up to Rs.75 on orders above Rs.300/- Now login to Axis Net Banking using Registered Mobile Number + MPIN</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src={SecondImg} alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage: 'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 15% discount using SBI Credit Cards</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px'}}>Use code SBI75 and get 15% discount up to Rs.75 on orders above Rs.400</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src={ThirdImg} alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage:'linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 20% discount using Axis Bank Net Banking</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px',height: '3em',overflow:'hidden',whiteSpace:'normal',textOverflow:'ellipsis'}}>Use code AXISNB75 and get 20% discount up to Rs.75 on orders above Rs.300/- Now login to Axis Net Banking using Registered Mobile Number + MPIN</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src={FourthImg} alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 15% discount using SBI Credit Cards</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px'}}>Use code SBI75 and get 15% discount up to Rs.75 on orders above Rs.400</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src="https://lh3.googleusercontent.com/proxy/hz7goiKrla9CxKZE2baG73miAMApF8kQcdAmiHjzH-uzj5Ab1-dGhMZ8pMUxNLin0dG1SM1HokUbyKyrSieCRLDstzdNax2eqHE" alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage:'linear-gradient(to right, #243949 0%, #517fa4 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 20% discount using Axis Bank Net Banking</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px',height: '3em',overflow:'hidden',whiteSpace:'normal',textOverflow:'ellipsis'}}>Use code AXISNB75 and get 20% discount up to Rs.75 on orders above Rs.300/- Now login to Axis Net Banking using Registered Mobile Number + MPIN</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src="https://lh3.googleusercontent.com/proxy/_vvFtZzlTpzLCTro61iThJkU8mYGfxRCcjdW3tTvTsy3vdWAuZHVImjFXIRP6_3Ovl1-_l7MLMWiZ1b6ODL73LsjmC4Gh81lpg" alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="shadow-sm" style={{backgroundImage: 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',padding:'20px 20px',borderRadius:'10px'}}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-light">Get 15% discount using SBI Credit Cards</h5>
                                        <p style={{color:'#ffffffbd',fontSize:'13px'}}>Use code SBI75 and get 15% discount up to Rs.75 on orders above Rs.400</p>
                                        <div className="btn btn-outline-light">COPY CODE</div>
                                    </div>
                                    <div>
                                        <img src="https://lh3.googleusercontent.com/proxy/hz7goiKrla9CxKZE2baG73miAMApF8kQcdAmiHjzH-uzj5Ab1-dGhMZ8pMUxNLin0dG1SM1HokUbyKyrSieCRLDstzdNax2eqHE" alt="" width="180px" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

            <br/>
            <br/>
            <Footer/>
            <Tabs/>
        </React.Fragment>
    )
}

export default Offers
