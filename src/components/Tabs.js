import { IconButton } from '@material-ui/core'
import { PersonOutlineOutlined, HomeOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { NavLink,useHistory } from 'react-router-dom'

function Tabs() {
    const history= useHistory();
    return (
        <div className="fixed-bottom d-xs-block d-sm-block d-md-none d-lg-none bottom-tab" style={{ backgroundColor: '#FFF', boxShadow: '0 1px 5px 0 #0000001a', padding: '0px 8px' }}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="text-center">
                        <NavLink to="/home" className="tab-icon" exact>
                            <IconButton
                                color="inherit"
                            >
                                <HomeOutlined style={{ fontSize: 30 }} />
                            </IconButton>
                        </NavLink>
                    </div>

                    <div className="text-center">
                        <NavLink to="/my-cart">
                            <IconButton
                                color="inherit"
                            >
                                <ShoppingCartOutlined style={{ fontSize: 30 }} />
                            </IconButton>
                        </NavLink>
                    </div>

                    <div className="text-center">
                        <NavLink to="/my-account">
                            <IconButton
                                color="inherit"
                            >
                                <PersonOutlineOutlined style={{ fontSize: 30 }} />
                            </IconButton>

                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
