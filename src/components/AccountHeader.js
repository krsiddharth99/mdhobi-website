import { ArrowDropDownOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeaderImg from '../assets/imgs/45gf8d6as53d.png';
import { Drawer, Target, Trigger, CloseButton } from "@accessible/drawer";


function AccountHeader(props) {

    const [isOpen, setState] = useState(false)

    function toggleOpen() {
        setState(!isOpen);
    }

    const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

    return (
        <React.Fragment>
            {
                console.log(props)
            }
            <div className="fixed-top d-none d-sm-none d-md-block d-lg-block" style={{ backgroundColor: '#FCFCFC', boxShadow: '0 1px 5px 0 #0000001a',marginBottom:'110px'}}>
                <div className="container" style={{ padding: '12px 0px' }}>
                    <div className="row">
                        <div className="col-md-5 col-sm-8 d-flex justify-content-start align-items-center">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-2 col-sm-2">
                                    <Link to="/" className="navbar-brand logo-white" title="mDhobi">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="40px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xmlSpace="preserve">
                                            <g>
                                                <g id="_x23_404040ff">
                                                    <path fill="#414141" d="M192.956,13.618c4.297,7.207,6.596,17.966,16.205,19.689c10.96-0.371,16.88-11.942,26.828-14.445
                                                        c3.45,1.928,5.58,5.346,8.22,8.187c4.327-5.346,8.22-12.347,15.701-13.497c9.132,0.71,13.664,12.449,23.542,10.487
                                                        c12.487-0.168,24.429,3.958,34.979,10.386c6.296-4.567,11.811-10.081,16.985-15.867c2.736,7.681,4.262,15.731,3.686,23.884
                                                        c6.462-8.153,13.229-16.069,20.368-23.681c-1.151,7.07-2.468,14.105-3.726,21.144c28.758-2.268,43.373,27.909,50.035,51.218
                                                        c6.43-2.841,12.623-6.088,18.712-9.641c-2.236,7.747-4.363,15.529-6.662,23.276c-14.79-5.649-30.721-6.361-45.909-10.454
                                                        c-75.981-19.453-157.884-16.916-231.668,10.215c-7.578,3.079-14.616,7.341-21.786,11.233
                                                        c10.521-14.616,27.571-24.629,45.67-25.543c0.236-7.137-1.015-14.174-1.862-21.244c8.796-5.209,17.525-10.892,24.391-18.877
                                                        C180.473,37.569,188.287,25.122,192.956,13.618z"/>
                                                    <path fill="#414141" d="M232.638,162.741c12.146-0.71,24.288-1.589,36.434-1.182c-4.468,11.196-9.542,22.597-19.214,30.311
                                                        C244.952,181.687,239.302,171.875,232.638,162.741z"/>
                                                    <path fill="#414141" d="M272.052,182.771c1.39-7.173,2.808-14.344,4.162-21.517c9.707,0.778,19.416,1.522,29.125,2.098
                                                        c-4.06,6.427-7.882,12.99-11.401,19.724c-1.959-3.823-4.298-7.476-6.228-11.299C282.539,175.494,277.29,179.183,272.052,182.771z"
                                                    />
                                                    <path fill="#414141" d="M238.796,340.55c2.974-9.541,8.458-18.299,18.708-21.005c-3.181,7.341-12.012,14.204-8.223,22.835
                                                        c3.992,6.19,11.605,7.853,17.932,10.79c1.116,5.923,2.231,11.842,3.551,17.761c2.469-5.854,4.027-11.976,5.377-18.098
                                                        c7.448-3.655,19.926-6.223,18.877-16.916c-2.536-5.789-6.05-11.062-9.065-16.612c10.216,2.777,15.497,11.706,18.813,21.113
                                                        c3.887-4.838,5.379-10.389,4.502-16.715c3.651,4.268,6.322,9.27,8.251,14.548c22.934,2.027,42.961,14.82,60.686,28.657
                                                        c7.785,5.851,14.312,14.238,24.258,16.47c14.447,4.195,29.365,0.103,43.402-3.753c-3.414,16.41-11.329,33.151-26.825,41.24
                                                        c-22.868,12.482-50.475,7.239-73.95-0.746c-16.645-5.413-28.786-18.64-43.438-27.435c-10.762-5.619-23.006-1.282-30.349,7.576
                                                        c-8.489-11.094-24.56-12.384-35.316-3.855c-18.607,14.245-39.65,25.238-62.181,31.73c-20.465,5.043-44.215,1.286-59.404-14.172
                                                        c-9.608-9-14.006-21.824-16.747-34.339c11.672,4.533,24.223,11.502,37.044,7.373c13.16-3.316,22.564-13.498,32.916-21.481
                                                        c17.052-13.125,36.301-24.897,58.154-26.995c1.826-5.345,4.635-10.216,8.256-14.51
                                                        C234.093,329.998,233.313,336.527,238.796,340.55 M271.914,374.854c-6.735,1.997-12.853,5.618-19.149,8.696
                                                        c6.26,2.364,12.553,4.702,18.675,7.474c5.989-3.147,12.279-5.614,18.71-7.745C284.126,380.405,278.578,376.105,271.914,374.854z"
                                                    />
                                                    <path fill="#414141" d="M159.261,440.723c9.201,6.293,17.522,13.869,26.86,20.028c42.728,28.487,100.103,33.56,146.824,11.842
                                                        c19.078-7.751,34.371-21.687,50.099-34.477c-20.604,31.732-54.264,55.718-92.288,60.522
                                                        C240.183,507.843,189.945,479.356,159.261,440.723z"/>
                                                </g>
                                                <g id="_x23_18597fff">
                                                    <path fill="#1B5A80" d="M96.844,209.188c37.449,0.238,74.934-0.169,112.385,0.171c12.785-0.136,24.494,6.596,37.28,6.291
                                                        c14.613,0,29.264-0.507,43.879-0.271c14.037,0.981,26.792-6.799,40.828-6.36c37.077-0.066,74.19-0.136,111.302,0.068
                                                        c-0.267,10.421-0.267,20.841-0.437,31.261c-3.96,1.86-7.913,3.788-11.839,5.682c1.246,27.098-5.586,58.727-30.414,73.818
                                                        c-33.626,16.439-77.676,6.43-102.032-21.654c-10.858-12.821-14.008-29.665-17.826-45.499c-6.905-0.542-13.837-0.238-20.741-0.271
                                                        c-2.975,17.423-7.613,35.623-20.16,48.817c-17.153,17.927-42.459,26.761-66.951,26.688c-15.359-1.252-32.273-4.428-43.132-16.44
                                                        c-16.476-17.012-20.841-41.981-19.621-64.818c-4.128-2.163-8.256-4.296-12.35-6.393C96.879,229.929,96.879,219.575,96.844,209.188
                                                        M153.578,220.185c-19.419,0.271-31.09,20.265-30.042,37.989c-0.745,24.864,15.291,52.306,41.339,56.295
                                                        c24.661,3.01,52.674-5.376,67.424-26.422c7.847-10.757,14.58-23.344,14.815-36.943c-1.791-16.982-18.197-28.687-34.371-29.872
                                                        C193.124,219.238,173.231,217.952,153.578,220.185 M326.616,220.929c-17.049,1.59-35.35,15.156-34.101,33.695
                                                        c2.71,18.607,13.77,35.656,28.35,47.26c17.763,11.435,40.8,16.981,61.366,10.59c24.296-8.729,36.098-36.909,33.155-61.267
                                                        c-1.389-13.024-9.233-27.572-23.205-29.974C370.594,217.038,348.302,218.763,326.616,220.929 M252.97,227.627
                                                        c1.996,4.229,3.991,8.458,5.987,12.722c7.105-0.17,14.245-0.338,21.38-0.338c2.1-4.197,4.226-8.425,6.396-12.618
                                                        C275.739,221.841,263.965,222.316,252.97,227.627z"/>
                                                </g>
                                                <g id="_x23_f37b21ff">
                                                    <path fill="#F27C21" d="M216.568,97.923c61.946-9.877,124.63,1.927,185.186,15.053c15.356,1.962,21.75,17.998,23.339,31.531
                                                        c-70.872-14.954-144.822-25.272-216.712-11.301c36.401,2.538,73.136-2.908,109.505,1.929
                                                        c33.696,4.634,67.563,9.473,100.372,18.708c6.365,2.334,16.069,4.16,15.732,12.855c1.221,8.761-5.581,15.257-10.516,21.516
                                                        c-42.734-16.983-87.083-32.106-133.19-35.894c-47.563-2.404-95.131,5.953-140.733,19.078
                                                        c-1.084-16.473-8.356-33.761-24.765-40.053c-6.867-1.186,0-5.311,2.201-6.428C154.491,109.728,185.749,102.795,216.568,97.923z"/>
                                                    <path fill="#F27C21" d="M74.213,167.037c5.988-19.351,26.997-31.968,46.956-27.131c-8.119,7.342-20.331,12.011-22.936,23.783
                                                        c-3.486,11.335,1.961,22.665,6.73,32.747c-5.345,0.609-10.689,1.251-16.035,1.895c-0.744,2.944-2.2,8.832-2.944,11.772
                                                        C74.888,199.04,68.429,182.364,74.213,167.037z"/>
                                                    <path fill="#F27C21" d="M107.027,162.843c5.277-10.183,17.523-12.348,27.673-14.446c7.478,15.157,11.502,33.966,0.574,48.614
                                                        c-8.151-0.373-16.339-0.509-24.526-0.339C105.979,186.319,101.987,173.838,107.027,162.843z"/>
                                                    <path fill="#F27C21" d="M92.177,251.24c1.692,0.575,5.039,1.759,6.697,2.334c-0.238,15.394,3.991,30.243,6.867,45.198
                                                        c-2.706,22.09-5.209,44.246-8.559,66.27c-15.764,6.838-9.235,25.982-5.717,38.535c-17.828-1.595-34.778-7.513-51.253-14.139
                                                        c10.727-8.188,19.691-18.606,25.34-30.958C81.553,324.954,87.406,287.741,92.177,251.24z"/>
                                                    <path fill="#F27C21" d="M107.669,302.999c6.768,9.27,13.802,18.405,22.124,26.389c-0.574,16.54-2.333,33.052-4.396,49.491
                                                        c-7.713-2.064-15.291-4.735-22.361-8.491C105.776,348.029,107.772,325.529,107.669,302.999z"/>
                                                    <path fill="#F27C21" d="M69.745,419.848c2.268-4.534,4.636-9.033,6.901-13.565c6.328,1.928,13.195,2.673,19.115,5.786
                                                        c6.969,6.528,13.634,13.432,21.414,19.046c-0.54,5.243-1.082,10.488-1.624,15.729C100.972,436.694,84.937,428.984,69.745,419.848z
                                                        "/>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="col-md-1 col-sm-1">
                                    <div style={{ fontWeight: '300', fontSize: '19px', color:'#3a3a3a61' }}>|</div>
                                </div>
                                <div className="col-md-9 col-sm-9">
                                <Trigger>
                                    <Link>
                                        <div style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'clip' }}>
                                            <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Talwandi</span>  , Kota, Rajasthan
                                            <ArrowDropDownOutlined />
                                        </div>
                                    </Link>
                                    </Trigger>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 col-sm-4 col-xs-4 d-flex justify-content-end align-items-center">
                            {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                <div className="ml-2">
                                    <span className="fas fa-bars fa-lg" style={{cursor:'pointer'}}></span>
                                </div> 
                            </div> */}
                            <div className="d-none d-sm-none d-md-flex d-lg-flex">
                                <ul className="header-links">
                                    <li className="nav-item nl-simple"><NavLink activeClassName="active" className="nav-link" to="/services">Services </NavLink></li>
                                    <li className="nav-item nl-simple"><NavLink activeClassName="active" className="nav-link" to="/offers">OFFERS </NavLink></li>
                                    <li className="nav-item nl-simple"><NavLink activeClassName="active" className="nav-link" to="/cart">Basket </NavLink></li>
                                </ul>

                                {/* <div className="ml-2">
                                    <span className="fas fa-shopping-cart"></span>
                                </div> */}

                                <div className="ml-2 dropdown">
                                    {/* <a hidden onClick={toggleOpen} className="d-flex align-items-center dropdown-toggle" data-toogle="dropdown" style={{ color: '#3a3a3a', textDecoration: 'none', cursor: 'pointer' }}>
                                        <div className="mr-2">
                                            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8RyhY0579_wOEKqoK7L4A3hpAsmBnbr_J55CsIRA=s83-c-mo" alt="Chetan Nager" width="30" height="30" style={{ borderRadius: '50%' }} />
                                        </div>
                                        <div>
                                            Hi, Chetan
                                        </div>
                                    </a> */}
                                    <div className={menuClass}>
                                        <a className="dropdown-item" href="#">My Orders</a>
                                        <a className="dropdown-item" href="#">Manage Addresses</a>
                                        <a className="dropdown-item" href="#">My Wallet</a>
                                    </div>
                                    <div className="btn shadow-sm btn-primary" style={{ padding: '.2rem 1.5rem' }} onClick={props.show.bind(this)}>Login/Register</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-top d-xs-block d-sm-block d-md-none d-lg-none" style={{ backgroundColor: '#FCFCFC', boxShadow: '0 1px 5px 0 #0000001a' }}>
                <div className="container" style={{ padding: '12px 20px' }}>
                    <div className="row">
                        <div className="col justify-content-start align-items-center">
                            <Link to="/" className="navbar-brand logo-white" title="QuickWash">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    height="40px" viewBox="0 0 2800 512" enable-background="new 0 0 512 512" xmlSpace="preserve">
                                    <g>
                                        <path fill="#FAF9FD" d="M59.45,43.48c41.81-1.11,83.71-0.19,125.55-0.46c17.53,4.04,17.98,31.36,4.67,40.76
                                                    c-43.84,0.44-87.72,0.21-131.57,0.12c-10.83-3.55-9.45-15.91-9.16-24.92C47.29,51.82,53.15,45.66,59.45,43.48z"/>
                                        <path fill="#FAF9FD" d="M427.42,43.38c15.69-6.1,1.79,18.98,9.55,21.62c0.18-7.33-0.18-14.66,0.09-21.99
                                                    c11.09-2.44,23.17,8.44,20.01,19.98c5.34,21.24-24.76,28.04-36.82,15.73C411.83,67.96,413.91,49.01,427.42,43.38z"/>
                                        <path fill="#FAF9FD" d="M350.32,57.19c10.92-6.66,18.37,10.88,8.27,14.46C348.87,76.3,342.14,62.34,350.32,57.19z" />
                                        <path fill="#FAF9FD" d="M370.32,57.19c10.92-6.66,18.37,10.88,8.27,14.46C369.16,76.28,362.17,62.17,370.32,57.19z" />
                                        <path fill="#FAF9FD" d="M389.32,57.19c5.02-0.72,15.24-1.88,12.7,6.81c2.25,7.17-8.93,10.7-13.36,6.37
                                                    C384.12,67.72,384.9,59.74,389.32,57.19z"/>
                                        <g>
                                            <path fill="#FAF9FD" d="M242.38,176.46c41.29-4.33,83.23,12.7,111.9,42.26c32.14,31.81,42.64,80.65,33.28,123.94
                                                        c-6.08,33.05-27.96,60.73-54.53,80.38c-29.3,21.45-68.17,27.85-103.37,21.32c-35.34-4.44-65.2-28.1-86.68-55.35
                                                        c-21.94-33.05-29.12-76.08-18.21-114.3C138.11,221.36,188.36,182.11,242.38,176.46z M253.34,190.43
                                                        c-16.67,1-33.47,4.04-48.66,11.23c-44.79,19.44-74.85,68.49-71.63,117.34c2.49,28.39,13.99,57.18,35,76.94
                                                        c26.47,27.84,66.88,42.48,104.96,36.05c37.55-5.6,71.89-29.63,89.72-63.2c21.74-38.8,19.12-90.09-7.72-125.8
                                                        C333.29,209.33,292.82,190.51,253.34,190.43z"/>
                                        </g>
                                        <path fill="transparent" d="M292.05,289.98c5.42-1.44,10.48,0.97,13.7,5.26c9.89,11.71,27.71,15.3,41.32,7.96
                                                    c7.55-1.46,12.82-8.14,19.74-10.27c8.17,34.11-4.24,70.62-28.35,95.55c-29.95,29.94-77.12,42.01-117.46,28.5
                                                    c-48.59-14.29-84.5-65.28-77.89-116.03c3.54,1.48,5.81,9.08,10.92,6.13c6.52-3.61,9.52-13.98,18.98-11.1
                                                    c11.88,5.08,14.53,19.02,21.08,28.97c4.37,7.76,14.86,10.77,22.84,6.96c10.71-5.68,21.05-14.52,24.52-26.57
                                                    c0.79-3.21,5.26-1.32,7.23,0.03c8.03,5.84,14.54,13.45,21.27,20.65c3.07,3.03,9.39,3.43,10.63-1.38
                                                    C283.31,312.82,285,300.18,292.05,289.98z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#9932cc" d="M83.63,0h342.74c33.44,6.21,66.03,27.39,78.16,60.59c4.01,7.58,3.96,16.63,7.47,24.02v343.76
                                                        c-7.12,30.22-25.79,59.68-55.37,72.21c-25.07,13.71-54.34,8.59-81.63,9.42c-96.67-0.04-193.33,0.07-290-0.05
                                                        c-20.12-3.05-38.74-12.74-54.47-25.42C14.54,468.51,4.45,447.39,0,425.46V84.48c6.41-27.09,20.16-55.17,45.6-68.93
                                                        C56.64,6.87,70.77,4.23,83.63,0z M59.45,43.48c-6.3,2.18-12.16,8.34-10.51,15.5c-0.29,9.01-1.67,21.37,9.16,24.92
                                                        c43.85,0.09,87.73,0.32,131.57-0.12c13.31-9.4,12.86-36.72-4.67-40.76C143.16,43.29,101.26,42.37,59.45,43.48z M427.42,43.38
                                                        c-13.51,5.63-15.59,24.58-7.17,35.34c12.06,12.31,42.16,5.51,36.82-15.73c3.16-11.54-8.92-22.42-20.01-19.98
                                                        c-0.27,7.33,0.09,14.66-0.09,21.99C429.21,62.36,443.11,37.28,427.42,43.38z M350.32,57.19c-8.18,5.15-1.45,19.11,8.27,14.46
                                                        C368.69,68.07,361.24,50.53,350.32,57.19z M370.32,57.19c-8.15,4.98-1.16,19.09,8.27,14.46
                                                        C388.69,68.07,381.24,50.53,370.32,57.19z M389.32,57.19c-4.42,2.55-5.2,10.53-0.66,13.18c4.43,4.33,15.61,0.8,13.36-6.37
                                                        C404.56,55.31,394.34,56.47,389.32,57.19z M242.38,176.46c-54.02,5.65-104.27,44.9-117.61,98.25
                                                        c-10.91,38.22-3.73,81.25,18.21,114.3c21.48,27.25,51.34,50.91,86.68,55.35c35.2,6.53,74.07,0.13,103.37-21.32
                                                        c26.57-19.65,48.45-47.33,54.53-80.38c9.36-43.29-1.14-92.13-33.28-123.94C325.61,189.16,283.67,172.13,242.38,176.46z"/>
                                        </g>
                                        <g>{/*#7259F9*/}
                                            <path id="dor" fill="#9932cc" d="M253.34,190.43c39.48,0.08,79.95,18.9,101.67,52.56c26.84,35.71,29.46,87,7.72,125.8
                                                        c-17.83,33.57-52.17,57.6-89.72,63.2c-38.08,6.43-78.49-8.21-104.96-36.05c-21.01-19.76-32.51-48.55-35-76.94
                                                        c-3.22-48.85,26.84-97.9,71.63-117.34C219.87,194.47,236.67,191.43,253.34,190.43z M292.05,289.98
                                                        c-7.05,10.2-8.74,22.84-11.47,34.66c-1.24,4.81-7.56,4.41-10.63,1.38c-6.73-7.2-13.24-14.81-21.27-20.65
                                                        c-1.97-1.35-6.44-3.24-7.23-0.03c-3.47,12.05-13.81,20.89-24.52,26.57c-7.98,3.81-18.47,0.8-22.84-6.96
                                                        c-6.55-9.95-9.2-23.89-21.08-28.97c-9.46-2.88-12.46,7.49-18.98,11.1c-5.11,2.95-7.38-4.65-10.92-6.13
                                                        c-6.61,50.75,29.3,101.74,77.89,116.03c40.34,13.51,87.51,1.44,117.46-28.5c24.11-24.93,36.52-61.44,28.35-95.55
                                                        c-6.92,2.13-12.19,8.81-19.74,10.27c-13.61,7.34-31.43,3.75-41.32-7.96C302.53,290.95,297.47,288.54,292.05,289.98z"/>
                                        </g>
                                    </g>
                                    <line fill="none" stroke="#dedede" stroke-miterlimit="10" x1="0" y1="109" x2="512" y2="106" />
                                    <text transform="matrix(1 0 0 1 578.6807 362.9707)" fill="darkorchid" stroke="#2B3990" font-family="'SegoeUIEmoji'" font-size="408" stroke-width="0" stroke-miterlimit="10" font-weight="bold">QuickWash</text>
                                </svg>
                            </Link>
                        </div>

                        <div className="col d-flex justify-content-end align-items-center">
                            <div className="ml-2">
                                <span className="fas fa-bars fa-lg" style={{ cursor: 'pointer' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <br />
            <br />
            <br />
            <br />
            <br /> */}
            <div hidden className="container-fluid" style={{ backgroundColor: '#29C56B', paddingTop: '70px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ width: '350px' }}>
                                <h3 style={{ fontWeight: '300', color: '#ffffffd9' }}>We are the Best</h3>
                                <h3 style={{ color: 'rgb(255 255 255)' }}>Laundry Services</h3>
                                <p className="mt-3 mb-4" style={{ lineHeight: '1.8' }}>QuickWash is a professional one stop solutions has been founded on the principal of providing cleaning and quick laundry services for Students, household and commercials.</p>
                                <div>
                                    <div className="btn btn-light mr-3" style={{ borderRadius: '30px', padding: '.375rem 1.0rem' }}>Download App</div>
                                    <div className="btn btn-outline-light" style={{ borderRadius: '30px', padding: '.375rem 1.5rem' }}>Sign Up</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img src={HeaderImg} alt="hi" width="400" />
                        </div>
                    </div>
                </div>
            </div>
            <svg hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#29C56B" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,69.3C384,53,480,75,576,101.3C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <div hidden className="location__shake-container-v1 animated">
                <div className="location-v1"><div>
                <div className="rectangle">
                    <div className="location-body__top-container">
                        <div>
                                <div className="welcome-to-grofers  weight--semibold" style={{fontFamily:'Montserrat',fontSize:'17px'}}>
                                    Welcome to <span className="text-style-1">mDhobi</span>
                                </div>
                                <div>
                                    <div style={{margin:' 15px 0px', display: 'flex'}}>
                                        <div>
                                            <i className="location-icon"></i>
                                        </div>
                                        <div className="please-provide-your">Please provide your delivery location to see services at your nearby</div>
                                    </div>
                                    <div style={{marginLeft: '51px', height: '36px'}}>
                                        <div style={{display: 'flex', height: '100%'}}>
                                            <button className="btn location-box mask-button">Detect my location</button>
                                            <div className="oval-container">
                                                <div className="oval">
                                                    <span className="separator-text">
                                                        <div className="or">OR</div>
                                                    </span>
                                                </div>
                                            </div>
                                        <div style={{width: '220px'}}>
                                            <div className="modal-right__input-wrapper">
                                                <div className="display--table full-width">
                                                    <div className="display--table-cell full-width">
                                                        <div id="map-canvas"></div>
                                                        <div className="Select location-search-input-v1 is-searchable Select--single">
                                                            <div className="Select-control">
                                                                <div className="Select-multi-value-wrapper" id="react-select-4--value">
                                                                    <div className="Select-placeholder">Type your city Society/Colony/Area</div>
                                                                    <div className="Select-input" style={{display: 'inline-block'}}>
                                                                        <input data-test-id="area-input-box" aria-activedescendant="react-select-4--value" aria-expanded="false" aria-haspopup="false" aria-owns="" role="combobox" value="" />
                                                                    </div>
                                                                </div>
                                                                    <span className="Select-arrow-zone">
                                                                        <span className="Select-arrow">
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default AccountHeader
