import { ArrowBackOutlined, GpsFixedOutlined, LocationOnOutlined, HistoryOutlined, CloseOutlined, LockOutlined, EditOutlined } from '@material-ui/icons'
import React from 'react'
import { FormControlLabel,Checkbox, TextField, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, CircularProgress, makeStyles } from '@material-ui/core';
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
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    myTextField:{
        borderBottomColor: '#f50057'
    }
}));


function MRegister() {
    const classes = useStyles();
    const history = useHistory();
    const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#FCFCFC' }}>
                <AppBar elevation="0" className={classes.root} color="grey" position="fixed">
                    <Toolbar>
                        <IconButton
                            onClick={() => {
                                history.push("/");
                            }}
                            className="mr-4"
                            edge="start"
                            color="inherit">
                            <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                        </IconButton>
                    </Toolbar>
                    <div style={{ backgroundColor: '', position: 'relative' }}>
                        <div className="d-flex align-items-center justify-content-start w-100" style={{ margin: '-8px 5px' }}>
                            <div className="d-flex flex-column justify-content-center ml-4 align-items-start">
                                <div className="mb-1 ml-1">
                                    <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.990rem' }}>
                                        SIGNUP
                                </Typography>
                                </div>
                                <div className="ml-1">
                                    <Typography variant="h5" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'initial', fontSize: '1.3rem' }}>
                                        Create an account with the new phone number
                                </Typography>
                                </div>
                            </div>
                            <div className="ml-3 mr-2" style={{ width: '100px' }}>
                            </div>

                            <img src="/assets/imgs/loginotpverify.png" width="85" style={{ position: 'absolute', top: '-30px', right: '10px' }} alt="" />
                        </div>
                    </div>
                </AppBar>
            </div>

            <div style={{ position: 'absolute', top: '18%',width:'100%',padding: '10px 28px' }} className="register-form">
                <form noValidate autoComplete="off">
                    <TextField value="+918209446178" className={classes.myTextField} color="secondary" id="standard-basic" label="Mobile Number" fullWidth={true} readonly />
                    <TextField 
                        color="secondary" 
                        error={true} 
                        helperText="Please enter valid email address!" 
                        label="Email Address" 
                        fullWidth={true}  />
                    <TextField 
                        color="secondary" 
                        // error={true} 
                        // helperText="Please enter full name!" 
                        label="Full Name"  
                        fullWidth={true}  />
                    <TextField 
                        color="secondary" 
                        // error={true} 
                        // helperText="Password minimum 6 chars required!" 
                        label="Password" 
                        fullWidth={true}  />
                    <FormControlLabel control={<Checkbox name="checkedC"  className="my-checkbox" onChange={handleChange} />} label="Have Referral Code?" />
                    {
                        checked?(
                            <TextField color="secondary" id="standard-basic" label="Referral Code" fullWidth={true}  />
                        ):(
                            <div>

                            </div>
                        )
                    }
                </form>

                <p className="mb-0"><span style={{ fontSize: '13px', color: 'grey', letterSpacing: '0.5px' }}>By creating an account, I accept the <a href="https://www.mdhobi.com/terms-and-conditions" target="_blank" style={{ color: '#2196F3', textDecoration: 'underline' }}>Terms and Conditions</a></span></p>
            </div>

            <div className="fixed-bottom d-xs-block d-sm-block d-md-none d-lg-none bottom-tab" style={{ backgroundColor: '#FFF', boxShadow: '0 1px 5px 0 #0000001a', padding: '10px 5px' }}>
                <div className="container-fluid">
                    <Button fullWidth={true} onClick={() => {
                    }} variant="contained" style={{ backgroundColor: '#29C56B', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '17px', letterSpacing: '0.3px', borderRadius: '8px' }} disableElevation>
                        {/* Continue */}
                        SIGN UP
                    </Button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default MRegister
