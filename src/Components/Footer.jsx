
'use client';

import React from "react";
import Flogo from '@/Components/images/logo-s.png';
import Link from "next/link";

import { FaFacebookF, FaInstagram,FaLinkedinIn, FaPinterestP, FaTumblr } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {


    return (

        <div className="footer_section">
            <div className="footer">
                <div className="container footer_r">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                           
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row footer_row">
                        <div className="col-3 col-m-12 col-t-6 footer_back">
                            <h4 className="footer_heading">  About Trade Pros </h4>
                            <div className="logo_footer">
                                <Image src={Flogo} alt="Footer_logo" className="fotter_logo" />
                            </div>
                            <p className="footer_para">Trade Pros is a one-stop solution for food trading from India across the globe <Link href="/about-us/" style={{color:"#F67712"}}>…..Know More</Link></p>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2 col-m-12 col-t-6">

                            <h4 className="footer_head">Quick Links</h4>
                            <ul className="footer-list">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us/">About Us</Link></li>
                                <li><Link href="/our-products/">Our Products</Link></li>
                                <li><Link href="/product-enquiry/">Product Enquiry</Link></li>
                                <li><Link href="/contact-us/">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-2 col-m-12 col-t-6">
                            <h4 className="footer_head">Our Products</h4>
                            <ul className="footer-list">
                                <li><Link href="/our-products/spices/">Spices</Link></li>
                                <li><Link href="/our-products/rice/basmati/">Basmati</Link></li>
                                <li><Link href="/our-products/rice/non-basmati/">Non Basmati</Link></li>

                            </ul>
                        </div>
                        <div className="col-4 col-m-12 col-t-6">
                            <h4 className="footer_head">
                                Get In Touch</h4>
                            <ul className="footer-list li_space ">
                                <li><i class="fa-solid fa-location-crosshairs"></i> &nbsp; &nbsp;C-49, Ground Floor, Sector 10, <br/>Noida, India - 201301</li>
                                <li> <i class="fa-solid fa-mobile-screen-button"></i><a href="tel: +917701967040"> +91 770 196 7040</a></li>
                                <li><i class="fa-solid fa-envelope-open-text"></i> <a href="mailto:sales@trade-pros.org"> 
                              sales@trade-pros.org</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-6">
                            <div className="social_icons footersocial_icons">
                                <div className="social_links">
                                    <Link href="https://www.facebook.com/tradepross/" target="blank"> <FaFacebookF /> <span>Facebook</span> </Link>
                                </div>
                                <div className="social_links">
                                    <Link href="https://www.instagram.com/trade_pross/" target="blank"> <FaInstagram /> <span>Instagram</span> </Link>
                                </div>
                                <div className="social_links">
                                    <Link href="https://twitter.com/trade_pross/" target="blank"> <FaXTwitter/> <span>Twitter</span></Link>
                                </div>
                                <div className="social_links">
                                    <Link href="https://www.linkedin.com/company/trade-pross/" target="blank"> <FaLinkedinIn /> <span>Linkedin</span></Link>
                                </div>
                                <div className="social_links">
                                    <Link href="https://in.pinterest.com/Trade_pros/" target="blank"> <FaPinterestP /> <span>Pinterest</span></Link>
                                </div>
                                <div className="social_links">
                                    <Link href="https://www.tumblr.com/tradepros/" target="blank"> <FaTumblr /> <span>Tumblr</span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                </div>
            </div>
            <div className="footer-2">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12">
                            <p className="Footer_copy">©  {new Date().getFullYear()} Trade-Pros Private Limited. All Rights Reserved | Developed By<a href="https://digitalfyx.com/" target="blank" style={{padding:"0"}}> Digitalfyx</a></p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;
