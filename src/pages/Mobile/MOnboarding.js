import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Button, CircularProgress, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MOnboarding() {
    const history = useHistory();
    return (
        <React.Fragment>
            <div style={{ height: '70vh' }} id="mobile-onboarding-owl">
                <OwlCarousel className='owl-theme' loop={false} margin={0} dots={true} nav={false} items={1}>
                    <div>
                        <LazyLoadImage
                            alt="Invited"
                            src="/assets/imgs/onboarding_1.png"
                        />
                    </div>

                    <div>
                        <LazyLoadImage
                            alt="Invited"
                            src="/assets/imgs/onboarding_4.png"
                        />
                    </div>

                    <div>
                        <LazyLoadImage
                            alt="Invited"
                            src="/assets/imgs/onboarding_2.png"
                        />
                    </div>

                </OwlCarousel>
            </div>
            <div style={{ height: '30vh' }} className="">
                <div className="d-flex flex-column align-items-center">
                    <div style={{ padding: '15px 30px', textAlign: 'center' }}>
                        <Typography className="mb-2" style={{ fontWeight: '700', fontFamily: 'Montserrat', fontSize: '19px', letterSpacing: '0.1', lineHeight: '1.3' }}>
                            Choose from a wide <br /> range of local services
                        </Typography>
                    </div>
                    <Button onClick={() => {
                        history.push("/location-autocomplete");
                    }} variant="contained" style={{ backgroundColor: '#29C56B', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'initial', fontSize: '16px', letterSpacing: '0.3px', width: '70vw', borderRadius: '10px' }} disableElevation>
                        Select delivery location
                    </Button>

                    <div style={{ padding: '15px 30px', textAlign: 'center' }} className="d-flex align-items-center">
                        <Typography className="mb-2 mr-2" style={{ color: '#9E9E9E', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '14px' }}>
                            Have an Account?
                        </Typography>

                        <Typography onClick={() => {
                            history.push("/auth");
                        }} className="mb-2" style={{ color: '#29C56B', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '16px' }}>
                            Login
                        </Typography>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MOnboarding
