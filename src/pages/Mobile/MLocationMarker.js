import { ArrowBackOutlined, GpsFixedOutlined, LocationOnOutlined, HistoryOutlined, CloseOutlined, CallMadeOutlined, EditOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { Divider, Button, LinearProgress, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText, CircularProgress, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

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
    listTitle: {
        fontWeight: '600',
        fontFamily: 'Montserrat',
        fontSize: '16px'
    },
    listSubHeader: {
        fontWeight: '500',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        color: 'rgb(0 0 0 / 54%)'
    }
}));


function MLocationMarker() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
            <div style={{ position: 'relative', height: '75vh' }}>
                <div style={{ position: 'absolute', left: '15px' }}>
                    <IconButton
                        onClick={() => {
                            history.push("/location-autocomplete");
                        }}
                        className="mr-4"
                        edge="start"
                        color="inherit">
                        <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                    </IconButton>
                </div>
            </div>

            <div style={{ height: '25vh', backgroundColor: 'white', position: 'relative',paddingTop: '1.8rem' }} className="py-4 px-4">
                <div style={{ position: 'absolute', top: '1px', left: '0px', right: '0px' }}>
                    <LinearProgress color="primary" style={{ height: '1px' }} />
                </div>

                <div className="row d-flex align-items-center">
                    <div class="col-8 pr-0">
                        <div className="d-flex flex-column">
                            <div>
                                <Typography variant="h4" style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '1.990rem' }}>
                                    Bhopal
                                </Typography>
                            </div>

                            <div>
                                <Typography variant="h5" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat',fontSize: '1.4rem' }}>
                                    Bhopal, Madhya Pradesh, India, 324005
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <Button variant="outlined" className="mr-3" style={{ color: 'rgb(18, 207, 105)', backgroundColor: '#8080801a', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '13px', letterSpacing: '0.3px', textTransform: 'capitalize', borderRadius: '10px' }}>
                            Change
                        </Button>
                    </div>
                </div>

                <div className="mt-4 mb-3">
                    <Button onClick={() => { }} variant="contained" style={{ backgroundColor: 'rgb(18, 207, 105)', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.3px', width: '100%', borderRadius: '10px' }} disableElevation>
                        confirm location
                    </Button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default MLocationMarker
