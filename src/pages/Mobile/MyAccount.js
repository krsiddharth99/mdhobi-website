import { MoreVertOutlined, TableChartOutlined, AccountBalanceWalletOutlined, PinDropOutlined, CardGiftcardOutlined, SettingsPowerOutlined } from '@material-ui/icons'
import React from 'react'
import Tabs from '../../components/Tabs'
import { Menu, MenuItem, Tooltip, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link,Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
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


function MyAccount() {
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
            <MediaQuery minDeviceWidth={768} >
                return <Redirect to="/account" />
            </MediaQuery>

            <div style={{ backgroundColor: '#FCFCFC' }} className="transition-item">
                <AppBar elevation="0" className={classes.root} position="static">
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
                        history.push("/my-orders");
                    }}>
                        <ListItemIcon>
                            <TableChartOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                        </ListItemIcon>
                        <h3 style={{ color: 'rgb(0 0 0 / 54%)' }}>My Orders</h3>
                    </ListItem>

                    <ListItem button className="pt-4 pb-4" onClick={() => {
                        history.push("/mCash+");
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
                        history.push("/referrals");
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
                className="mobile-account-dialog"
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
                <MenuItem onClick={()=>{
                    handleMenuClose();
                    window.location.href="https://mdhobi.com/about-us";
                }} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>About Us</MenuItem>
                <MenuItem onClick={handleMenuClose} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>Send Feedback</MenuItem>
                <MenuItem onClick={handleMenuClose} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>Terms &amp; Conditions</MenuItem>
                <MenuItem onClick={handleMenuClose} style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '16px' }}>Contact Us</MenuItem>
            </Menu>
            <Tabs />
        </React.Fragment>
    )
}

export default MyAccount
