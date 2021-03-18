import React, { useState,useEffect } from 'react'
import { Add, Remove, ArrowBackOutlined, ShareOutlined } from '@material-ui/icons'
import { Box, Tabs, Tab, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import AccountHeader from '../components/AccountHeader'
import Footer from "../components/Footer";
import DeliveryImg from './../assets/imgs/fghjnkl,;..PNG'
import { Link, useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

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
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
            style={{ marginTop: '110px' }}
        >
            {value === index && (
                <div p={3} style={{ padding: '10px' }}>
                    {children}
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

function Services(props) {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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


    const [services, setState] = useState([
        {
            "service_id": 566,
            "service_name": "Wash",
            "service_image": "https://cdn.laundryheap.com/production/uploads/price_service/image/20/big_pxas3Ok.png",
            "service_description": "Everyday laundry, washed and tumble-dried. No ironing.",
            "isActive": true
        },
        {
            "service_id": 567,
            "service_name": "Wash & Iron",
            "service_image": "https://cdn.laundryheap.com/production/uploads/price_service/image/69/big_SoWfA52.png",
            "service_description": "Laundry that is ironed after tumble-drying and put on hangers.",
            "isActive": false
        },
        {
            "service_id": 568,
            "service_name": "Dry Cleaning",
            "service_image": "https://cdn.laundryheap.com/production/uploads/price_service/image/21/big_7GPulX9.png",
            "service_description": "Everyday laundry, washed and tumble-dried. No ironing.",
            "isActive": false
        },
        {
            "service_id": 569,
            "service_name": "Steam Iron",
            "service_image": "https://cdn.laundryheap.com/production/uploads/price_service/image/22/big_AqzmAtR.png",
            "service_description": "Everyday laundry, washed and tumble-dried. No ironing.",
            "isActive": false
        }
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={768} >
                <AccountHeader show={props.show} />
                <div className="container-fluid p-0" style={{ marginTop: '70px' }}>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                    <svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M121.768 50.5111C121.1 49.469 120.752 48.2243 120.81 47.0086L121.274 38.4116C121.536 33.8091 119.039 29.5251 114.916 27.441L107.28 23.5912C106.177 23.0412 105.277 22.1439 104.725 21.0438L100.864 13.431C98.7733 9.32074 94.4762 6.83136 89.8599 7.0919L81.2369 7.55504C80.0174 7.61293 78.7399 7.29453 77.7237 6.59982L70.5814 1.9105C66.6909 -0.636832 61.668 -0.636832 57.8065 1.9105L50.6641 6.59982C49.6189 7.26558 48.3704 7.61293 47.151 7.55504L38.5279 7.0919C33.9115 6.83139 29.6146 9.32074 27.5242 13.431L23.6626 21.0438C23.111 22.1438 22.2109 23.0412 21.1076 23.5912L13.4717 27.441C9.34898 29.5251 6.85205 33.8092 7.11339 38.4116L7.57793 47.0086C7.63601 48.2532 7.31662 49.4979 6.61981 50.5111L1.91629 57.6318C-0.638762 61.5106 -0.638762 66.5183 1.91629 70.3682L6.61981 77.4889C7.28759 78.531 7.63599 79.7757 7.57793 80.9914L7.11339 89.5885C6.85208 94.1909 9.34898 98.4749 13.4717 100.559L21.1076 104.409C22.2109 104.959 23.111 105.856 23.6626 106.956L27.5242 114.569C29.6146 118.679 33.9117 121.169 38.5279 120.908L47.151 120.445C48.3704 120.387 49.6479 120.705 50.6641 121.4L57.8065 126.09C59.7517 127.363 61.9873 128 64.1939 128C66.4005 128 68.6361 127.363 70.5814 126.09L77.7237 121.4C78.769 120.734 80.0175 120.387 81.2369 120.445L89.8599 120.908C94.4764 121.169 98.7733 118.679 100.864 114.569L104.725 106.956C105.277 105.856 106.177 104.959 107.28 104.409L114.916 100.559C119.039 98.4749 121.536 94.1908 121.274 89.5885L120.81 80.9914C120.752 79.7468 121.071 78.5021 121.768 77.4889L126.472 70.3682C129.027 66.4894 129.027 61.4817 126.472 57.6318L121.768 50.5111ZM121.623 67.184L116.919 74.3048C115.555 76.3599 114.887 78.8493 115.032 81.3098L115.497 89.9068C115.613 92.1936 114.364 94.3645 112.303 95.4065L104.667 99.2564C102.432 100.385 100.661 102.151 99.5283 104.38L95.6667 111.993C94.6215 114.048 92.4731 115.293 90.1504 115.177L81.5273 114.713C79.0594 114.569 76.5626 115.263 74.5011 116.595L67.3877 121.255C65.4424 122.529 62.9455 122.529 61.0002 121.255L53.8579 116.566C51.9708 115.321 49.706 114.655 47.4414 114.655C47.2382 114.655 47.035 114.655 46.8027 114.684L38.1796 115.147C35.8859 115.263 33.7084 114.019 32.6633 111.963L28.8017 104.351C27.6694 102.122 25.8984 100.356 23.6628 99.2272L16.0269 95.3773C13.9655 94.3353 12.717 92.1933 12.8332 89.8776L13.2978 81.2806C13.4429 78.8202 12.7461 76.3309 11.4106 74.2756L6.76523 67.1838C5.48773 65.2444 5.48773 62.755 6.76523 60.8156L11.4688 53.6948C12.8333 51.6397 13.5011 49.1503 13.3559 46.6898L12.8914 38.0928C12.7752 35.806 14.0237 33.6351 16.085 32.5931L23.7209 28.7432C25.9565 27.6143 27.7275 25.8486 28.8598 23.6198L32.7214 16.007C33.7666 13.9519 35.9151 12.7071 38.2378 12.823L46.8608 13.2861C49.3288 13.4309 51.8255 12.7362 53.8871 11.4047L61.0004 6.74441C62.9457 5.47077 65.4426 5.47077 67.3879 6.74441L74.5302 11.4337C76.5916 12.7942 79.0885 13.46 81.5565 13.3152L90.1795 12.852C92.4732 12.7362 94.6507 13.9809 95.6959 16.0361L99.5574 23.6488C100.69 25.8777 102.461 27.6434 104.696 28.7723L112.332 32.6222C114.394 33.6642 115.642 35.8062 115.526 38.1219L115.061 46.7189C114.916 49.1794 115.613 51.6686 116.949 53.7239L121.652 60.8446C122.901 62.7551 122.9 65.2445 121.623 67.1838L121.623 67.184Z" fill="#8C939C" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M95.6668 111.993C94.6215 114.048 92.4731 115.293 90.1504 115.177L81.5273 114.714C79.0594 114.569 76.5626 115.264 74.5011 116.595L67.3877 121.255C65.4425 122.529 62.9455 122.529 61.0003 121.255L53.8579 116.566C51.9708 115.321 49.7061 114.656 47.4415 114.656C47.2382 114.656 47.035 114.655 46.8027 114.684L38.1797 115.148C35.8859 115.263 33.7085 114.019 32.6633 111.964L28.8017 104.351C27.6694 102.122 25.8984 100.356 23.6628 99.2274L16.0269 95.3775C13.9656 94.3354 12.717 92.1935 12.8333 89.8778L13.2978 81.2807C13.443 78.8203 12.7462 76.331 11.4107 74.2757L6.76525 67.1839C5.48776 65.2445 5.48776 62.7551 6.76525 60.8157L11.4688 53.695C12.8334 51.6398 13.5012 49.1504 13.3559 46.6899C13.3559 46.6899 23.1848 76.7751 37.3334 88.0001C50.6217 98.5427 95.6668 111.993 95.6668 111.993Z" fill="#DCE1E5" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.9468 76.2711L90.7414 40.4765C92.8242 38.3937 96.2011 38.3937 98.2839 40.4765C100.367 42.5593 100.367 45.9362 98.2839 48.019L58.6859 87.617C56.5906 89.7123 53.1891 89.6978 51.1116 87.5849L30.5819 66.704C28.5168 64.6036 28.5455 61.2269 30.6459 59.1618C32.7462 57.0967 36.123 57.1254 38.1881 59.2258L54.9468 76.2711Z" fill="#29C56B" />
                                    </svg>
                                </div>
                                <div className="col-md-10">
                                    <h5 style={{ color: '#29C56B', fontWeight: '600' }}>NO HIDDEN FEES</h5>
                                    <h2>Explore Our Services</h2>
                                    <p style={{ color: '#8C939C', fontSize: '21px' }}>Free pickup and delivery <span>·</span>  ₹50 minimum order · ₹0 cancellation / no-show fee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div hidden className="text-center mb-5">
                        <h2>Explore our Services</h2>
                        <p>Professional one stop solutions has been here</p>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            {
                                services.map(service => {
                                    return (
                                        <div className="card shadow-sm p-3 mb-3" style={service.isActive ? { cursor: 'pointer', border: '1px solid #1fb6ff' } : { cursor: 'pointer' }} onClick={() => {
                                            services.forEach(service => {
                                                services[services.indexOf(service)].isActive = false
                                            })
                                            setState(prevState => prevState.map(
                                                el => services.indexOf(el) === services.indexOf(service) ? { ...el, isActive: true } : el
                                            )
                                            )
                                        }}>
                                            <div className="row">
                                                <div className="col-md-3 d-flex align-items-center">
                                                    <LazyLoadImage
                                                        src={service.service_image}
                                                        width="50px"
                                                        alt="Service-Image"
                                                    />
                                                </div>
                                                <div className="col-md-9">
                                                    <h5 style={{ fontSize: '18px' }}>{service.service_name}</h5>
                                                    <p style={{ color: '#8C939C', fontSize: '14px' }}>{service.service_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="col-md-6">
                            <h3>Wash &amp; Iron</h3>
                            <h6>Laundry that is ironed after tumble-drying and put on hangers.</h6>
                            <p>
                                This is for individual cleaning. Items are washed, ironed & delivered on hangers for you to wear immediately. Folding can be requested additionally.
                        </p>
                            <p>
                                When making an order, put all items for Wash & Iron in a separate bag. No need to list each item as we will count everything you give us.
                        </p>

                            <hr />

                            <h5>Mens</h5>
                            {
                                cartProducts.map(product => {
                                    return (
                                        <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-3">
                                                    <LazyLoadImage
                                                        src={product["product_image"]}
                                                        alt="T-Shirt"
                                                        style={{ maxWidth: '65px' }}
                                                    />
                                                </div>

                                                <div className="col-md-7 col-sm-5">
                                                    <div style={{ fontSize: '21px', fontWeight: '600' }}>{product["product_name"]}</div>
                                                    <p style={{ fontSize: '13px' }}>{product["product_price"]} / Per Item</p>
                                                </div>

                                                <div className="col-md-3 col-sm-4 d-flex align-items-center">
                                                    {/* <div className="d-inline-flex justify-content-between" style={{border:'1px solid #29C56B',padding:'5px 15px',width:'105px',color:'rgb(41, 197, 107)'}}>
                                                    <div style={{cursor:'pointer'}}>
                                                        <span className="fas fa-minus"></span>
                                                    </div>
                                                    <div>2</div>
                                                    <div style={{cursor:'pointer'}}>
                                                        <span className="fas fa-plus"></span>
                                                    </div>
                                                </div> */}
                                                    <div className="d-inline-flex justify-content-center" style={{ border: '1px solid #29C56B', padding: '5px 15px', width: '105px', color: 'rgb(41, 197, 107)', cursor: 'pointer', borderRadius: '8px' }}>
                                                        ADD
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <h5 className="mt-5">Women</h5>
                            {
                                cartProducts.map(product => {
                                    return (
                                        <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-3">
                                                    <LazyLoadImage
                                                        src={product["product_image"]}
                                                        alt="T-Shirt"
                                                        style={{ maxWidth: '65px' }}
                                                    />
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


                            <h5 className="mt-5">Kids</h5>
                            {
                                cartProducts.map(product => {
                                    return (
                                        <div className="p-2 mb-3" style={{ boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)' }}>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-3">
                                                    <LazyLoadImage
                                                        src={product["product_image"]}
                                                        alt="T-Shirt"
                                                        style={{ maxWidth: '65px' }}
                                                    />
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

                            <div className="card p-3 mt-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <LazyLoadImage
                                                src="https://app.laundryheap.com/images/help-circle-color.svg"
                                                alt="Help-Circle"
                                                style={{ maxWidth: '65px' }}
                                            />
                                        </div>

                                        <div className="col-md-10">
                                            <h6 style={{ fontWeight: '600' }}>CAN’T FIND YOUR ITEM?</h6>
                                            <p>Our team will happily help you.</p>
                                            <div className="btn btn-outline-info btn-block">
                                                Contact Us
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 p-0">
                            <div className="card p-3" style={{ position: 'sticky', top: '90px', boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)' }}>
                            <h5 style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '', }}>Payment Summary</h5>
                                <div className="px-3">
                                    <div className="mt-2 d-flex justify-content-between">
                                        <div style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '15px', }}>
                                            Sub Total
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
                                                history.push("/cart");
                                            }} variant="contained" style={{ backgroundColor: '#29C56B', padding: '4px 16px', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'initial', fontSize: '15px', letterSpacing: '0.3px', borderRadius: '8px' }} disableElevation>
                                            View Cart
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-4 mt-5">
                        <h2>Delivery Speed</h2>
                        <div>
                            <LazyLoadImage
                                src={DeliveryImg} alt="Delivery Truck" width="45%"
                            />

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="shadow-sm" style={{ backgroundColor: '#081840', padding: '20px 30px', textAlign: 'center', borderRadius: '10px' }}>
                                <h4 className="text-light">Regular (48hrs) FREE</h4>
                                <h6 style={{ color: '#ffffffbd' }}>Minimum quantity of 20pounds</h6>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-start">
                            <div className="shadow-sm" style={{ backgroundColor: '#2ABD55', padding: '20px 30px', textAlign: 'center', borderRadius: '10px' }}>
                                <h4 className="text-light">Express (24hrs) ₹50</h4>
                                <h6 style={{ color: '#ffffffbd' }}>No need minimum quantity</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <Footer />
            </MediaQuery>

            <MediaQuery maxDeviceWidth={767} >
                <div style={{ backgroundColor: '#FCFCFC' }}>
                    <AppBar elevation="0" className={classes.root} color="grey" position="fixed">
                        <Toolbar>
                            <Link to="/">
                                <IconButton
                                    className="mr-4"
                                    edge="start"
                                    color="inherit">
                                    <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                                </IconButton>
                            </Link>
                            <Typography variant="h4" style={{ fontSize: '2.000rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                Select Services
                        </Typography>
                        </Toolbar>
                        <Tabs

                            value={value}
                            onChange={handleChange}
                            indicatorColor="green"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Wash &amp; Fold" {...a11yProps(0)} />
                            <Tab label="Wash &amp; Iron" {...a11yProps(1)} />
                            <Tab label="Dry Cleaning" {...a11yProps(2)} />
                            <Tab label="Steam Iron" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <div className={classes.myTab}>

                        <TabPanel value={value} index={0}>
                            <Typography variant="h5" style={{ fontSize: '1.8rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                Male
                            </Typography>

                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="https://karelabel.com/LaundrokartFiles/GarmentIcons/1.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            T-Shirt
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div hidden variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/7fc86c2f42f34a6a2e7b13f17a97ded7.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            Shirt
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/cfd14e1dc5209c7374c8be25de837550.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            Socks
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/ea57e776ca8e7b62c5665cb3dacc5f78.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            Jeans
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Typography variant="h5" style={{ fontSize: '1.8rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                Female
                            </Typography>

                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/824e56da688341ddf0102486f342b412.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            T-Shirt
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/7fc86c2f42f34a6a2e7b13f17a97ded7.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            Shirt
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/cfd14e1dc5209c7374c8be25de837550.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            Socks
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-5">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 px-0">
                                        <LazyLoadImage
                                            alt="mDhobi-App"
                                            src="http://d6bbdmxvuemiu.cloudfront.net/globalAssets/productImgs/ea57e776ca8e7b62c5665cb3dacc5f78.png"
                                            width="100%"
                                        />
                                    </div>

                                    <div className="col-6 pr-0">
                                        <Typography variant="h5" style={{ fontSize: '1.9rem', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                            Jeans
                                        </Typography>

                                        <Typography variant="p" style={{ fontSize: '1.3rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                            ₹10 / Per Item
                                        </Typography>
                                    </div>

                                    <div className="col-4 px-0">
                                        <Button hidden variant="outlined" style={{ width: '100px', color: 'rgb(18, 207, 105)', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            Add
                                        </Button>

                                        <div variant="outlined" style={{ width: '100px', padding: '3px 5px', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'uppercase', border: '1px solid rgb(18, 207, 105)', borderRadius: '8px' }}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Remove style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    3
                                                </div>
                                                <div>
                                                    <IconButton size="small" aria-label="upload picture" component="span">
                                                        <Add style={{ fontSize: '20px', color: 'rgb(18, 207, 105)' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                            </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                            </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                            </TabPanel>
                    </div>
                </div>
            </MediaQuery>
        </React.Fragment>
    )
}

export default Services
