import React from 'react'
import DryImg from './../assets/imgs/s1df15vf4d5f4gr.PNG'
import LaundryImg from './../assets/imgs/rht5y54jhtrew.PNG'
import AlterImg from './../assets/imgs/GF5drf4ef.PNG'


function Services() {
    return (
        <React.Fragment>
            <section style={{backgroundColor:'#F7FDF8',paddingBottom:'70px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-1px'}} viewBox="0 0 1440 320"><path fill="#29C56B" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,69.3C384,53,480,75,576,101.3C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="text-center">
                        <h2 style={{fontWeight:'700'}}>Our Services</h2>
                        <p style={{color:'#96A8AC',fontWeight:'400'}}>We don't share your personal?<br/> information with anyone.</p>
                    </div>

                    <div className="container" style={{marginTop:'50px'}}>
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center">
                                <div className="text-center">
                                    <img src={DryImg} alt="Dry Cleaning" width="70%" />
                                    <h4 className="mt-2">Dry Cleaning</h4>
                                    <p style={{color:'#96A8AC'}}>
                                        QuickWash is a professional one stop solutions has been founded on the principal of providing cleaning and quick laundry
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center">
                                <div className="text-center">
                                    <img src={LaundryImg} alt="Dry Cleaning" width="70%" />
                                    <h4 className="mt-2">Laundry</h4>
                                    <p style={{color:'#96A8AC'}}>
                                        QuickWash is a professional one stop solutions has been founded on the principal of providing cleaning and quick laundry
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center">
                                <div className="text-center"> 
                                    <img src={AlterImg} alt="Dry Cleaning" width="70%" />
                                    <h4 className="mt-2">Alterations</h4>
                                    <p style={{color:'#96A8AC'}}>
                                        QuickWash is a professional one stop solutions has been founded on the principal of providing cleaning and quick laundry
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Services
