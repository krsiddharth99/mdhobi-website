import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { CircularProgress, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
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
}));

function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={768} >
            <div className="container">
                <div className="mb-20 pt-10 pb-10 pl-20">
                    <p className="mb-20" style={{ fontSize: '24px', fontWeight: 'bold', color: '#12CF69' }}>My Orders</p>
                </div>
            </div>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={767} >
            <div style={{ backgroundColor: '#FCFCFC' }}>
                    <AppBar elevation="0" className={classes.root} color="grey" position="static">
                        <Toolbar>
                            <Link to="/account">
                                <IconButton
                                    className="mr-4"
                                    edge="start"
                                    color="inherit">
                                    <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                                </IconButton>
                            </Link>
                            <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                My Orders
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>

                <div>
                    <CircularProgress />
                </div>
                </MediaQuery>
        </React.Fragment>
    )
}

export default Orders
