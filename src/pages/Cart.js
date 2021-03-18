import React, { useEffect } from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'
import { Tooltip, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import { ArrowBackOutlined } from '@material-ui/icons'
import Tabs from '../components/Tabs';
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive'

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
}));

function Cart(props) {
    const classes = useStyles();
    const history = useHistory();

    const cartProducts = [
        {
            "product_image": "https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/133e9e1b02927bf0d8039b14ed05adcd.png",
            "product_name": "T-Shirt",
            "product_price": "₹20"
        },
        {
            "product_image": "https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/16079903a9feb3c5fc373ab2a65cd378.png",
            "product_name": "Shirt",
            "product_price": "₹25"
        },
        {
            "product_image": "https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/0a35ed19d8171493d7368749514c7def.png",
            "product_name": "Jeans",
            "product_price": "₹30"
        },
        {
            "product_image": "https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/08e120c7afaa26c7c21785f78072fe3a.png",
            "product_name": "Socks",
            "product_price": "₹20"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={768} >
                <AccountHeader show={props.show} />
                <div className="container wrapper">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <h5 className="mb-4">Wash &amp; Iron</h5>

                            {
                                cartProducts.map(product => {
                                    return (
                                        <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-3">
                                                    <img src={product["product_image"]} alt="T-Shirt" style={{ maxWidth: '65px' }} />
                                                </div>

                                                <div className="col-md-7 col-sm-5">
                                                    <div style={{ fontSize: '21px', fontWeight: '600' }}>{product["product_name"]}</div>
                                                    <p style={{ fontSize: '13px' }}>{product["product_price"]} / Per Item</p>
                                                </div>

                                                <div className="col-md-3 col-sm-4 d-flex align-items-center">
                                                    <div className="d-inline-flex justify-content-between" style={{ border: '1px solid #29C56B', padding: '5px 15px', width: '105px', color: 'rgb(41, 197, 107)', borderRadius: '8px' }}>
                                                        <div style={{ cursor: 'pointer' }}>
                                                            <span className="fas fa-minus"></span>
                                                        </div>
                                                        <div>2</div>
                                                        <div style={{ cursor: 'pointer' }}>
                                                            <span className="fas fa-plus"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <h5 className="mt-4 mb-4">Dry Cleaning</h5>

                            {
                                cartProducts.map(product => {
                                    return (
                                        <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-3">
                                                    <img src={product["product_image"]} alt="T-Shirt" style={{ maxWidth: '65px' }} />
                                                </div>

                                                <div className="col-md-7 col-sm-5">
                                                    <div style={{ fontSize: '21px', fontWeight: '600' }}>{product["product_name"]}</div>
                                                    <p style={{ fontSize: '13px' }}>{product["product_price"]} / Per Item</p>
                                                </div>

                                                <div className="col-md-3 col-sm-4 d-flex align-items-center">
                                                    <div className="d-inline-flex justify-content-between" style={{ border: '1px solid #29C56B', padding: '5px 15px', width: '105px', color: 'rgb(41, 197, 107)', borderRadius: '8px' }}>
                                                        <div style={{ cursor: 'pointer' }}>
                                                            <span className="fas fa-minus"></span>
                                                        </div>
                                                        <div>2</div>
                                                        <div style={{ cursor: 'pointer' }}>
                                                            <span className="fas fa-plus"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ position: 'sticky', top: '90px', backgroundColor: '#fcfcfc', zIndex: '90' }}>
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Wash</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Wash &amp; Iron</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Dry Cleaning</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <br />
                                    {
                                        cartProducts.map(product => {
                                            return (
                                                <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                                    <div className="row">
                                                        <div className="col-md-2 col-sm-3">
                                                            <img src={product["product_image"]} alt="T-Shirt" style={{ maxWidth: '65px' }} />
                                                        </div>

                                                        <div className="col-md-7 col-sm-5">
                                                            <div style={{ fontSize: '21px', fontWeight: '600' }}>{product["product_name"]}</div>
                                                            <p style={{ fontSize: '13px' }}>{product["product_price"]} / Per Item</p>
                                                        </div>

                                                        <div className="col-md-3 col-sm-4 d-flex align-items-center">
                                                            <div className="d-inline-flex justify-content-between" style={{ border: '1px solid #29C56B', padding: '5px 15px', width: '105px', color: 'rgb(41, 197, 107)' }}>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span className="fas fa-minus"></span>
                                                                </div>
                                                                <div>2</div>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span className="fas fa-plus"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <br />
                                    {
                                        cartProducts.map(product => {
                                            return (
                                                <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                                    <div className="row">
                                                        <div className="col-md-2 col-sm-3">
                                                            <img src={product["product_image"]} alt="T-Shirt" style={{ maxWidth: '65px' }} />
                                                        </div>

                                                        <div className="col-md-7 col-sm-5">
                                                            <div style={{ fontSize: '21px', fontWeight: '600' }}>{product["product_name"]}</div>
                                                            <p style={{ fontSize: '13px' }}>{product["product_price"]} / Per Item</p>
                                                        </div>

                                                        <div className="col-md-3 col-sm-4 d-flex align-items-center">
                                                            <div className="d-inline-flex justify-content-between" style={{ border: '1px solid #29C56B', padding: '5px 15px', width: '105px', color: 'rgb(41, 197, 107)' }}>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span className="fas fa-minus"></span>
                                                                </div>
                                                                <div>2</div>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span className="fas fa-plus"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <br />
                                    {
                                        cartProducts.map(product => {
                                            return (
                                                <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                                    <div className="row">
                                                        <div className="col-md-2 col-sm-3">
                                                            <img src={product["product_image"]} alt="T-Shirt" style={{ maxWidth: '65px' }} />
                                                        </div>

                                                        <div className="col-md-7 col-sm-5">
                                                            <div style={{ fontSize: '21px', fontWeight: '600' }}>{product["product_name"]}</div>
                                                            <p style={{ fontSize: '13px' }}>{product["product_price"]} / Per Item</p>
                                                        </div>

                                                        <div className="col-md-3 col-sm-4 d-flex align-items-center">
                                                            <div className="d-inline-flex justify-content-between" style={{ border: '1px solid #29C56B', padding: '5px 15px', width: '105px', color: 'rgb(41, 197, 107)' }}>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span className="fas fa-minus"></span>
                                                                </div>
                                                                <div>2</div>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span className="fas fa-plus"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> */}

                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="card shadow-sm p-3" style={{ position: 'sticky', top: '90px' }}>
                                <h4 style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '', }}>Payment Summary</h4>
                                <div className="px-3">
                                    <div className="mt-2 d-flex justify-content-between">
                                        <div style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '15px', }}>
                                            Sub Total (6 items)
                                    </div>

                                        <div style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '15px', }}>
                                            ₹25.00
                                    </div>
                                    </div>

                                    <div className="mt-3 d-flex justify-content-between">
                                        <div style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '15px', }}>
                                            Tax (GST 18%)
                                    </div>

                                        <div style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '15px', }}>
                                            + ₹9.00
                                    </div>
                                    </div><hr />

                                    <div className="d-flex justify-content-between">
                                        <div style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '16.5px', }}>
                                            Grand Total
                                    </div>

                                        <div style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '16.5px', }}>
                                            ₹25.00
                                    </div>
                                    </div>

                                    <div className="mt-3 d-flex justify-content-center">
                                        <Button
                                            fullWidth={true} onClick={() => {
                                            }} variant="contained" style={{ backgroundColor: '#29C56B', padding: '7px 16px', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'initial', fontSize: '16px', letterSpacing: '0.3px', borderRadius: '8px' }} disableElevation>
                                            Proceed to Checkout
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <Footer />
                <Tabs />
            </MediaQuery>
        </React.Fragment>
    )
}

export default Cart
