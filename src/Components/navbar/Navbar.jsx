'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import '@/app/navbar.css';


import { BsMailbox2 } from "react-icons/bs";

import Logo from '../images/logo-s.png'


import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterestP, FaTumblr } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import $ from 'jquery';
import { useEffect } from 'react';



const Navbar = () => {




    const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)

    }
    useEffect(() => {

        $(document).ready(function () { 
           $(window).scroll(function () {
             var scroll = $(window).scrollTop();
             if (scroll > 50) { 
               $(".menu").css("background", "rgba(0, 0, 0, 0.5)");
               $(".menu").css("bottom","90px")
               $(".logo").css("width", "75px");
               $(".logo").css("top", "5px");
   
             }  
   
             else {
           $(".menu").css("background", "#fff");
             $(".logo").css("width", "127px");
           $(".logo").css("top", "-37px");
         }
       })
      })
   
    }, []);
    return (
        <div className="div">
            <div className="wrap-1">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-10 topheaderbg">

                                    <div className="top_headerbars">
                                        <h2>
                                            Your Trusted Business Partner
                                        </h2>

                                        <a href="mailto:sales@trade-pros.org">
                                            <BsMailbox2 style={{ margin: "12px 5px" }} /> sales@trade-pros.org
                                        </a>


                                    </div>

                                    <div className="social_icons">
                                        <div className="social_links">
                                            <Link href="https://www.facebook.com/tradepross/" target="blank"> <FaFacebookF /> <span>Facebook</span> </Link>
                                        </div>
                                        <div className="social_links">
                                            <Link href="https://www.instagram.com/trade_pross/" target="blank"> <FaInstagram /> <span>Instagram</span> </Link>
                                        </div>
                                        <div className="social_links">
                                            <Link href="https://twitter.com/trade_pross/" target="blank">  <FaXTwitter /> <span>Twitter</span></Link>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            <div className="menu" >
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="logo_icon">

                                <Link href="/"> <Image src={Logo} alt="logoimage" className="logo" /></Link>
                            </div>
                        </div>

                        <div className="col-8">
                            <nav>
                                <div className='menu-icon' onClick={handleClick}>
                                    {click ? <ImCross /> : <GiHamburgerMenu />}
                                </div>

                                {/* <div className="menu-icon" onClick={handleClick}>

              <i className={click ? 'fas fa-times' : 'fa-solid fa-qrcode'}></i>


            </div> */}

                                <input type="checkbox" id="drop" />
                                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                    <li><Link href="/" onClick={closeMobileMenu}>Home</Link></li>
                                    <li><Link href="/about-us/" onClick={closeMobileMenu}>About Us</Link></li>

                                    <li>
                                        <label for="drop-2" className="toggle"><Link href="/our-products" onClick={closeMobileMenu}>Our Products </Link><IoIosArrowDown className="arrow_down" /></label>
                                        <Link href="/our-products/" onClick={closeMobileMenu}>Our Products <IoIosArrowDown className="Navarrow" /> </Link>
                                        <input type="checkbox" id="drop-2" />
                                        <ul className="firstnested_list">
                                            <li><Link href="/our-products/spices/" onClick={closeMobileMenu}>Spices</Link></li>

                                            <li>


                                                <label for="drop-3" className="toggle">Rice <IoIosArrowForward className="arrow_down" /></label>
                                                <Link href="/our-products/rice/" >Rices <IoIosArrowForward /></Link>
                                                <input type="checkbox" id="drop-3" />
                                                <ul className="nested_list">
                                                    <li><Link href="/our-products/rice/basmati/" onClick={closeMobileMenu}>Basmati</Link></li>
                                                    <li><Link href="/our-products/rice/non-basmati/" onClick={closeMobileMenu} >Non Basmati</Link></li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link href="/global-presence/" onClick={closeMobileMenu}>Global Presence</Link></li>
                                    <li><Link href="/blog/" onClick={closeMobileMenu}>Blog</Link></li>
                                    <li><Link href="/contact-us/" onClick={closeMobileMenu}>Contact Us</Link></li>


                                </ul>


                            </nav>


                        </div>
                        <div className="col-2">

                            <Link href="/product-enquiry/"><button class="pulse-button">Product Enquiry</button></Link>


                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Navbar