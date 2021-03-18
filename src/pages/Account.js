import React from 'react'
import AccountHeader from '../components/AccountHeader'
import { Link, NavLink, Route, useHistory,Redirect } from 'react-router-dom'
import Footer from '../components/Footer'
import Orders from './Orders'
import Addresses from './Addresses'
import Settings from './Settings'
import Tabs from '../components/Tabs'
import mcash from './mcash';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive'
import { Menu, MenuItem, Tooltip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, Avatar, Fab, theme, Card, CardContent, makeStyles } from '@material-ui/core';
import { AccountBalanceWalletOutlined, RedeemOutlined, PinDropOutlined, TableChartOutlined, SettingsPowerOutlined, ShoppingBasketOutlined, ArrowForwardIosOutlined, MoreVertOutlined, CardGiftcardOutlined } from '@material-ui/icons'
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    appBar: {
        flexGrow: 1,
        backgroundColor: '#FCFCFC'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
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

function Account(props) {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <MediaQuery maxDeviceWidth={767} >
                return <Redirect to="/my-account" />
            </MediaQuery>
            <MediaQuery minDeviceWidth={768} >
                <AccountHeader show={props.show} />

                <div className="container wrapper">
                    <div className="row">
                        <div className="col-md-3" style={{ paddingRight: '0px' }}>
                            <div className="_3E8aIl mb-0">
                                <div class="nUdcwy row" style={{ paddingLeft: '25px' }}>
                                    <img class="_3X2gOt" height="70px" width="70px" src="/imgs/user.png" />
                                    <div class="DxGiT2">
                                        <div class="_1ruvv2">Chetan Nager</div>
                                        <div class="_2QZ3Er">+918209446178</div>
                                        <div><Link>Edit Profile</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="_3E8aIl" style={{ height: '300px', padding: '10px' }}>
                                <div className="pl-2">
                                    <ul className="account-menu">
                                        <li><NavLink to="/account/orders"><TableChartOutlined className="mr-2" /> My Orders</NavLink></li>
                                        <li><NavLink to="/account/mCash+"><AccountBalanceWalletOutlined className="mr-2" /> mCash+</NavLink></li>
                                        <li><NavLink to="/account/addresses"><PinDropOutlined className="mr-2" /> Manage Address</NavLink></li>
                                        <li><NavLink to="/account/referrals"><RedeemOutlined className="mr-2" /> Referrals</NavLink></li>
                                        <li><NavLink to="/account/refer-a-friend"><SettingsPowerOutlined className="mr-2" /> Logout</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <MediaQuery minDeviceWidth={768} >
                                <Route path="/account/orders" component={Orders} />
                                <Route path="/account/addresses" component={Addresses} />
                                <Route path="/account/mCash+" component={mcash} />
                                <Route path="/account/referrals" component={Settings} />
                                <Route path="/account/settings" component={Settings} />
                            </MediaQuery>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <Footer />
                <Tabs />
            </MediaQuery>

            <MediaQuery maxDeviceWidth={767}>
                <div style={{ backgroundColor: '#FCFCFC' }} className="transition-item">
                    <AppBar elevation="0" className={classes.appBar} position="static">
                        <Toolbar className="d-flex justify-content-between">
                            <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                Account
                            </Typography>

                            <Tooltip title="More Menu">
                                <IconButton
                                    color="inherit"
                                    aria-controls="more-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVertOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                                </IconButton>
                            </Tooltip>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <div className="p-4">
                            <div className="d-flex align-items-center">
                                <div className="mr-4">
                                    <Avatar src="/assets/imgs/user.png" className={classes.large} alt="" />
                                </div>

                                <div>
                                    <Typography variant="h4" style={{ fontSize: '24px', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                        Chetan Nager
                    </Typography>
                                    <h4 className="mb-0" style={{ fontSize: '18px', fontFamily: 'Montserrat', color: 'rgb(0 0 0 / 54%)' }}>+918209446178</h4>
                                    <Link to="/edit-profile">
                                        <Typography variant="p" style={{ marginLeft: '2px', fontSize: '16px', color: '#1E88E5', fontFamily: 'Montserrat', }}>
                                            Edit Profile
                    </Typography>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ListItem button className="pt-4 pb-4" onClick={() => {
                            history.push("/account/orders");
                        }}>
                            <ListItemIcon>
                                <TableChartOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                            </ListItemIcon>
                            <h3 style={{ color: 'rgb(0 0 0 / 54%)' }}>My Orders</h3>
                        </ListItem>

                        <ListItem button className="pt-4 pb-4" onClick={() => {
                            history.push("/account/orders");
                        }}>
                            <ListItemIcon>
                                <AccountBalanceWalletOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                            </ListItemIcon>
                            <h3 style={{ color: 'rgb(0 0 0 / 54%)' }}>mCash+</h3>
                        </ListItem>

                        <ListItem button className="pt-4 pb-4" onClick={() => {
                            history.push("/manage-address");
                        }}>
                            <ListItemIcon>
                                <PinDropOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                            </ListItemIcon>
                            <h3 style={{ color: 'rgb(0 0 0 / 54%)' }}>Manage Address</h3>
                        </ListItem>

                        <ListItem button className="pt-4 pb-4" onClick={() => {
                            history.push("/account/referrals");
                        }}>
                            <ListItemIcon>
                                <CardGiftcardOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                            </ListItemIcon>
                            <h3 style={{ color: 'rgb(0 0 0 / 54%)' }}>Referrals</h3>
                        </ListItem>

                        <ListItem button className="pt-4 pb-4" onClick={handleClickOpen}>
                            <ListItemIcon>
                                <SettingsPowerOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                            </ListItemIcon>
                            <h3 style={{ color: 'rgb(0 0 0 / 54%)' }}>Logout</h3>
                        </ListItem>

                    </div>
                </div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '26px' }}>{"Attention"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure want to logout of this website?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="secondary">
                            Logout
                        </Button>
                    </DialogActions>
                </Dialog>
                <Menu
                    id="more-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={() => {
                        handleMenuClose();
                        window.location.href = "https://mdhobi.com/about-us";
                    }} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>About Us</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>Send Feedback</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>Terms &amp; Conditions</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>Contact Us</MenuItem>
                </Menu>
                <Tabs />
            </MediaQuery>
        </React.Fragment>
    )
}

export default Account
