import React from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer';


const support_available = [
    {
        'img': 'imgs/myaccount.png',
        'title': 'My Account',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/charges.png',
        'title': 'Orders & Refunds',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/payout.png',
        'title': 'Payouts',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/connect.png',
        'title': 'Connect',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/billing.png',
        'title': 'Billing & Subscriptions',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/international.png',
        'title': 'International',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/fraud.png',
        'title': 'Disputes & Frauds',
        'desciption': 'Problem related to the My acount or its settings.',
    },
    {
        'img': 'imgs/accounting.png',
        'title': 'Accounting & Taxes',
        'desciption': 'Problem related to the My acount or its settings.',
    },
];

function Help(props) {
    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-60" style={{marginTop:'70px', backgroundColor: '#29C56B', padding: '40px 0px',marginBottom:'40px' }}>
                <h3 className="text-white">How can we help you today?</h3>
                <p className="mt-20 w-50" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>Online approach for cleaning is so vibrat in todays markets, peoples often neglect the fact that it is much more economical then the traditional concept.</p>
                <div style={{ position: 'relative',width:'400px' }}>
                    <input type="text" className="shadow-sm form-control" placeholder="Ask a Question" style={{ borderRadius: '30px', border: 'none', padding: '0.7rem .75rem' }} />
                    <div style={{ position: 'absolute', right: '4px', top: '4px', bottom: '4px', backgroundColor: '#12CF69', padding: '0px 20px', borderRadius: '30px', color: 'white', cursor: 'pointer' }} className="shadow-sm d-flex justify-content-center align-items-center">
                        Search<span className="ml-1 fab fa-lg fa-telegram-plane"></span>
                    </div>
                </div>
            </div>
            <div className="container" style={{marginTop:'20px',marginBottom:'70px'}}>
                <div className="row">
                    {
                        support_available.map((support) => {
                            return <div className="col-md-3 d-flex flex-column align-items-center justify-content-center support-card" style={{ overflow: 'hidden',padding:'20px 20px',marginBottom:'20px' }}>
                                <img src={support['img']} alt="error" />
                                <h5 style={{ color: '#585985' }}>{support['title']}</h5>
                                <p style={{ marginTop:'20px', textAlign: 'center', color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: '14px' }}>{support['desciption']}</p>
                            </div>
                        })
                    }
                </div>
            </div>


    
            <Footer/>
        </React.Fragment>
    )
}

export default Help
