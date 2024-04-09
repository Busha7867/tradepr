'use client';

import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';

import { IoHome } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';


import WhiteR from "@/Components/Riceimages/WhiteSella.jpg";
import SteamR from "@/Components/Riceimages/Steammin.jpg";
import Golden from '@/Components/Riceimages/GoldenSella.jpg'
import Shrabati from '@/Components/Riceimages/Sharbatisella.jpg'
import ShrabatiG from '@/Components/Riceimages/Sharbatigolden.jpg'
import SugandhaW from '@/Components/Riceimages/SugandhaWhite.jpg'
import White from '@/Components/Riceimages/White.jpg'
import Whiee from '@/Components/Riceimages/Whitee.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';





const Basmati = () => {
    return (
        <div>
          <Navbar/>
           
            <div className="rice-1 ricebanner">
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
                                <h1 className='About_head'>Basmati</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Basmati</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="basmati1">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-p-12">
                            <h2 className='About_head'style={{textAlign:"center"}}>Basmati Rice</h2></div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">

                        <div className="content_box">


                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={WhiteR} alt="1121 White Sella" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">1121 White Sella</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/1121-white-sella/" class="read-more" >Read More</Link>
                            </div>



                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={SteamR} alt="1121 Steam" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">1121 Steam</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/1121-steam/" class="read-more">Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Golden} alt="1121 Golden Sella" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">1121 Golden Sella</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/1121-golden-sella/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Shrabati} alt="Sharbati White Sella" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Sharbati White Sella</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/sharbati-white-sella/" class="read-more" >Read More</Link>
                            </div>


                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={ShrabatiG} alt="Sharbati Golden Sella" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Sharbati Golden Sella</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/sharbati-golden-sella/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={SugandhaW} alt="Sugandha White Sella" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Sugandha White Sella</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/sugandha-white-sella/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={White} alt="1401 White" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">1401 White</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/1401-white/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Whiee} alt="1409 White" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">1409 White</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/rice/basmati/1409-white/" class="read-more" >Read More</Link>
                            </div>








                        </div>
                    </div>

                </div>
            </div>
            <Counterup/>
            <Footer/>
         
        </div>
    )
}

export default Basmati;