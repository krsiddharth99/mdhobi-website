import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { CircularProgress, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

function MManageAddress() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#FCFCFC' }}>
                <AppBar elevation="0" className={classes.root} color="grey" position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => {
                                history.push("/my-account");
                            }}
                            className="mr-4"
                            edge="start"
                            color="inherit">
                            <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                        </IconButton>

                        <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                            Manage Addresses
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div>
                <div className="d-flex justify-content-center">
                    <LazyLoadImage
                        style={{ width: '75%', marginTop: '25px' }}
                        alt="Invited"
                        src="/assets/imgs/noaddresses.png"
                    />
                </div>
            </div>

        </React.Fragment>
    )
}

export default MManageAddress
