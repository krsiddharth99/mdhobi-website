import React from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Tabs from '../components/Tabs'

function Checkout(props) {
    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        Content
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="card shadow-sm p-3" style={{position:'sticky',top:'90px'}}>
                            <h4>Cart Summary</h4>
                            <Link to="/checkout" className="btn btn-primary btn-block">
                                Checkout
                            </Link>
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

export default Checkout
