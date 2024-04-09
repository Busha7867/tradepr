'use client';

import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import ProductEnquiryform from '@/Components/ProductEnquiryform';






const ProductEnquiry = () => {
    return (
        <div>
            <Navbar/>
            <div className="rice-1 product_enq">
                <div className="container">
                    <div className="row">


                    </div>

                </div>
            </div>
            <div className="about-2">
                <div className="container">
                    <div className="row About_absou">
                        <div className="col-2">
                            <Image src={cor} alt="coriandarimage" className='cor_img' />
                        </div>
                        <div className="col-8">
                            <div className="slugs">
                                <h1 className='About_head'>Product Enquiry</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Product Enquiry</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="product_e">
                <div className="container">

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="form_block product_enquiry" >
                                <h3 className='form_head' style={{ textAlign: "center", fontSize: "24px" }}>When it comes to Commodity Trading, Trade Pros have no limits!</h3>
                        

                        <ProductEnquiryform/>

                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>

                </div>
            </div>
        <Counterup/>
        <Footer/>
        </div>
    )
}

export default ProductEnquiry;