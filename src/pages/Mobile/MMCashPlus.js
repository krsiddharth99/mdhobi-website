import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Button, CircularProgress, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'

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

function MMCashPlus() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="transition-item">
                <div style={{ backgroundColor: '#FCFCFC' }}>
                    <AppBar elevation="0" className={classes.root} color="grey" position="static" >
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
                                    mCash+
                            </Typography>
                            </div>
                            <div>
                                <Button
                                    onClick={() => { }}
                                >
                                    <Typography variant="h4" style={{ fontSize: '1.9rem', color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                                        T&amp;C
                                </Typography>
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>

                <div>
                    <CircularProgress />
                </div>

            </div>

        </React.Fragment>
    )
}

export default MMCashPlus
