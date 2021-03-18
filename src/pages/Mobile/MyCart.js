import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import Tabs from '../../components/Tabs'
import { Tooltip, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link,useHistory,Redirect } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive';

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

function MyCart() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={768} >
                return <Redirect to="/" />
            </MediaQuery>
           <div style={{ backgroundColor: '#FCFCFC' }} className="transition-item">
                    <AppBar elevation="0" className={classes.root} color="grey" position="static">
                        <Toolbar>
                            <Tooltip title="Back">
                                <IconButton
                                    onClick={() => {
                                        history.push("/home");
                                    }}
                                    className="mr-4   "
                                    edge="start"
                                    color="inherit">
                                    <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                                </IconButton>
                            </Tooltip>
                            <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                Basket
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>

                <div style={{ position: 'absolute', top: '12%',textAlign:'center' }} className="w-100 px-4">
                    <LazyLoadImage
                        style={{ maxWidth: '75%', marginTop: '25px' }}
                        alt="Invited"
                        src="/assets/imgs/7eafcd53092491.png"
                        className="mb-2"
                    />
                    <Typography style={{ color: '#424242', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '2.0rem' }}>
                        Your basket is Empty!
                        </Typography>

                    <Typography className="mb-3" style={{ color: '#757575', fontWeight: '500', fontFamily: 'Montserrat', fontSize: '1.5rem' }}>
                        Add something from the menu
                        </Typography>

                    <Button onClick={() => { history.push("/"); }} variant="contained" style={{ backgroundColor: 'rgb(18, 207, 105)', color: '#FFF', fontWeight: '600', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.3px', width: '200px', borderRadius: '10px' }} disableElevation>
                        explore services
                        </Button>
                </div>
        </React.Fragment>
    )
}

export default MyCart
