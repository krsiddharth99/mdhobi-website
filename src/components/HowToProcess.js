import React from 'react'
import firstImg from './../assets/imgs/g65dfs4d5s.PNG'
import PickupImg from './../assets/imgs/n5h5fbgf.PNG'
import WashImg from './../assets/imgs/3g5fgv6fd.PNG'
import ProcessImg from './../assets/imgs/6b6gf56d.PNG'
import CompleteImg from './../assets/imgs/g4r66fe5d.PNG'
import DeliveryImg from './../assets/imgs/98gfv5d.PNG'

function HowToProcess() {
    return (
        <React.Fragment>
            <section style={{paddingTop:'50px'}}>
                <div className="text-center">
                    <h2 style={{fontWeight:'700'}}>How to Process</h2>
                    <p style={{color:'#96A8AC',fontWeight:'400'}}>We don't share your personal?<br/> information with anyone.</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={firstImg} alt="Pickup" width="100%" className="img-fluids" />
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            <div style={{width:'415px'}}>
                                <img src={PickupImg} alt="Pickup"/>
                                <h3>We Pick Up</h3>

                                <p>
                                    Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.
                                </p>

                                <p>
                                    Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.
                                </p>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div style={{width:'415px'}}>
                                <img src={ProcessImg} alt="Process"/>
                                <h3>We Clean</h3>

                                <p>
                                    Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.
                                </p>

                                <p>
                                    Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-start">
                            <img src={WashImg} alt="Pickup" width="100%" className="img-fluid" />
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={CompleteImg} alt="Pickup" width="100%" className="img-fluid" />
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            <div style={{width:'415px'}}>
                                <img src={DeliveryImg} alt="Pickup"/>
                                <h3>We Bring it Back in 36 Hours (Free Delivery And Pickup)</h3>

                                <p>
                                    Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.
                                </p>

                                <p>
                                    Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.Pro members enjoy free pickup and delivery, Exciting Offers on each Order, exclusive access to deals & more.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default HowToProcess
