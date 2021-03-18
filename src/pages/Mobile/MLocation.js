import { ArrowBackOutlined, GpsFixedOutlined, LocationOnOutlined, HistoryOutlined, CloseOutlined, CallMadeOutlined, EditOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { Divider, Button, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText, CircularProgress, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
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

function MLocation() {
    const classes = useStyles();
    const history = useHistory();
    const [isLocationSearching, setIsLocationSearching] = useState(false);
    const [locations, setLocations] = useState([]);
    const [recentLocations, setRecentLocations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

    }, [])

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        console.log("Lat: "+latitude+", Long: "+longitude);
      }
    
      function error() {
        console.log('Unable to retrieve your location');
      }
    
    function getCurrentLocation(){
        if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    function getSearchLocation(term) {
        console.log(term);
        if (term != "" &&
            term != " " &&
            term.length >= 1) {
            setIsLocationSearching(true);
            axios.get("https://customer.mdhobi.com/v1/locations/search/" + term, {
                "Content-Type": "application/json"
            }).then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    setLocations(response.data.data);
                    setIsLocationSearching(false);
                    console.log(locations);
                }
            }).catch(function (error) {
                console.log(error);
                setIsLocationSearching(false);
            });
        } else {
            setIsLocationSearching(false);
            setLocations([]);
        }

    }


    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#FCFCFC' }}>
                <AppBar elevation="0" className={classes.root} position="fixed">
                    <Toolbar>
                        <IconButton
                            onClick={() => {
                                history.push("/home");
                            }}
                            className="mr-4"
                            edge="start"
                            color="inherit">
                            <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                        </IconButton>
                        <div className="d-flex flex-column justify-content-start w-100">
                            <div>
                                <Typography variant="h6" style={{ color: 'green', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                    SET SERVICE LOCATION
                                </Typography>
                            </div>
                            <div className="search-location-mobile">
                                <div style={{ position: 'relative' }}>
                                    <input type="search" value={searchTerm} placeholder="Search for area, street name..." onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                        getSearchLocation(event.target.value);
                                    }} autoFocus />
                                    <div style={{ position: 'absolute', right: '10px', top: '0px' }}>
                                        <div style={{ position: 'relative' }}>
                                            {
                                                searchTerm.length != 0 ? (
                                                    <CloseOutlined style={{ fontSize: '18px', color: 'rgb(0 0 0 / 54%)' }} onClick={() => {
                                                        setSearchTerm("");
                                                        setLocations([]);
                                                        setIsLocationSearching(false);
                                                    }} />
                                                ) : (
                                                        <div></div>
                                                    )
                                            }
                                            {
                                                isLocationSearching ? (
                                                    <div style={{ position: 'absolute', left: '-6px', top: '-3px', }}>
                                                        <CircularProgress thickness={2.5} style={{ width: '30px', height: '30px', color: 'green' }} />
                                                    </div>
                                                ) : (
                                                        <div></div>
                                                    )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                    <div style={{ backgroundColor: 'white', }}>
                        <Button
                            onClick={() => {
                                getCurrentLocation();
                             }}
                            style={{ width: '100%', borderRadius: '0px' }}
                        >
                            <div className="d-flex align-items-center justify-content-start w-100" style={{ padding: '13px 10px' }}>
                                <GpsFixedOutlined style={{ fontSize: '28px', color: '#fd7e14' }} />
                                <div className="d-flex flex-column justify-content-center ml-4 align-items-start">
                                    <div className="mb-1">
                                        <Typography variant="h4" style={{ color: '#fd7e14', fontWeight: '600', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.990rem' }}>
                                            Current Location
                                        </Typography>
                                    </div>
                                    <div className="ml-1">
                                        <Typography variant="h5" style={{ color: '#fd7e14', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.3rem' }}>
                                            Using GPS
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className="p-1 w-100" style={{ backgroundColor: '#80808036' }}>
                    </div>
                </AppBar>
            </div>


            <div className="py-3" id="mobile-location-search-list" style={{ marginTop: '145px' }}>
                <div>
                    {
                        searchTerm.length != 0 ? (
                            locations.map(location => {
                                return (
                                    <React.Fragment>
                                        <ListItem button className="pt-4 pb-4" style={{ listStyleType: 'none' }} key={locations.indexOf(location)} onClick={() => {
                                            history.push("/location-marker");
                                        }}>
                                            <ListItemIcon>
                                                <LocationOnOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                                            </ListItemIcon>
                                            <div className="d-flex flex-column">
                                                <div>
                                                    <h4 className="location-title">{location.structured_formatting.main_text}</h4>
                                                </div>
                                                <div>
                                                    <h4 className="location-subtitle">{location.description}</h4>
                                                </div>
                                            </div>
                                            <ListItemSecondaryAction>
                                                <CallMadeOutlined edge="end" style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider variant="inset" />
                                    </React.Fragment>
                                )
                            })
                        ) : (
                                <div>
                                    <Typography className="px-3 mb-4" variant="h5" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', }}>
                                        Recent Search
                                    </Typography>

                                    <ListItem button className="pt-2 pb-4">
                                        <ListItemIcon>
                                            <HistoryOutlined style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                                        </ListItemIcon>
                                        <div className="d-flex flex-column">
                                            <div>
                                                <h4 className="location-title">Talwandi Sabo</h4>
                                            </div>
                                            <div>
                                                <h4 className="location-subtitle">Talwandi, Sabo, Punjab, India</h4>
                                            </div>
                                        </div>
                                        <ListItemSecondaryAction>
                                            <CallMadeOutlined edge="end" style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider variant="inset" />
                                </div>
                            )
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default MLocation
