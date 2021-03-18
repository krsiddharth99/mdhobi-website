import { ShoppingBasketOutlined,ArrowForwardIosOutlined, TableChartOutlined, AccountBalanceWalletOutlined, PinDropOutlined, CardGiftcardOutlined, SettingsPowerOutlined } from '@material-ui/icons'
import React, { useEffect } from 'react'
import Tabs from '../../components/Tabs'
import { Card,CardContent, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import MediaQuery from 'react-responsive'
import { Redirect, useHistory } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#FCFCFC'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    myTab: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

function HomeMobile() {
    const classes = useStyles();
    const history = useHistory();

    const [isLoading, setisLoading] = React.useState(true);


    useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 1500);
    }, [])


    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={768} >
                return <Redirect to="/" />
            </MediaQuery>
            <div style={{ backgroundColor: '#FCFCFC' }} className="transition-item">
                    <AppBar elevation="0" className={classes.root} color="grey" position="fixed">
                        <Toolbar className="d-flex justify-content-between">

                            <Button
                                onClick={() => {
                                    history.push("/location-autocomplete")
                                }}
                            >
                                <div className="d-flex flex-column align-items-start">
                                    <div>
                                        <Typography variant="h4" style={{ color: '#424242', fontWeight: '600', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.690rem' }}>
                                            Talwandi
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="h5" style={{ color: '#9E9E9E', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.3rem' }}>
                                            2-F-12 Talwandi, Kota, Rajasthan
                                        </Typography>
                                    </div>
                                </div>
                            </Button>

                            <IconButton
                                color="inherit"
                                onClick={() => {
                                    history.push("/my-cart");
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <ShoppingBasketOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                                    <div style={{ position: 'absolute', top: '0px', right: '-8px', backgroundColor: 'red', color: 'white', fontSize: '13px', padding: '0px 6px', borderRadius: '50%', fontFamily: 'Montserrat', }}>
                                        8
                                </div>
                                </div>
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                </div>

                {
                    isLoading ? (
                        <div style={{ position: 'absolute', top: '12%', }} className="w-100 px-4">
                            <Skeleton style={{ height: '150px', borderRadius: '25px' }} />

                            <div className="d-flex justify-content-between mt-5 w-100">
                                <Skeleton className="ml-2" style={{ borderRadius: '0px', width: '150px', height: '20px', borderRadius: '10px' }} />
                                <Skeleton className="mr-2" style={{ borderRadius: '0px', width: '60px', height: '20px', borderRadius: '10px' }} />
                            </div>



                            <div className="container-fluid w-100 mt-4 mb-3">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                                            <Skeleton style={{ borderRadius: '0px', width: '100px', height: '100px', borderRadius: '5px' }} />
                                            <Skeleton className="mt-3" style={{ borderRadius: '0px', width: '60px', height: '10px', borderRadius: '10px' }} />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                                            <Skeleton style={{ borderRadius: '0px', width: '100px', height: '100px', borderRadius: '5px' }} />
                                            <Skeleton className="mt-3" style={{ borderRadius: '0px', width: '60px', height: '10px', borderRadius: '10px' }} />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                                            <Skeleton style={{ borderRadius: '0px', width: '100px', height: '100px', borderRadius: '5px' }} />
                                            <Skeleton className="mt-3" style={{ borderRadius: '0px', width: '60px', height: '10px', borderRadius: '10px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Skeleton style={{ height: '120px', borderRadius: '25px' }} />

                        </div>
                    ) : (
                            <div style={{ position: 'absolute', top: '15%',width:'100%' }}>
                                <div className="container">
                                    <div>
                                        Hello World
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Typography variant="h4" style={{ color: '#424242', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                                Popular Services
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography onClick={() => {
                                                history.push("/services")
                                            }} variant="p" style={{ color: '#9E9E9E', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                                View All
                                                <ArrowForwardIosOutlined style={{ fontSize: '20px', color: 'rgb(0 0 0 / 54%)' }} />
                                            </Typography>
                                        </div>
                                    </div>

                                    <div style={{ overflowX: 'scroll' }}>
                                        <Card>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Word of the Day
                                                </Typography>

                                                <Typography variant="h5" component="h2">
                                                    ghjkl
                                                </Typography>

                                                <Typography color="textSecondary">
                                                    adjective
                                                </Typography>

                                                <Typography variant="body2" component="p">
                                                    well meaning and kindly.
                                                    <br />
                                                    {'"a benevolent smile"'}
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Word of the Day
                                                </Typography>

                                                <Typography variant="h5" component="h2">
                                                    ghjkl
                                                </Typography>

                                                <Typography color="textSecondary">
                                                    adjective
                                                </Typography>

                                                <Typography variant="body2" component="p">
                                                    well meaning and kindly.
                                                    <br />
                                                    {'"a benevolent smile"'}
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Word of the Day
                                                </Typography>

                                                <Typography variant="h5" component="h2">
                                                    ghjkl
                                                </Typography>

                                                <Typography color="textSecondary">
                                                    adjective
                                                </Typography>

                                                <Typography variant="body2" component="p">
                                                    well meaning and kindly.
                                                    <br />
                                                    {'"a benevolent smile"'}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                }


                <div hidden style={{ position: 'absolute', top: '15%', padding: '10px 20px', textAlign: 'center' }}>
                    <div>
                        <LazyLoadImage
                            style={{ maxWidth: '100%', marginTop: '25px' }}
                            alt="Invited"
                            src="/assets/imgs/servicenotavailable.png"
                            className="mb-2"
                        />
                        <Typography className="mb-2" style={{ color: '#424242', fontWeight: '600', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '2.0rem' }}>
                            We're Sorry!
                        </Typography>

                        <Typography className="mb-3" style={{ color: '#757575', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '1.5rem' }}>
                            mDhobi is unavailable in your location. Why don't you try a diffrent location?
                        </Typography>

                        <Button onClick={() => { history.push("/location-autocomplete"); }} variant="contained" style={{ backgroundColor: 'rgb(18, 207, 105)', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.3px', width: '200px', borderRadius: '10px' }} disableElevation>
                            edit location
                        </Button>
                    </div>
                </div>

                <Tabs />
        </React.Fragment>
    )
}

export default HomeMobile
