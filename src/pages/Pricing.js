import React from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'

function Pricing(props) {
    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container">
                <div className="text-center">
                    <h2>Pricing & Plans</h2>
                    <p>Professional one stop solutions has been</p>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end">
                        <div className="shadow-sm" style={{backgroundColor:'#505A54',padding:'20px 30px',textAlign:'center',borderRadius:'10px'}}>
                                <h4 className="text-light">Regular (48hrs) FREE</h4>
                                <h6 style={{color:'#ffffffbd'}}>Minimum quantity of 20pounds</h6>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-start">
                        <div className="shadow-sm" style={{backgroundColor:'#2ABD55',padding:'20px 30px',textAlign:'center',borderRadius:'10px'}}>
                                <h4 className="text-light">Express (24hrs) ₹25</h4>
                                <h6 style={{color:'#ffffffbd'}}>No need minimum quantity</h6>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <Footer/>
        </React.Fragment>
    )
}

export default Pricing
