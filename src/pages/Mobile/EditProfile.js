import { ArrowBackOutlined, CameraAltOutlined, PersonOutlineOutlined, EmailOutlined, CallOutlined, LockOutlined, EditOutlined } from '@material-ui/icons'
import React from 'react'
import { ListItemSecondaryAction, TextField, Avatar, AppBar, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Sheet from 'react-modal-sheet';

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

function EditProfile() {
    const classes = useStyles();
    const [isOpen, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#FCFCFC' }}>
                <AppBar elevation="0" className={classes.root} color="grey" position="static">
                    <Toolbar>
                        <Link to="/my-account">
                            <IconButton
                                className="mr-4"
                                edge="start"
                                color="inherit">
                                <ArrowBackOutlined style={{ fontSize: '28px', color: 'rgb(0 0 0 / 54%)' }} />
                            </IconButton>
                        </Link>
                        <Typography variant="h4" style={{ color: 'rgb(0 0 0 / 54%)', fontWeight: '600', fontFamily: 'Montserrat', }}>
                            Edit Profile
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div style={{ marginTop: '25px' }}>
                <div className="d-flex justify-content-center">
                    <div style={{ position: 'relative' }}>
                        <Avatar src="/assets/imgs/user.png" className={classes.large} alt="" />
                        <div style={{ position: 'absolute', bottom: '0px', right: '-5px' }}>
                            <IconButton aria-label="delete" style={{ backgroundColor: 'rgb(24, 119, 242)', padding: '8px' }}>
                                <CameraAltOutlined style={{ color: '#FFF', fontSize: '22px' }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <div id="mobile-edit-profile-listtile" style={{ marginTop: '40px', padding: '0px 15px' }}>
                <ListItem button className="pt-3 pb-3 mb-3" onClick={() => setOpen(true)}>
                    <ListItemIcon>
                        <PersonOutlineOutlined style={{ fontSize: '26px', color: 'rgb(34, 177, 76)' }} />
                    </ListItemIcon>
                    <div className="d-flex flex-column">
                        <h3 style={{ fontWeight: '600' }}>Full Name</h3>
                        <h3 style={{ color: 'rgb(0 0 0 / 54%)', fontSize: '1.60rem' }}>Chetan Nager</h3>
                    </div>
                    <ListItemSecondaryAction>
                        <EditOutlined edge="end" style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                    </ListItemSecondaryAction>
                
                </ListItem>

                <ListItem button className="pt-3 pb-3 mb-3">
                    <ListItemIcon>
                        <EmailOutlined style={{ fontSize: '26px', color: 'rgb(34, 177, 76)' }} />
                    </ListItemIcon>
                    <div className="d-flex flex-column">
                        <h3 style={{ fontWeight: '600' }}>Email Address</h3>
                        <h3 style={{ color: 'rgb(0 0 0 / 54%)', fontSize: '1.60rem' }}>Chetannager64@gmail.com</h3>
                    </div>
                    <ListItemSecondaryAction>
                        <EditOutlined edge="end" style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                    </ListItemSecondaryAction>
                </ListItem>


                <ListItem button className="pt-3 pb-3 mb-3">
                    <ListItemIcon>
                        <CallOutlined style={{ fontSize: '26px', color: 'rgb(34, 177, 76)' }} />
                    </ListItemIcon>
                    <div className="d-flex flex-column">
                        <h3 style={{ fontWeight: '600' }}>Mobile Number</h3>
                        <h3 style={{ color: 'rgb(0 0 0 / 54%)', fontSize: '1.60rem' }}>+918209446178</h3>
                    </div>
                </ListItem>

                <ListItem button className="pt-3 pb-3 mb-3">
                    <ListItemIcon>
                        <LockOutlined style={{ fontSize: '26px', color: 'rgb(34, 177, 76)' }} />
                    </ListItemIcon>
                    <div className="d-flex flex-column">
                        <h3 style={{ fontWeight: '600' }}>Password</h3>
                        <h3 style={{ color: 'rgb(0 0 0 / 54%)', fontSize: '1.60rem' }}>******</h3>
                    </div>
                    <ListItemSecondaryAction>
                        <EditOutlined edge="end" style={{ fontSize: '26px', color: 'rgb(0 0 0 / 54%)' }} />
                    </ListItemSecondaryAction>
                </ListItem>

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Sheet.Container>
                        <Sheet.Content>
                            <TextField id="standard-basic" label="Mobile Number" />
                        </Sheet.Content>
                    </Sheet.Container>

                    <Sheet.Backdrop />
                </Sheet>
            </div>
        </React.Fragment>
    )
}

export default EditProfile
