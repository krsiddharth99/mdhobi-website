import React from 'react'
import { Avatar, Fab, Tooltip,Button } from '@material-ui/core';
import { AddOutlined, MobileFriendlyOutlined, RoomOutlined,PersonOutlineOutlined,EditOutlined,DeleteOutlined } from '@material-ui/icons';
const isEmpty = false;

function Addresses() {
    const [visible, setVisible] = React.useState(false);
    const [shows, setShow] = React.useState(false);
    const [placement, setPlacement] = React.useState('right');

    function show() {
        setVisible(true);
    }

    function hide() {
        setVisible(false);
    }

    function close() {
        setShow(false);
    }
    function toggleDrawer() {
        setShow(true);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 manage-address">
                        {
                            isEmpty ?
                                <div className="container">
                                    <div className="mb-20 pt-10 pb-10 pl-20">
                                        <p className="mb-20" style={{ fontSize: '24px', fontWeight: 'bold', color: '#12CF69' }}>Manage Addresses</p>
                                    </div>
                                    <div className="m-0 d-flex flex-column align-items-center">
                                        <img src="/imgs/location-empty.png" alt="location-empty" />
                                        <h4 className="mb-10">No Address Added Yet</h4>
                                        <p className="w-50 pb-20 text-center" style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Click on the '+' button to add your first shipping Address and start shipping</p>
                                    </div>
                                    <Tooltip title="Add Address" placement="left">
                                        <Fab aria-label="add" style={{ color: 'white', backgroundColor: '#12CF69', outline: 'none', position: 'sticky', bottom: '40px', float: 'right' }}>
                                            <AddOutlined />
                                        </Fab>
                                    </Tooltip>
                                </div> : <div className="container">
                                    <div className=" mb-20 pt-10 pb-10 pl-20">
                                        <p className="mb-20" style={{ fontSize: '24px', fontWeight: 'bold', color: '#12CF69' }}>Manage Addresses</p>
                                        {/* <Button style={{ fontSize: '13px' }} appearance="ghost">ADD NEW ADDRESS</Button> */}
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-md-4 shadow-sm mb-20" style={{ borderRadius: '10px' }}>
                                            <div className="pt-10 pb-10">
                                                <div className="">
                                                    <h5 style={{ color: 'rgba(0,0,0,0.4)', fontSize: '15px', fontWeight: 'bolder', marginBottom: '7px' }}><PersonOutlineOutlined />&nbsp; Siddharth Kumar</h5>
                                                    <p style={{ color: 'rgba(0,0,0,0.4)', fontSize: '13px', fontWeight: 'bolder' }}><MobileFriendlyOutlined />&nbsp; +91 9076652887</p>
                                                    <hr />
                                                    <p style={{ fontSize: '12px', color: '#12CF69', fontWeight: 'bolder', letterSpacing: '1px' }}>ADDRESS:</p>
                                                    <p className="mb-10" style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', fontWeight: 'bolder' }}><RoomOutlined />&nbsp; M II / 121, Aliganj, Sector-C, Yojana Jankipuram, Sitapur Road, Lucknow, Uttar Pradesh, 226001</p>
                                                    <hr className="mt-10 mb-10" />
                                                    {/* <i style={{ color: 'rgba(0,0,0,0.7)', fontSize: '13px' }}>This is your default delivery address</i><br /> */}
                                                    {/* <i style={{ color: 'rgba(0,0,0,0.7)', fontSize: '13px' }}>This is your default billing address</i> */}
                                                    <div className="d-flex align-items-start justify-content-start mt-20">
                                                        <Button appearance="link" style={{ color: '#12CF69', fontWeight: 'bolder', letterSpacing: '1px', fontSize: '11px' }} onClick={toggleDrawer}>EDIT <EditOutlined /></Button>
                                                        <Button appearance="link" style={{ color: 'red', fontWeight: 'bolder', letterSpacing: '0.3px', fontSize: '11px' }}>DELETE <DeleteOutlined /></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 shadow-sm mb-20" style={{ borderRadius: '10px' }}>
                                            <div className="pt-10 pb-10">
                                                <div className="">
                                                    <h5 style={{ color: 'rgba(0,0,0,0.4)', fontSize: '15px', fontWeight: 'bolder', marginBottom: '7px' }}><PersonOutlineOutlined />&nbsp; Siddharth Kumar</h5>
                                                    <p style={{ color: 'rgba(0,0,0,0.4)', fontSize: '13px', fontWeight: 'bolder' }}><MobileFriendlyOutlined />&nbsp; +91 9076652887</p>
                                                    <hr />
                                                    <p style={{ fontSize: '12px', color: '#12CF69', fontWeight: 'bolder', letterSpacing: '1px' }}>ADDRESS:</p>
                                                    <p className="mb-10" style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', fontWeight: 'bolder' }}><RoomOutlined />&nbsp; M II / 121, Aliganj, Sector-C, Yojana Jankipuram, Sitapur Road, Lucknow, Uttar Pradesh, 226001</p>
                                                    <hr className="mt-10 mb-10" />
                                                    {/* <i style={{ color: 'rgba(0,0,0,0.7)', fontSize: '13px' }}>This is your default delivery address</i><br /> */}
                                                    {/* <i style={{ color: 'rgba(0,0,0,0.7)', fontSize: '13px' }}>This is your default billing address</i> */}
                                                    <div className="d-flex align-items-start justify-content-start mt-20">
                                                        <Button appearance="link" style={{ color: '#12CF69', fontWeight: 'bolder', letterSpacing: '1px', fontSize: '11px' }}>EDIT <EditOutlined /></Button>
                                                        <Button appearance="link" style={{ color: 'red', fontWeight: 'bolder', letterSpacing: '0.3px', fontSize: '11px' }}>DELETE <DeleteOutlined /></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Tooltip title="Add Address" placement="left">
                                        <Fab aria-label="add" style={{ color: 'white', backgroundColor: '#12CF69', outline: 'none', position: 'sticky', bottom: '30px', float: 'right' }}>
                                            <AddOutlined />
                                        </Fab>
                                    </Tooltip>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Addresses
