import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeaderImg from './../assets/imgs/45gf8d6as53d.png';
import 'rodal/lib/rodal.css';
import Rodal from "rodal";
import { ArrowDropDownOutlined } from '@material-ui/icons';
import { Drawer, Target, Trigger, CloseButton } from "@accessible/drawer";

function Header(props) {
    const [locationVisible, setlocationVisible] = useState(false);

    function showLocation() {
        setlocationVisible(true);
    }

    function hide() {
        setlocationVisible(false);
    }

    return (
        <React.Fragment>
            <header id="header" className="header" style={{ backgroundColor: '#29C56B' }}>
                <div className="container" style={{ padding: '12px 0px', marginBottom: '70px' }}>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-start align-items-center">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-2">
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
                                    <div style={{ fontWeight: '300', fontSize: '19px' }}>|</div>
                                </div>
                                <div className="col-md-9 col-sm-9">
                                    <Trigger>
                                        {/* onClick={showLocation.bind(this)} */}
                                        <Link>
                                            <div style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'clip', textDecoration: 'underline' }}>
                                                <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Talwandi</span>  , Kota, Rajasthan
                                            <ArrowDropDownOutlined />
                                            </div>
                                        </Link>
                                    </Trigger>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 d-flex justify-content-end align-items-center">
                            <div className="d-none d-sm-none d-md-flex d-lg-flex">
                                <ul className="header-links">
                                    <li className="nav-item nl-simple"><NavLink activeClassName="active" className="nav-link" to="/services">Services </NavLink></li>
                                    <li className="nav-item nl-simple"><NavLink activeClassName="active" className="nav-link" to="/offers">Offers </NavLink></li>
                                    <li className="nav-item nl-simple"><NavLink activeClassName="active" className="nav-link" to="/cart">Basket </NavLink></li>
                                </ul>

                                <div className="ml-2">
                                    {/* <Link to="/account" className="d-flex align-items-center" style={{color:'white',textDecoration:'none'}}>
                                        <div className="mr-2">
                                            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8RyhY0579_wOEKqoK7L4A3hpAsmBnbr_J55CsIRA=s83-c-mo" alt="Chetan Nager" width="30" height="30" style={{borderRadius:'50%'}} />
                                        </div>
                                        <div>
                                            Hi, Chetan
                                        </div>
                                    </Link> */}
                                    <div className="btn shadow-sm btn-primary" style={{ padding: '.2rem 1.5rem' }} onClick={props.show.bind(this)}>Login/Register</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ width: '400px' }}>
                                <h3 style={{ fontWeight: '300', color: '#ffffffd9' }}>We are the Best</h3>
                                <h3 style={{ color: 'rgb(255 255 255)' }}>Laundry Services</h3>
                                <p className="mt-3 mb-4" style={{ lineHeight: '1.8' }}>mDhobi is a professional one stop solutions has been founded on the principal of providing cleaning and quick laundry services.</p>
                                <div>
                                    <div className="btn btn-lg btn-light mr-3" style={{ borderRadius: '30px', padding: '.375rem 1.0rem' }}>Download App</div>
                                    <div className="btn btn-lg btn-outline-light" style={{ borderRadius: '30px', padding: '.375rem 1.5rem' }}>Sign Up</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img src={HeaderImg} alt="hi" width="400" className="img-fluid d-none d-sm-none d-md-block" />
                        </div>
                    </div>
                </div>
            </header>
            <Rodal visible={locationVisible} animation="slideUp" onClose={hide.bind(this)} width="900" height="600" showMask="true" closeOnEsc="true">
                <div className="container">
                    <h4 className="text-center mt-3">Select a Location</h4>
                    <div className="input-group mt-4 w-50">
                        <div className="input-group-prepend">
                            <span class="input-group-text">
                                <span className="fas fa-search"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search for area, street name.." />
                    </div>
                    <div className="mt-4">
                        <h5 className="mb-3">Areas We Serve</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="text-primary"><span className="fas fa-map-marker"></span> SRINATHPURAM</h6>
                                <ul>
                                    <li>RTU</li>
                                    <li>Srinathpuram- A, B, C, D, E</li>
                                    <li>RK Puram -A, B, C, D, E</li>
                                    <li>Swami Vivekanand Nagar</li>
                                    <li>Veer Sawarkar Nagar</li>
                                    <li>Manish Nagar</li>
                                    <li>Mahaveer Nagar Extention</li>
                                    <li>Shivpura</li>
                                    <li>Medical College</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h6 className="text-primary"><span className="fas fa-map-marker"></span> TALWANDI</h6>
                                <ul>
                                    <li>Talwandi All Sectors</li>
                                    <li>Keshavpura</li>
                                    <li>New Jawahar Nagar</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h6 className="text-primary"><span className="fas fa-map-marker"></span> VIGYAN NAGAR</h6>
                                <ul>
                                    <li>Vigyan Nagar (ALL SECTORS)</li>
                                    <li>Chatrappur</li>
                                    <li>PNT Colony</li>
                                    <li>Prem Nagar</li>
                                    <li>Indra Nagar</li>
                                    <li>Sanjaya Nagar</li>
                                    <li>Garish Nagar</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="text-primary"><span className="fas fa-map-marker"></span> DADABARI</h6>
                                <ul>
                                    <li>Basant Vihar</li>
                                    <li>Waqf Nagar</li>
                                    <li>Shakti Nagar</li>
                                    <li>Shastri Nagar</li>
                                    <li>RPS Colony</li>
                                    <li>Balaji Nagar</li>
                                    <li>Pratap Nagar</li>
                                    <li>Kishorepura</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h6 className="text-primary"><span className="fas fa-map-marker"></span> INDIRA VIHAR</h6>
                                <ul>
                                    <li>Rajeev Gandhi Nagar</li>
                                    <li>Mahaveer Nagar-1,2,3</li>
                                    <li>IL Colony</li>
                                    <li>Parijat Colony</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h6 className="text-primary"><span className="fas fa-map-marker"></span> GUMANPURA</h6>
                                <ul>
                                    <li>Ballabh Nagar</li>
                                    <li>Ballabh Bari</li>
                                    <li>Gumanpura</li>
                                    <li>New Gumanpura</li>
                                    <li>Durga Nagar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Rodal>
        </React.Fragment>
    )
}

export default Header
