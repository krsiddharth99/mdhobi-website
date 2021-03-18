import { ArrowBackOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import { Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
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

function MReferrals() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#FCFCFC' }}>
                <AppBar elevation="0" className={classes.root} color="grey" position="static">
                    <Toolbar className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
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
                                Referrals
                        </Typography>
                        </div>

                        <div>
                            <Button
                                onClick={() => { }}
                            >
                                <Typography variant="h4" style={{ fontSize: '2.000rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                    T&amp;C
                                </Typography>
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

            <div style={{ backgroundColor: '#FCFCFC' }}>
                <div className="d-flex justify-content-center">
                    <LazyLoadImage
                        style={{ maxWidth: '100%', marginTop: '25px' }}
                        alt="Invited"
                        src="/assets/imgs/invited.png"
                    />
                </div>

                <Typography variant="h4" style={{ textAlign: 'center', fontSize: '19px', fontWeight: '500', fontFamily: 'Montserrat', margin: '10px' }}>
                    Invite your friends to get free mCash+
                </Typography>

                <Typography variant="h4" style={{ textAlign: 'center', fontSize: '16px', fontWeight: '500', fontFamily: 'Montserrat', margin: '5px 25px' }}>
                    Invite friends on mDhobi and after they join, both of get ₹25 mCash+ which is redeemable on everything.T&amp;C apply.
                </Typography>

                <Typography variant="h4" style={{ textAlign: 'center', fontSize: '16px', fontWeight: '500', fontFamily: 'Montserrat', margin: '20px 0px' }}>
                    Tap on invitation code to copy
                </Typography>

                <div className="d-flex justify-content-center">
                    <div style={{ backgroundColor: '#ffff002e', padding: '8px 30px', border: '2px dashed #8080806b', fontWeight: '600', fontFamily: 'Montserrat', fontSize: '18px' }}>
                        DFLH3FT8
                    </div>
                </div>

                <Typography variant="h4" style={{ textAlign: 'center', fontSize: '16px', fontWeight: '500', fontFamily: 'Montserrat', margin: '20px 0px' }}>
                    or invite using
                </Typography>

                <div className="d-flex justify-content-center">
                    <IconButton aria-label="delete" style={{ backgroundColor: 'rgb(24, 119, 242)', padding: '8px' }}>
                        <ShareOutlined style={{ color: '#FFF', fontSize: '22px' }} />
                    </IconButton>

                    <IconButton aria-label="delete" style={{ backgroundColor: 'rgb(24, 119, 242)', padding: '8px' }}>
                        <ShareOutlined style={{ color: '#FFF', fontSize: '22px' }} />
                    </IconButton>

                    <IconButton aria-label="delete" style={{ backgroundColor: 'rgb(24, 119, 242)', padding: '8px' }}>
                        <ShareOutlined style={{ color: '#FFF', fontSize: '22px' }} />
                    </IconButton>
                </div>
            </div>

        </React.Fragment>
    )
}

export default MReferrals
