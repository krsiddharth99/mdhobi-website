import React from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer  from "../components/Footer";
import DryImg from './../assets/imgs/s1df15vf4d5f4gr.PNG'
import LaundryImg from './../assets/imgs/rht5y54jhtrew.PNG'
import AlterImg from './../assets/imgs/GF5drf4ef.PNG'
import { Link } from 'react-router-dom';

function Products(props) {
    const cartProducts = [
        {
            "product_image":"https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/133e9e1b02927bf0d8039b14ed05adcd.png",
            "product_name":"T-Shirt",
            "product_price":"₹20"
        },
        {
            "product_image":"https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/16079903a9feb3c5fc373ab2a65cd378.png",
            "product_name":"Shirt",
            "product_price":"₹25"
        },
        {
            "product_image":"https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/0a35ed19d8171493d7368749514c7def.png",
            "product_name":"Jeans",
            "product_price":"₹30"
        },
        {
            "product_image":"https://quickwashassets.s3.ap-south-1.amazonaws.com/globalAssets/productImgs/08e120c7afaa26c7c21785f78072fe3a.png",
            "product_name":"Socks",
            "product_price":"₹20"
        }
    ];

    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container">
                <div className="text-center">
                    <h2>Select Products</h2>
                    <p>Professional one stop solutions has been here</p>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <h4 className="mb-4">Dry Cleaning</h4>

                        {
                            cartProducts.map(product=>{
                                return(
                                    <div className="p-2 mb-3" style={{boxShadow: '0 .10rem .20rem rgba(0,0,0,.075)'}}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src={product["product_image"]} alt="T-Shirt" style={{maxWidth:'65px'}} />
                                            </div>

                                            <div className="col-md-7">
                                                <div style={{fontSize:'21px',fontWeight:'600'}}>{product["product_name"]}</div>
                                                <p style={{fontSize:'13px'}}>{product["product_price"]} / Per Item</p>
                                            </div>

                                            <div className="col-md-3 d-flex align-items-center">
                                                {/* <div className="d-inline-flex justify-content-between" style={{border:'1px solid #29C56B',padding:'5px 15px',width:'105px',color:'rgb(41, 197, 107)'}}>
                                                    <div style={{cursor:'pointer'}}>
                                                        <span className="fas fa-minus"></span>
                                                    </div>
                                                    <div>2</div>
                                                    <div style={{cursor:'pointer'}}>
                                                        <span className="fas fa-plus"></span>
                                                    </div>
                                                </div> */}
                                                <div className="d-inline-flex justify-content-center" style={{border:'1px solid #29C56B',padding:'5px 15px',width:'105px',color:'rgb(41, 197, 107)',cursor:'pointer'}}>
                                                    ADD
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="col-md-4">
                        {/* <div className="card shadow-sm p-3 h-100">
                            <h4>Cart Summary</h4>
                        </div> */}
                    </div>
                </div>

            </div>

            <br/>
            <br/>
            <Footer/>
        </React.Fragment>
    )
}

export default Products
