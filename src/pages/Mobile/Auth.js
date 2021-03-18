import { ArrowBackOutlined, GpsFixedOutlined, LocationOnOutlined, HistoryOutlined, CloseOutlined, LockOutlined, EditOutlined } from '@material-ui/icons'
import { React, useState } from 'react'
import { InputAdornment, TextField, Button, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, CircularProgress, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import clsx from 'clsx';

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
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
  },
}));

function Auth() {
  const classes = useStyles();
  const history = useHistory();
  const [validate, setValidate] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");



  return (
    <>
      <div>
        <AppBar elevation="0" className={classes.root} color="grey" position="static">
          <Toolbar>
            <IconButton
              onClick={() => {
                history.push("/welcome");
              }}
              className="mr-4"
              edge="start"
              color="inherit">
              <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
            </IconButton>
          </Toolbar>
          <div style={{ backgroundColor: '', position: 'relative' }}>
            <div className="d-flex align-items-center justify-content-start w-100" style={{ margin: '-8px 5px' }}>
              <div className="d-flex flex-column justify-content-center ml-3 align-items-start">
                <div className="mb-1 ml-1">
                  <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.990rem' }}>
                    LOGIN
                  </Typography>
                </div>
                <div className="ml-1">
                  <Typography variant="h5" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'capitalize', fontSize: '1.3rem' }}>
                    Login/Create Account quickly to manage orders
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </AppBar>
      </div>


      <div className="container mt-5">
        <form className="auth-form">
          <div>
            <TextField
              type="number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
              className={classes.myTextField} color="secondary" id="standard-basic" label="Mobile Number" fullWidth={true}
              inputProps={{maxLength :10}}
              InputProps={{
                startAdornment: <InputAdornment position="start" style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '2rem' }}>+91</InputAdornment>,
              }}
            />
          </div>

          <div className="mt-5 d-flex justify-content-center">
            <Button
              fullWidth={true} onClick={() => {
              }} variant="contained" style={mobileNumber.length != 10 ? { backgroundColor: '#808080a8',padding: '7px 16px', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.3px', borderRadius: '8px' } : { backgroundColor: '#29C56B',padding: '7px 16px', color: '#FFF', fontWeight: '500', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.3px', borderRadius: '8px' }} disableElevation>
              {
                mobileNumber.length != 10 ? "Enter Valid Number" : "Continue"
              }
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
